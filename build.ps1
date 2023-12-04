
# PowerShell script to compile and unit-test this app.
#
# Chris Joakim, 2023

del tmp\*.*

npm uninstall -g tsg-js

del tsg-*.tgz

npm run build

npm run test
