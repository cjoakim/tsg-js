#!/bin/bash

# Bash script to compile and unit-test this app.
#
# Chris Joakim, 2023

rm tmp/*.*

npm uninstall -g tsg-js

rm  tsg-*.tgz

npm run build

npm run test
