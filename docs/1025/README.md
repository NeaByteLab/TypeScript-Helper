# 1025 - An index signature cannot have a trailing comma.

## 🔍 Regex Patterns
```regex
regexFind: /\[([a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*[^,]+),\]/
regexReplace: [$1]
```

## 💡 Suggestion
```text
Remove trailing comma from index signature. Index signatures cannot have trailing commas.
```

## 📝 Examples

### Example 1: Basic trailing comma in index signature
```diff
- interface MyInterface {
-   [key: string,]: any
- }
+ interface MyInterface {
+   [key: string]: any
+ }
```

**Explanation:** Remove trailing comma from index signature

### Example 2: Different variable name
```diff
- interface DataInterface {
-   [prop: string,]: unknown
- }
+ interface DataInterface {
+   [prop: string]: unknown
+ }
```

**Explanation:** Index signatures cannot have trailing commas

### Example 3: Different type
```diff
- interface ConfigInterface {
-   [name: string,]: boolean
- }
+ interface ConfigInterface {
+   [name: string]: boolean
+ }
```

**Explanation:** Remove trailing comma from index signature parameter

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1025/index.ts --noEmit --pretty
```

### Result
```bash
docs/1025/index.ts:2:15 - error TS1025: An index signature cannot have a trailing comma.

2   [key: string,]: any
                ~
```

**OR** (without `--pretty` flag):

```bash
docs/1025/index.ts(2,15): error TS1025: An index signature cannot have a trailing comma.
```
