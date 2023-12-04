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
```

#### Generate a TypeScript class and corresponding unit test.  Assumes the use of Jest.

```
> npx tsg genclass SomeClass -t
```

#### Generate a TypeScript unit test.  Assumes the use of Jest.

```
> npx tsg gentest SomeClass -t
```

#### Generate a Jest Config File.

```
> npx tsg genjest
```

#### List the contents of your source directory, per tsconfig.js location.

```
> npx tsg lsrc
```

#### List the contents of your transpiled outputed directory, per tsconfig.js location.

```
> npx tsg ldist
```

#### Complete example of output

```
$ npx tsg
  _____ ____   ____       _
 |_   _/ ___| / ___|     (_)___
   | | \___ \| |  _ _____| / __|
   | |  ___) | |_| |_____| \__ \
   |_| |____/ \____|    _/ |___/
                       |__/
  version: 0.0.3
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
|  0.0.3  | 2023/12/04 | Alpha                                                       |
|  0.0.2  | 2023/12/01 | Pre-Alpha                                                       |
|  0.0.1  | 2023/12/01 | Pre-Alpha, create library on npmjs.org                          |
