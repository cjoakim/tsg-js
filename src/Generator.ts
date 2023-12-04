/**
 * 
 * Chris Joakim, 2023
 */

import fs from "fs";
import os from "os";
import path from "path";
import util from "util";

import { exec } from "child_process";

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
        let author = this.getPackageAuthor();
        let outfile = util.format('%s/%s.ts', dir, cname);

        let template = this.classTemplate();
        let content = util.format(template, author, cname);

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
        let author = this.getPackageAuthor();
        let outfile = util.format('%s/%s.test.ts', dir, cname);

        let template = this.testTemplate();
        let content = util.format(
            template, cname, author, cname, cname, cname, cname, cname);

        this.fu.writeTextFileSync(outfile, content);
        console.log(util.format('file written: %s', outfile));

        if (this.cliArgPresent('-list')) {
            this.listSourceDir();
        }
    }

    genJest() : void {
        let dir = process.cwd();
        let outfile = util.format('%s/jest.config.js', dir);

        let content = this.jestTemplate();

        this.fu.writeTextFileSync(outfile, content);
        console.log(util.format('file written: %s', outfile));
    }

    // ========== api methods above; private methods below ==========

    listDir(dir : string) : void {
        let command = util.format('ls -al %s', dir);
        if  (this.isWindows()) {
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

    /**
     * Return the name of the platform where this node.js process is running.
     * Possible values are 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', and 'win32'.
     */
    platform() : string {
        return os.platform();
    }

    /**
     * Return true if the current platform is Windows, else return false. 
     */
    isWindows() : boolean {
        let p : string = os.platform().toLowerCase();
        if (this.isMac()) {
            return false;  // 'darwin' contains 'win'!
        }
        return p.includes('win');
    }

    /**
     * Return true if the current platform is Apple macOS, else return false. 
     */
    isMac() : boolean {
        let p : string = os.platform().toLowerCase();
        return p.includes('darwin');
    }

    /**
     * Return true if the current platform is Linux, else return false. 
     */
    isLinux() : boolean {
        let p : string = os.platform().toLowerCase();
        return p.includes('linux');
    }

    cliArgPresent(flag: string) : boolean {
        for (let i = 0; i < process.argv.length; i++) {
            if (process.argv[i] === flag) {
                return true;
            }
        }
        return false;
    }

    classTemplate() : string {

        return `
/**
 * 
 * %s
 */

import fs from "fs";
import os from "os";
import path from "path";
import util from "util";

// import { YourClass } from "./YourClass";

export class %s {

    constructor() {

    }

    someMethod() : string {
        return 'some value';
    }
}
`.trimLeft();
    }

    testTemplate() : string {

        return `
/**
 * Unit tests for class %s
 * %s
 */

// npm test --testPathPattern %s

import util from "util";

import { %s } from "./%s";

test("%s: test xxx", () => {
    let tested = new %s();
    expect(tested.someMethod()).toBe('some value');
});    
`.trimLeft();
}

    jestTemplate() {
        return `
module.exports = {
    "roots": ["src"],
    "transform": {"^.+\\.tsx?$": "ts-jest"},
    collectCoverage: true,
    coverageDirectory: 'coverage',
    slowTestThreshold: 10
}
`.trimLeft();
    }

    installBashTemplate() {
        return `
#!/bin/bash

# Bash script to install and list the npm packages for this app.
#
# Chris Joakim, 2023

rm -rf ./node_modules
rm package-lock.json

mkdir -p ./node_modules

npm unlink tsg-js

npm install

npm install ../tsg-js-%s.tgz

npm list
        
`.trimLeft();
    }

    installPwshTemplate() {
        return `
# PowerShell script to install and list the npm packages for this app.
#
# Chris Joakim, 2023

Remove-Item -Path "node_modules" -Confirm:$false -Recurse -Force | out-null
Remove-Item package-lock.json | out-null

New-Item -ItemType Directory -Force -Path .\tmp | out-null

npm unlink tsg-js

npm install

npm install ../tsg-js-%s.tgz

npm list

`.trimLeft();
    }
}
