# 1038 - A 'declare' modifier cannot be used in an already ambient context.

## 🔍 Regex Patterns
```regex
regexFind: /\s+declare\s+/
regexReplace:  
```

## 💡 Suggestion
```text
Remove declare modifier from ambient context. The declare keyword is redundant inside already ambient contexts like declare module or declare namespace.
```

## 📝 Examples

### Example 1: Declare const in ambient module
```diff
declare module "my-module" {
-  declare const value = 42
+  const value: number
}
```

**Explanation:** Remove declare modifier and add type annotation instead of initializer

### Example 2: Declare interface in ambient namespace
```diff
declare namespace MyNamespace {
-  declare interface Config {
+  interface Config {
     name: string
   }
}
```

**Explanation:** Remove declare modifier from interface in ambient namespace

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1038/index.ts --noEmit --pretty
```

### Result
```bash
docs/1038/index.ts:2:3 - error TS1038: A 'declare' modifier cannot be used in an already ambient context.

2   declare const value = 42
  ~~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1038/index.ts(2,3): error TS1038: A 'declare' modifier cannot be used in an already ambient context.
```
