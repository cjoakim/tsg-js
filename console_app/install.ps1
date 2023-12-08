# PowerShell script to install and list the npm packages for this app.
#
# Chris Joakim, 2023

Remove-Item -Path "node_modules" -Confirm:$false -Recurse -Force | out-null
Remove-Item package-lock.json | out-null

New-Item -ItemType Directory -Force -Path .	mp | out-null

npm unlink tsg-js

npm install

npm install ../tsg-js-1.0.0.tgz

npm list

