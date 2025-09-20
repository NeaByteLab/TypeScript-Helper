# 1021 - An index signature must have a type annotation.

## 🔍 Regex Patterns
```regex
regexFind: /\[([a-zA-Z_$][a-zA-Z0-9_$]*\s*:\s*[^\]]+)\]/
regexReplace: [$1]: any
```

## 💡 Suggestion
```text
Add a type annotation to the index signature. Index signatures must specify the type of their values.
```

## 📝 Examples

### Example 1: Basic index signature missing type annotation
```diff
- interface MyInterface {
-   [key: string]
- }
+ interface MyInterface {
+   [key: string]: any
+ }
```

**Explanation:** Add type annotation to index signature

### Example 2: Different variable name
```diff
- interface DataInterface {
-   [prop: string]
- }
+ interface DataInterface {
+   [prop: string]: any
+ }
```

**Explanation:** Index signatures must have a type annotation for their values

### Example 3: Different interface name
```diff
- interface ConfigInterface {
-   [name: string]
- }
+ interface ConfigInterface {
+   [name: string]: any
+ }
```

**Explanation:** Add missing type annotation to index signature

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1021/index.ts --noEmit --pretty
```

### Result
```bash
docs/1021/index.ts:2:3 - error TS1021: An index signature must have a type annotation.

2   [key: string]
    ~~~~~~~~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1021/index.ts(2,3): error TS1021: An index signature must have a type annotation.
```
