# kontak.ts
> Program kontakt using javascript

## Introduction

kontak.ts is a npm package written in typescript which enables use of the Kontakt Lua API from node.

The package is based on the [Kontakt Lua API](https://native-instruments.com/ni-tech-manuals/kontakt-api-reference-manual/en/welcome-to-the-kontakt-lua-api-reference-manual) 
A bridging lua script is run within kontakt, which allows commands to be issued from a node environment. 

This package enables a more pleasant developer experience with auto-completion and type safety.

The api is scraped from the online docs, and includes functions and constants with type information and descriptions.


## Usage

Call Kontakt.run() and place your instructions in the callback. The functions are exposed through the first argument of the callback, and the constants through the second.

All of the exposed functions are async. Since the communication between kontakt and node happens on a single channel a function must **always** be awaited before calling another.

The constants are preloaded before execution and can be used sychronously as normal, as well as any other node apis.

```ts
import { Kontakt } from "kontak.ts";

Kontakt.run(async (functions, constants) => {
  const instrumentIdx = await functions.addInstrument();

  await functions.setInstrumentVolume(instrumentIdx, 11);

  await saveInstrument(instrumentIdx, "myNewKontaktInstrument", {});
});

```

## Configuration
  ```ts
  Kontakt.enableDebugOutput = false
  Kontakt.keepAlive = false;
  ```
  `enableDebugOutput`
  Set to true to enable terminal output from kontakt

  `keepAlive`
  If false, kontakt exits after a run is completed (clean exit)  
  If true, keeps kontakt alive after a run



### Path to kontakt
If using a nonstandard install location, the environment variable KONTAKT_PATH is used to find the Kontakt executable. It can be set using `process.env.KONTAKT_PATH`


## Limitations / Known issues

- The Lua Filesystem module is intentionally not included, as the `fs` module included in node will be significantly faster and more fully featured.

- The communication between kontakt and node happens via disk, open for ideas and PRs changing this

- Certain functions or constants may be broken or missing, if you find something in particular feel free to open an issue 