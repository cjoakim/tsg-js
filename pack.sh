#!/bin/bash

# Bash script to compile, test, and pack this npm package.
# The packaged tsg-js-n.n.n.tgz file is tested in the examples/
# directory before doing an actual 'npm publish'.
#
# Chris Joakim, 2023

rm *.tgz

npm run build

npm run test

rm dist/*test*

npm pack > npm_pack.txt

cat npm_pack.txt
