/**
 * 
 * Chris Joakim, 2023
 */

import fs from "fs";
import os from "os";
import path from "path";
import util from "util";

import { exec } from "child_process";

import { Config } from "./Config";
import { FileUtil } from "./FileUtil";

export class Generator {

    fu : FileUtil = null;

    constructor() {
        this.fu = new FileUtil();
    }

    listSourceDir() : void {
        let dir = this.getSourceDir();
        this.listDir(dir);
    }

    listDistDir() : void {
        let dir = this.getDistDir();
        this.listDir(dir);
    }

    listDir(dir : string) : void {
        let command = util.format('ls -al %s', dir);
        if  (Config.isWindows()) {
            command = util.format('dir %s', dir);
        }
        console.log(util.format('command: %s', command));
        exec(command, (error, stdout, stderr) => {
            console.log(stdout);
        });
    }

    getSourceDir() : string {
        let tsconfig = this.getTsConfig();
        return tsconfig['compilerOptions']['rootDir'];
    }

    getDistDir() : string {
        let tsconfig = this.getTsConfig();
        return tsconfig['compilerOptions']['outDir'];
    }

    getTsConfig() {
        return this.fu.readJsonObjectFile('tsconfig.json');
    }

    getPackageJson() {
        return this.fu.readJsonObjectFile('package.json');
    }
}
