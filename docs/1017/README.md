# 1017 - An index signature cannot have a rest parameter.

## 🔍 Regex Patterns
```regex
regexFind: /\[(\.\.\.\w+)\s*:\s*\w+\]/
regexReplace: [key: string]
```

## 💡 Suggestion
```text
Remove rest parameter from index signature. Index signatures can only have a single parameter.
```

## 📝 Examples

### Example 1: Basic rest parameter in index signature
```diff
- interface MyInterface {
-   [...rest: any]: any
- }
+ interface MyInterface {
+   [key: string]: any
+ }
```

**Explanation:** Index signatures cannot use rest parameters, use standard parameter syntax

### Example 2: Different variable name
```diff
- interface DataInterface {
-   [...args: unknown]: unknown
- }
+ interface DataInterface {
+   [key: string]: unknown
+ }
```

**Explanation:** Replace rest parameter with standard index signature parameter

### Example 3: Different type
```diff
- interface ConfigInterface {
-   [...items: string]: number
- }
+ interface ConfigInterface {
+   [key: string]: number
+ }
```

**Explanation:** Index signatures must use standard parameter syntax, not rest parameters

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1017/index.ts --noEmit
```

### Result
```bash
docs/1017/index.ts:2:4 - error TS1017: An index signature cannot have a rest parameter.

2   [...rest: any]: any
    ~~~
```

**OR** (depending on TypeScript configuration):

```bash
docs/1017/index.ts(2,4): error TS1017: An index signature cannot have a rest parameter.
```
