import fs from "fs";
import fsp from "fs/promises";
import path from "path";
import { spawn, type ChildProcess } from "child_process";
import os from "os";
import { fileURLToPath, URL } from 'url';
import { InstructionSet } from "./instruction-set.js";
import { Constants } from "./constants.js";

const outputModes = {
  "table": (contents: string) => JSON.parse(contents) as Record<string, any>,
  'integer': (contents: string) => parseInt(contents),
  'integer?': (contents: string) => parseInt(contents),
  'float': (contents: string) => parseFloat(contents),
  'float?': (contents: string) => parseFloat(contents),
  'boolean': (contents: string) => contents == "true",
  'bool': (contents: string) => contents == "true",
  "start: integer?, end: integer?": (contents: string) => JSON.parse(contents) as [start: number, end: number],
  "string?": (contents: string) => contents,
  "iterator": (contents: string) => JSON.parse(contents) as any[],
  "string": (contents: string) => contents,
  "void": (contents: string) => { },
} as const;

const randomStr = () => Math.floor(Math.random() * 1000000).toString(16)

/**
 * 
 * Call `Kontakt.run(async ()=>{ }))` and place your instructions in the callback
 * 
 * If using a nonstandard install location, make sure to point `process.env.KONTAKT_PATH` to your Kontakt executable
 * 
 * Only a single run is supported at a time, multiple runs may be executed in sequence
 */
export class Kontakt {
  /**
   * Set to true to enable terminal output from kontakt
   */
  public static enableDebugOutput = false;

  /**
   * If false, kontakt exits after a run is completed (clean exit)  
   * 
   * If true, keeps kontakt alive after a run
   * @default false
   */
  public static keepAlive = false;

  public static preloadedConstants: Record<string, any> = {};


  /**
   * @private
   */
  private static maxReadOutputRetries = 5

  /**
   * @private
   */
  private static retryDelay = 3000



  private static constants = new Constants(this);
  /**
   * @private
   */
  private static jobParams: {
    JOB_ID: string,
    TMP_DIR: string,
    LUA_BRIDGE: string,
    KONTAKT_EXE: string
  }

  /**
  * @private
  */
  private static get jobFile() {
    return path.join(Kontakt.jobParams.TMP_DIR, Kontakt.jobParams.JOB_ID);
  }

  /**
  * @private
  */
  private static getOutputFilePath(output_file: string) {
    return path.join(this.jobParams.TMP_DIR, output_file);
  }

  /**
  * @private
  */
  private static getKontaktExecutable() {
    const KONTAKT_EXE = process.env?.KONTAKT_PATH;

    let defaultPath = os.platform() == "darwin"
      ? "/Applications/Native Instruments/Kontakt 7/Kontakt 7.app/Contents/MacOS/Kontakt 7"
      : "C:\\Program Files\\Native Instruments\\Kontakt 7\\Kontakt 7.exe"

    const exists = fs.existsSync(defaultPath);

    if (!KONTAKT_EXE && !exists) {
      throw new Error("Environment variable KONTAKT_PATH was not set and was not found on default path");
    };

    return KONTAKT_EXE ?? defaultPath;
  }

  /**
 * @private 
 */
  private static instance: ChildProcess;

  /**
  * @private
  */
  private static spawnKontaktBridge() {

    const stdio = Kontakt.enableDebugOutput ? "inherit" : "ignore"
    if (Kontakt.enableDebugOutput) {
      console.log(`Executing ${Kontakt.jobParams.KONTAKT_EXE} ${Kontakt.jobParams.LUA_BRIDGE}`)
    }
    const child = spawn(Kontakt.jobParams.KONTAKT_EXE, [Kontakt.jobParams.LUA_BRIDGE], { detached: Kontakt.keepAlive, env: { ...process.env }, stdio: [stdio, stdio, stdio] })
    if (Kontakt.keepAlive) {
      child.unref();
    } else {
      Kontakt.instance = child;
    }
  }

