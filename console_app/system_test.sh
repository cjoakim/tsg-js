#!/bin/bash

# Bash script to execute the functionality of tsg-js
#
# Chris Joakim, 2023

rm jest.config.js
rm src/*.*
rm dist/*.*

echo '---'
npx tsg genclass Class1

echo '---'
npx tsg genclass Class2 -t 

echo '---'
npx tsg genclass Class3

echo '---'
npx tsg gentest Class3  

echo '---'
npx tsg genjest

echo '---'
npx tsg lsrc

tsc

echo '---'
npx tsg ldist
