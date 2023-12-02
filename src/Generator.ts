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

    genClass() : void {
        let dir = this.getSourceDir();
        let cname = process.argv[3];
        let outfile = util.format('%s/%s.ts', dir, cname);

        let content = '// ' + cname;

        this.fu.writeTextFileSync(outfile, content);
        console.log(util.format('file written: %s', outfile));

        if (this.cliArgPresent('-t')) {
            this.genTest();
        }
        else {
            if (this.cliArgPresent('-list')) {
                this.listSourceDir();
            }
        }
    }

    genTest() : void {
        let dir = this.getSourceDir();
        let cname = process.argv[3];
        let outfile = util.format('%s/%s.test.ts', dir, cname);

        let content = '// ' + cname;

        this.fu.writeTextFileSync(outfile, content);
        console.log(util.format('file written: %s', outfile));

        if (this.cliArgPresent('-list')) {
            this.listSourceDir();
        }
    }

    // ========== api methods above; private methods below ==========

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

    getPackageName() : string {
        let pkg = this.getPackageJson();
        return pkg['name'];
    }

    getPackageVersion() : string {
        let pkg = this.getPackageJson();
        return pkg['version'];
    }

    getPackageAuthor() : string {
        let pkg = this.getPackageJson();
        return pkg['author'];
    }

    getPackageJson() {
        return this.fu.readJsonObjectFile('package.json');
    }

    cliArgPresent(flag: string) : boolean {
        for (let i = 0; i < process.argv.length; i++) {
            if (process.argv[i] === flag) {
                return true;
            }
        }
        return false;
    }

}