  /**
  * @private
  */
  private static init() {
    Kontakt.jobParams = {
      JOB_ID: randomStr(),
      LUA_BRIDGE: fileURLToPath(new URL('../bridge.lua', import.meta.url)),
      TMP_DIR: fileURLToPath(new URL('../tmp', import.meta.url)),
      KONTAKT_EXE: this.getKontaktExecutable()
    }

    this.preloadedConstants = {};


    const TMP_DIR_EXISTS = fs.existsSync(Kontakt.jobParams.TMP_DIR);

    if (TMP_DIR_EXISTS) {
      fs.rmSync(Kontakt.jobParams.TMP_DIR, { recursive: true });
    }

    fs.mkdirSync(Kontakt.jobParams.TMP_DIR, { recursive: true });

    process.env.KONTAK_TS_JOB_FILE = Kontakt.jobFile
    this.spawnKontaktBridge();
  }

  /**
  * @private
  */
  private static async kill() {
    await this.sendCommand("KILL")
    if (!Kontakt.keepAlive) {
      Kontakt.instance.kill(15);
    }
  }

  static async run(cb: (commands: InstructionSet<typeof outputModes>, constants: Omit<Constants, "list">) => Promise<void>) {
    Kontakt.init();
    await this.preloadConstants();
    try {
      await cb(
        new InstructionSet<typeof outputModes>(this),
        this.constants
      );
    } catch (err) {
      console.error(err);
    }

    await Kontakt.kill()
    clearTimeout(Kontakt.outputTimeout);
  }


  /**
  * @private
  */
  private static async createOutputFile(output_file: string) {
    await fsp.writeFile(output_file, "");
  }

  /**
  * @private
  */
  private static async sendCommand(command: string, args: any[] = [], output_file?: string) {
    await fsp.writeFile(Kontakt.jobFile, JSON.stringify({ command, args, output_file }))
  }

  static async preloadConstants() {
    const list = this.constants.list();
    this.preloadedConstants = await this.execCommandRawAsync("PRELOAD_CONSTANTS", "table", list)
  }

  /**
  * @private
  */
  private static outputTimeout: NodeJS.Timeout;

  static async execCommandRawAsync<T extends keyof typeof outputModes>(command: string, expectedOutput: T, ...args: any[]) {
    return new Promise<ReturnType<typeof outputModes[T]>>(async (res, rej) => {
      const outputId = randomStr()
      const OUTPUT_FILE = Kontakt.getOutputFilePath(outputId);
      await this.createOutputFile(OUTPUT_FILE);
      Kontakt.outputTimeout = setTimeout(rej, 45000);

      const watcher = fs.watch(OUTPUT_FILE, async (a) => {
        clearTimeout(Kontakt.outputTimeout)
        const str = await fsp.readFile(OUTPUT_FILE, "utf-8")
        watcher.close();
        res(this.readResult(OUTPUT_FILE, expectedOutput) as ReturnType<typeof outputModes[T]>);
      })

      await Kontakt.sendCommand(command, args, OUTPUT_FILE)
    })
  }

  static async readResult(OUTPUT_FILE: string, expectedOutput: keyof typeof outputModes, attempt = 1) {
    const transformFn = outputModes[expectedOutput];
    let result;
    const str = await fsp.readFile(OUTPUT_FILE, "utf-8")
    try {
      result = transformFn(str);
    } catch (err) {
      if (Kontakt.enableDebugOutput) {
        console.warn(`Could not read output.. retrying ${attempt}/${this.maxReadOutputRetries}`)
      }
      if (attempt < this.maxReadOutputRetries) {
        return new Promise(res => {
          setTimeout(() => {
            res(this.readResult(OUTPUT_FILE, expectedOutput, attempt + 1));
          }, this.retryDelay)
        });
      }
      throw new Error("Could not read output");
    }
  }

}
