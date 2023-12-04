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
> tsg genclass SomeClass
```

#### Generate a TypeScript class and corresponding unit test.  Assumes the use of Jest.

```
> tsg genclass SomeClass -t
```

#### Generate a TypeScript unit test.  Assumes the use of Jest.

```
> tsg gentest SomeClass -t
```

#### Generate a Jest Config File.

```
> tsg genjest
```

#### List the contents of your source directory, per tsconfig.js location.

```
> tsg lsrc
```

#### List the contents of your transpiled outputed directory, per tsconfig.js location.

```
> tsg ldist
```

### Version History

| Version |    Date    | Changes                                                         |
| ------- | ---------- | --------------------------------------------------------------- |
|  0.0.3  | 2023/12/04 | Alpha                                                       |
|  0.0.2  | 2023/12/01 | Pre-Alpha                                                       |
|  0.0.1  | 2023/12/01 | Pre-Alpha, create library on npmjs.org                          |



