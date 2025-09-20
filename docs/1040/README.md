# 1040 - '{0}' modifier cannot be used in an ambient context.

## 🔍 Regex Patterns
```regex
regexFind: /async\s+function\s+([a-zA-Z_$][a-zA-Z0-9_$-]*)/
regexReplace: function $1
```

## 💡 Suggestion
```text
Remove async modifier from ambient context. Ambient contexts (declare module, declare namespace) can only contain type declarations, not executable code with modifiers like async.
```

## 📝 Examples

### Example 1: Async function in declare module
```diff
- declare module "test" {
-   async function helper(): Promise<void>
- }
+ declare module "test" {
+   function helper(): Promise<void>
+ }
```

**Explanation:** Remove async modifier from function declaration in ambient module

### Example 2: Async function in declare namespace
```diff
- declare namespace MyNamespace {
-   async function process(): Promise<string>
- }
+ declare namespace MyNamespace {
+   function process(): Promise<string>
+ }
```

**Explanation:** Remove async modifier from function declaration in ambient namespace

### Example 3: Async function in ambient declaration
```diff
- declare async function globalHelper(): Promise<void>
+ declare function globalHelper(): Promise<void>
```

**Explanation:** Remove async modifier from global ambient function declaration

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1040/index.ts --noEmit --pretty
```

### Result
```bash
docs/1040/index.ts:2:3 - error TS1040: 'async' modifier cannot be used in an ambient context.

2   async function helper(): Promise<void>
    ~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1040/index.ts(2,3): error TS1040: 'async' modifier cannot be used in an ambient context.
```
