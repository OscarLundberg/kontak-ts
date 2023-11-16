import * as cheerio from "cheerio";
import fs, { write } from 'fs';
import path from "path";

const baseUrl = `https://native-instruments.com/ni-tech-manuals/kontakt-api-reference-manual/en/`;
const pages = ["multi", "instrument", "group", "zone", "presets", "options", "utility",  /*"filesystem",*/ "music-information-retrieval--mir-"]
let functions = [];
let constants = [];
let $;
const uniqueTypes = {};
const uniqueReturnTypes = {};
const uniqueFunctionNames = {};

const functionBlacklist = ["assert_fail"]


function getUniqueFunctionName(str) {
  const exists = (s) => uniqueFunctionNames?.[s];
  if (exists(str)) {
    for (let i = 2; i < 10; i++) {

      if (!exists(`${str}${i}`)) {
        uniqueFunctionNames[`${str}${i}`] = true;
        return `${str}${i}`;
      }
    }
  }
  uniqueFunctionNames[str] = true;
  return str;
}

function replaceTypes(str) {
  if (str?.includes(",")) {
    str = `[${str}]`
  }

  return str
    .replace(/integer/g, "number")
    .replace(/bool/g, "boolean")
    .replace(/float/g, "number")
    .replace(/table/g, "string[]")
    .replace(/iterator/g, "any[]")
    .replace("?", "")
}

const snakeToCamel = str =>
  str.toLowerCase().replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );



async function writeFunctionsToFile() {
  const instructionSet = functions.map(e => {
    return `
      /**
       * @summary ${e.summary}
       */ 
      ${e.name}(${e.args.map(a => `${a.name}${a.optional ? "?" : ""}:${a.type}`).join(", ")}){ return this.kontakt.execCommandRawAsync("${e.key}", "${e.returnValue}", [${e.args.map(e => e.name).join(", ")}]) }`
  }).join("\n")

  const types = Object.keys(uniqueReturnTypes).map(e => `"${e}"`).join(" | ")

  const cls = `
      export type Output = ${types};
      export class InstructionSet<T extends {[key in Output]: any}> { 
      constructor(private kontakt: { execCommandRawAsync<K extends Output>(a1:string, a2:K, args:any[]):Promise<ReturnType<T[K]>>}){}
      ${instructionSet}
    }`

  fs.writeFileSync(path.resolve("./src/instruction-set.ts"), cls)
}

function scrapeKontaktFunction() {
  const matches = $(this).text().matchAll(/([^(\s]+)\s*\(\s*([^)]+)\s*\)\s*(?:->\s*(.*))?/gm)
  for (let [_, name, args, returnValue] of matches) {
    console.log({name, args, returnValue})

    const _args = args.replace("...", "").split(",").map(e => e.split(":")).map(e => e.map(f => f.trim())).reduce((prev, [name, type]) => {
      const optional = type.includes("?");
      type = replaceTypes(type)
      uniqueTypes[type] = "";
      return [
        ...prev,
        {
          name: snakeToCamel(name),
          type,
          optional
        }
      ]
    }, []);
    const summary = $(this).nextAll().text()
    if(!returnValue) {
      returnValue = "void"
    }
    uniqueTypes[returnValue] = "";
    uniqueReturnTypes[returnValue] = "";


    if(functionBlacklist.includes(name)) { return; }

    functions = [...functions, { name: getUniqueFunctionName(snakeToCamel(name)), key: name, args: _args, returnValue, summary }];

  }

}

function writeConstantsToFile() {
  const cls = `export class Constants {
   constructor(private kontakt: {preloadedConstants:Record<string, any>}){
  }

  /**
   * @internal 
   **/  
  list(){ return [${constants.map(e => `"${e.name}"`).join(",")}]  }
  ${constants.map(e => `
    /**
     * @summary 
     * ${e.summary.replaceAll("”“", "`\n\t* - `").replaceAll("“", "- `").replaceAll("”", "`")}
     **/
    get ${e.name.toUpperCase()}(){ return this.kontakt.preloadedConstants["${e.name}"] as ${replaceTypes(e.type)} }
  `).join("\n")}
  }`
  fs.writeFileSync(path.resolve("./src/constants.ts"), cls)

}

function scrapeKontaktConstant() {
  console.log("Scraping constant...")
  const txt = $(this).text();
  console.log({ txt })
  const matches = $(this).text().matchAll(/([^:]+):\s+([^\s]+)/gm)
  for (let [_, name, type] of matches) {
    console.log({ matches });
    const summary = $(this).nextAll().text()
    constants = [...constants, { name: name.trim(), type, summary }]
  }
}

(async () => {
  for (let page of pages) {
    const res = await fetch(`${baseUrl}/${page}`)
    $ = cheerio.load(await res.text());
    $(".programlisting").each(function () {
      const text = $(this).text()
      if (text.match(/^[^\n]+->.+/gm)) { scrapeKontaktFunction.call(this); }
      else if (text.match(/^([^(:]+):\s+([^)\s]+)/gm)) { scrapeKontaktConstant.call(this); }
      else if (text.match(/^[^\n]+\([^\n]+/)) { scrapeKontaktFunction.call(this); }
    })
  }

  await writeFunctionsToFile();
  await writeConstantsToFile();
})();
