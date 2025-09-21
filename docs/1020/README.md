# 1020 - An index signature parameter cannot have an initializer.

## 🔍 Regex Patterns
```regex
regexFind: /\[([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*\w+\s*=\s*[^\]]+\]/
regexReplace: [$1: string]
```

## 💡 Suggestion
```text
Remove initializer from index signature parameter. Index signature parameters cannot have default values.
```

## 📝 Examples

### Example 1: Basic initializer in index signature
```diff
interface MyInterface {
-  [key: string = 'default']: any
+  [key: string]: any
}
```

**Explanation:** Index signature parameters cannot have default values, remove the initializer

### Example 2: Different variable name and value
```diff
interface DataInterface {
-  [prop: string = 'value']: unknown
+  [prop: string]: unknown
}
```

**Explanation:** Remove default value from index signature parameter

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1020/index.ts --noEmit --pretty
```

### Result
```bash
docs/1020/index.ts:2:4 - error TS1020: An index signature parameter cannot have an initializer.

2   [key: string = 'default']: any
     ~~~~~~~~~~~~~~~~~~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1020/index.ts(2,4): error TS1020: An index signature parameter cannot have an initializer.
```
