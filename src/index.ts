/**
 * 
 * Chris Joakim,  2023
 */

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
    console.log('displayCommandLineExamples() - TODO - implement');
    // console.log("node .\\dist\\index.js config");
    // console.log("node .\\dist\\index.js files");
    // console.log("node .\\dist\\index.js storage");
    // console.log("node .\\dist\\index.js cosmos_nosql");
    // console.log("node .\\dist\\index.js cosmos_mongo");
    // console.log("node .\\dist\\index.js cosmos_pg");
    // console.log("node .\\dist\\index.js embeddings");
    // console.log('');
}