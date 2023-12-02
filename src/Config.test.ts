// Unit tests for class Config
// Chris Joakim, Microsoft, 2023

// npm test --testPathPattern Config

import util from "util";

import { Config } from "./Config";
import { FileUtil } from "./FileUtil";

test("Config: platform methods", async () => {
    try {
        let platform : string = Config.platform();
        let win : boolean = Config.isWindows();
        let mac : boolean = Config.isMac();
        let linux : boolean = Config.isLinux();
        console.log(util.format('platform: %s, win: %s, mac: %s, linux: %s', platform, win, mac, linux));
        expect(1).toBe(1);
    }
    catch (error) {
        expect(true).toBe(false);
    }
});

test("Config: ensure version number consistency", async () => {
    // Ensure that the package.json, Config.ts and README files are consistent
    // regarding the current version number of azu-js.
    let fu = new FileUtil();
    let pkg = fu.readJsonObjectFile('package.json');
    let pkgVersion = pkg['version'];
    let readmeLines : Array<string> = fu.readTextFileAsLinesSync('README.md');
    let expectedReadmeLine : string = util.format('"tsg-js": "%s"', pkgVersion);
    let expectedReadmeLineFound : boolean = false;
    readmeLines.forEach(line => { 
        if (line.includes(expectedReadmeLine)) {
            expectedReadmeLineFound = true;
        }
    }); 
    expect(pkgVersion).toBe('0.0.3');
    expect(pkgVersion).toBe(Config.LIB_VERSION);
    expect(readmeLines.length).toBeGreaterThan(10);
    expect(readmeLines.length).toBeLessThan(60);
    //expect(expectedReadmeLineFound).toBe(true);
});
