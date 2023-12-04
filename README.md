# tsg-js

TypeScript code generator.

tsg-js is inspired by similar functionality in the Ruby-on-Rails (RoR) framework.

### Installation

Unstall tsg-js either globally, or local to your project.

```
> npm install tsg-js -g
... or ...
> npm install tsg-js
```

### Use

#### Generate a TypeScript class in your source directory, per tsconfig.js location.

```
> npx tsg genclass SomeClass

file written: src/SomeClass.ts
```

#### Generate a TypeScript class and corresponding unit test.  Assumes the use of Jest.

```
> npx tsg genclass SomeClass -t

file written: src/SomeClass.ts
file written: src/SomeClass.test.ts
```

#### Generate a TypeScript unit test.  Assumes the use of Jest.

```
> npx tsg gentest SomeClass

file written: src/SomeClass.test.ts
```

#### Generate a Jest Config File.

```
> npx tsg genjest

file written: .../jest.config.js
```

#### List the contents of your source directory, per tsconfig.js location.

```
> npx tsg lsrc

command: ls -al src
total 56
drwxr-xr-x@  9 cjoakim  staff  288 Dec  4 11:41 .
drwxr-xr-x@ 15 cjoakim  staff  480 Dec  4 11:40 ..
-rw-r--r--@  1 cjoakim  staff  283 Dec  4 11:36 Class1.ts
-rw-r--r--@  1 cjoakim  staff  280 Dec  4 11:36 Class2.test.ts
-rw-r--r--@  1 cjoakim  staff  283 Dec  4 11:36 Class2.ts
-rw-r--r--@  1 cjoakim  staff  280 Dec  4 11:36 Class3.test.ts
-rw-r--r--@  1 cjoakim  staff  283 Dec  4 11:36 Class3.ts
-rw-r--r--@  1 cjoakim  staff  298 Dec  4 11:42 SomeClass.test.ts
-rw-r--r--@  1 cjoakim  staff  286 Dec  4 11:41 SomeClass.ts
```

#### List the contents of your transpiled outputed directory, per tsconfig.js location.

```
> npx tsg ldist

command: ls -al dist
total 80
drwxr-xr-x@ 12 cjoakim  staff  384 Dec  4 11:36 .
drwxr-xr-x@ 15 cjoakim  staff  480 Dec  4 11:40 ..
-rw-r--r--@  1 cjoakim  staff  104 Dec  4 11:36 Class1.d.ts
-rw-r--r--@  1 cjoakim  staff  295 Dec  4 11:36 Class1.js
-rw-r--r--@  1 cjoakim  staff  104 Dec  4 11:36 Class2.d.ts
-rw-r--r--@  1 cjoakim  staff  295 Dec  4 11:36 Class2.js
-rw-r--r--@  1 cjoakim  staff   66 Dec  4 11:36 Class2.test.d.ts
-rw-r--r--@  1 cjoakim  staff  299 Dec  4 11:36 Class2.test.js
-rw-r--r--@  1 cjoakim  staff  104 Dec  4 11:36 Class3.d.ts
-rw-r--r--@  1 cjoakim  staff  295 Dec  4 11:36 Class3.js
-rw-r--r--@  1 cjoakim  staff   66 Dec  4 11:36 Class3.test.d.ts
-rw-r--r--@  1 cjoakim  staff  299 Dec  4 11:36 Class3.test.js
```

#### Complete example of output

```
> npx tsg
  _____ ____   ____       _
 |_   _/ ___| / ___|     (_)___
   | | \___ \| |  _ _____| / __|
   | |  ___) | |_| |_____| \__ \
   |_| |____/ \____|    _/ |___/
                       |__/
  version: 0.1.0
--------------------------------------------------------------------
npx tsg genclass SomeClass      # generate a class file
npx tsg genclass SomeClass -t   # generate class and test files
npx tsg gentest SomeClass       # generate a test file
npx tsg genjest                 # generate a Jest config file
npx tsg lsrc                    # list the TS source directory
npx tsg ldist                   # list the TS transpiled directory
```

### Version History

| Version |    Date    | Changes                                                         |
| ------- | ---------- | --------------------------------------------------------------- |
|  0.1.0  | 2023/12/04 | Beta 1                                                          |
|  0.0.2  | 2023/12/01 | Pre-Alpha                                                       |
|  0.0.1  | 2023/12/01 | Pre-Alpha, create library on npmjs.org                          |
