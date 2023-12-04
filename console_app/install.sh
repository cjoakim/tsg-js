#!/bin/bash

# Bash script to install and list the npm packages for this app.
#
# Chris Joakim, 2023

rm -rf ./node_modules
rm package-lock.json

mkdir -p ./node_modules

npm unlink tsg-js

npm install

npm install ../tsg-js-0.1.1.tgz

npm list
        
