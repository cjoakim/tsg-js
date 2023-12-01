// Unit tests for class FileUtil
// Chris Joakim, Microsoft, 2023

// npm test --testPathPattern Generator

import path from "path";
import util from "util";

import { Generator } from "./Generator";

function epochTime() : number {
    return Date.now().valueOf();
}

test("Generator: cwd", () => {
    let g = new Generator();
    let cwd : string = g.cwd();
    let endsWell : boolean = cwd.endsWith('tsg-js');
    //console.log(cwd);
    expect(cwd).toContain('tsg-js');
    expect(endsWell).toBe(true);
});
