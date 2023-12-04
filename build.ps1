
# PowerShell script to compile and unit-test this app.
#
# Chris Joakim, 2023

del tmp\*.*

npm run build

npm run test
