# 18048 - '{0}' is possibly 'undefined'

## 🔍 Regex Patterns
```regex
regexFind: /([a-zA-Z_$][a-zA-Z0-9_$]*)\.(length|toUpperCase|trim|\w+)/
regexReplace: $1?.$2
```

## 💡 Suggestion
```text
Add undefined check or use optional chaining to handle the possibility of undefined values. Use nullish coalescing operator (??) or optional chaining (?.) for safe property access.
```

## 📝 Examples

### Example 1: Property access on possibly undefined value
```diff
function processValue(value?: string) {
+  if (value === undefined) {
+    return
+  }
  console.log(value.length)
  const upper = value.toUpperCase()
  return value.trim()
}
```

**Explanation:** Add undefined check before accessing properties

### Example 2: Using optional chaining
```diff
-  const result = data.trim()
+  const result = data?.trim() ?? ''
```

**Explanation:** Use optional chaining and nullish coalescing

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/18048/index.ts --noEmit --pretty --strict
```

### Result
```bash
docs/18048/index.ts:6:15 - error TS18048: 'value' is possibly 'undefined'.

6   console.log(value.length)
                ~~~~~

docs/18048/index.ts:9:17 - error TS18048: 'value' is possibly 'undefined'.

9   const upper = value.toUpperCase()
                  ~~~~~

docs/18048/index.ts:12:10 - error TS18048: 'value' is possibly 'undefined'.

12   return value.trim()
          ~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/18048/index.ts(6,15): error TS18048: 'value' is possibly 'undefined'.
docs/18048/index.ts(9,17): error TS18048: 'value' is possibly 'undefined'.
docs/18048/index.ts(12,10): error TS18048: 'value' is possibly 'undefined'.
```
