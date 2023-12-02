// Unit tests for class FileUtil
// Chris Joakim, Microsoft, 2023

// npm test --testPathPattern Generator

import path from "path";
import util from "util";

import { Generator } from "./Generator";

function epochTime() : number {
    return Date.now().valueOf();
}

test("Generator: generate console app package.json", () => {
    let g = new Generator();
    let obj = g.fu.readJsonObjectFile('package.json');
    obj['name'] = 'console_app';
    obj['description'] = 'console app using tsg-js';
    obj['dependencies']['tsg-js'] = util.format('file:../tsg-js-%s.tgz', obj['version']);
    expect(Object.keys(obj).length).toBeGreaterThan(6);
    expect(Object.keys(obj).length).toBeLessThan(20);
    g.fu.writeTextFileSync('console_app/package.json', JSON.stringify(obj, null, 4));
});
