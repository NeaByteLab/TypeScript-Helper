# 1046 - Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier.

## 🔍 Regex Patterns
```regex
regexFind: /(const|let|var|function|class|interface|type|enum)\s+/
regexReplace: declare $1 
```

## 💡 Suggestion
```text
Add declare or export modifier to top-level declaration. In .d.ts files, all top-level declarations must be prefixed with either 'declare' or 'export'.
```

## 📝 Examples

### Example 1: Missing declare modifier on const
```diff
- const globalValue = 42
+ declare const globalValue: number
```

**Explanation:** Add declare modifier and proper type annotation

### Example 2: Missing declare modifier on function
```diff
- function globalFunction() {}
+ declare function globalFunction(): void
```

**Explanation:** Add declare modifier and return type annotation

### Example 3: Missing export modifier on interface
```diff
- interface MyInterface {}
+ export interface MyInterface {}
```

**Explanation:** Add export modifier to interface declaration

### Example 4: Missing declare modifier on class
```diff
- class MyClass {}
+ declare class MyClass {}
```

**Explanation:** Add declare modifier to class declaration

### Example 5: Missing declare modifier on type
```diff
- type MyType = string
+ declare type MyType = string
```

**Explanation:** Add declare modifier to type declaration

### Example 6: Missing declare modifier on enum
```diff
- enum MyEnum {}
+ declare enum MyEnum {}
```

**Explanation:** Add declare modifier to enum declaration

### Example 7: Missing declare modifier on let
```diff
- let config = {}
+ declare let config: object
```

**Explanation:** Add declare modifier and proper type annotation

### Example 8: Missing declare modifier on var
```diff
- var data = []
+ declare var data: any[]
```

**Explanation:** Add declare modifier and proper type annotation

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1046/index.ts --noEmit --pretty
```

### Result
```bash
docs/1046/declarations.d.ts:1:1 - error TS1046: Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier.

1 const globalValue = 42
  ~~~~~

docs/1046/declarations.d.ts:2:27 - error TS1183: An implementation cannot be declared in ambient contexts.

2 function globalFunction() {}
                            ~
~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1046/declarations.d.ts(1,1): error TS1046: Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier.
docs/1046/declarations.d.ts(2,27): error TS1183: An implementation cannot be declared in ambient contexts.
```
