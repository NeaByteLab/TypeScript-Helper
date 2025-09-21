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

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1017/index.ts --noEmit --pretty
```

### Result
```bash
docs/1017/index.ts:2:4 - error TS1017: An index signature cannot have a rest parameter.

2   [...rest: any]: any
    ~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1017/index.ts(2,4): error TS1017: An index signature cannot have a rest parameter.
```
