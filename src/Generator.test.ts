/**
 * Unit tests for class Generator
 * Chris Joakim
 */

// npm test --testPathPattern Generator

import util from "util";

import { Generator } from "./Generator";

test("Generator: generate console app package.json", () => {
    let g = new Generator();
    let obj = g.fu.readJsonObjectFile('package.json');
    obj['name'] = 'console_app';
    obj['description'] = 'console app using tsg-js';
    obj['dependencies']['tsg-js'] = util.format('file:../tsg-js-%s.tgz', obj['version']);
    expect(Object.keys(obj).length).toBeGreaterThan(6);
    expect(Object.keys(obj).length).toBeLessThan(20);
    let outfile = 'console_app/package.json';
    g.fu.writeTextFileSync(outfile, JSON.stringify(obj, null, 4));
    console.log(util.format('file written: %s', outfile));
});
