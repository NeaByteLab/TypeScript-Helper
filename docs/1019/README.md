# 1019 - An index signature parameter cannot have a question mark.

## 🔍 Regex Patterns
```regex
regexFind: /\[([a-zA-Z_$][a-zA-Z0-9_$]*)\?\s*:\s*\w+\]/
regexReplace: [$1: string]
```

## 💡 Suggestion
```text
Remove question mark from index signature parameter. Index signature parameters cannot be optional.
```

## 📝 Examples

### Example 1: Basic optional parameter in index signature
```diff
- interface MyInterface {
-   [key?: string]: any
- }
+ interface MyInterface {
+   [key: string]: any
+ }
```

**Explanation:** Index signature parameters cannot be optional, remove the question mark

### Example 2: Different variable name
```diff
- interface DataInterface {
-   [prop?: string]: unknown
- }
+ interface DataInterface {
+   [prop: string]: unknown
+ }
```

**Explanation:** Remove optional modifier from index signature parameter

### Example 3: Different type
```diff
- interface ConfigInterface {
-   [name?: number]: boolean
- }
+ interface ConfigInterface {
+   [name: string]: boolean
- }
```

**Explanation:** Index signature parameters must be required, not optional

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1019/index.ts --noEmit
```

### Result
```bash
docs/1019/index.ts:2:7 - error TS1019: An index signature parameter cannot have a question mark.

2   [key?: string]: any
       ~
```

**OR** (depending on TypeScript configuration):

```bash
docs/1019/index.ts(2,7): error TS1019: An index signature parameter cannot have a question mark.
```
