# 18049 - '{0}' is possibly 'null' or 'undefined'

## 🔍 Regex Patterns
```regex
regexFind: /([a-zA-Z_$][a-zA-Z0-9_$]*)\.(length|toUpperCase|trim|\w+)/
regexReplace: $1?.$2
```

## 💡 Suggestion
```text
Add null/undefined check or use optional chaining to handle the possibility of null or undefined values. Use nullish coalescing operator (??) or optional chaining (?.) for safe property access.
```

## 📝 Examples

### Example 1: Property access on possibly null/undefined value
```diff
function processValue(value: string | null | undefined) {
+  if (value == null) {
+    return
+  }
  console.log(value.length)
  const upper = value.toUpperCase()
  return value.trim()
}
```

**Explanation:** Add null/undefined check before accessing properties

### Example 2: Using optional chaining
```diff
- const result = data.trim()
+ const result = data?.trim() ?? ''
```

**Explanation:** Use optional chaining and nullish coalescing

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/18049/index.ts --noEmit --pretty --strict
```

### Result
```bash
docs/18049/index.ts:2:15 - error TS18049: 'value' is possibly 'null' or 'undefined'.

2   console.log(value.length)
                ~~~~~

docs/18049/index.ts:3:17 - error TS18049: 'value' is possibly 'null' or 'undefined'.

3   const upper = value.toUpperCase()
                  ~~~~~

docs/18049/index.ts:4:10 - error TS18049: 'value' is possibly 'null' or 'undefined'.

4   return value.trim()
         ~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/18049/index.ts(2,15): error TS18049: 'value' is possibly 'null' or 'undefined'.
docs/18049/index.ts(3,17): error TS18049: 'value' is possibly 'null' or 'undefined'.
docs/18049/index.ts(4,10): error TS18049: 'value' is possibly 'null' or 'undefined'.
```
