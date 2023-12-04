#!/usr/bin/env node

/**
 * Entry point for tsg-js.
 * Chris Joakim,  2023
 */

// This article was helpful to the development of tsg-js:
// https://blog.logrocket.com/building-typescript-cli-node-js-commander/

import fs from "fs";
import os from "os";
import path from "path";
import util from "util";

const figlet = require("figlet");

import { Generator } from "./Generator";

let func = process.argv[2];
let gen  = new Generator();

switch (func) {
    case "lsrc":
        gen.listSourceDir();
        break;
    case "ldist":
        gen.listDistDir();
        break;
    case "genclass":
        gen.genClass();
        break;
    case "gentest":
        gen.genTest();
        break;
    default:
        displayCommandLineExamples();
        break;
}

function displayCommandLineExamples() {
    console.log(figlet.textSync('TSG-js'));
    console.log(util.format('  version: %s', gen.getPackageVersion()))
    console.log('--------------------------------------------------------------------');
    console.log(' npx tsg genclass SomeClass      # generate a class file');
    console.log(' npx tsg genclass SomeClass -t   # generate class and test files');
    console.log(' npx tsg gentest SomeClass       # generate a test file');
    console.log(' npx tsg genjest                 # generate a Jest config file');
    console.log(' npx tsg lsrc                    # list the TS source directory');
    console.log(' npx tsg ldist                   # list the TS transpiled directory');
    console.log('');
}