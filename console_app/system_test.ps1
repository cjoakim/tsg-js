# PowerShell script to execute the functionality of tsg-js
#
# Chris Joakim, 2023

del jest.config.js
del src/*.*
del dist/*.*

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
