# 18046 - '{0}' is of type 'unknown'

## 🔍 Regex Patterns
```regex
regexFind: /([a-zA-Z_$][a-zA-Z0-9_$]*)\.(length|someMethod|\w+)/
regexReplace: ($1 as any).$2
```

## 💡 Suggestion
```text
Add type assertion or type guard to narrow the 'unknown' type. Use 'as' assertion, type guards, or proper type checking before accessing properties or methods.
```

## 📝 Examples

### Example 1: Property access on unknown type
```diff
function processValue(value: unknown) {
-  console.log(value.length)
-  value.someMethod()
-  const result = value + 5
+  if (typeof value === 'string') {
+    console.log(value.length)
+  }
+  if (typeof value === 'object' && value !== null && 'someMethod' in value) {
+    (value as any).someMethod()
+  }
+  const result = (value as number) + 5
}
```

**Explanation:** Add type guards and assertions for unknown type

### Example 2: Direct property access
```diff
const data: unknown = getData()
-  const length = data.length
+  const length = (data as string).length
```

**Explanation:** Use type assertion for unknown type

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/18046/index.ts --noEmit --pretty --strict
```

### Result
```bash
docs/18046/index.ts:2:15 - error TS18046: 'value' is of type 'unknown'.

2   console.log(value.length)
                ~~~~~

docs/18046/index.ts:3:3 - error TS18046: 'value' is of type 'unknown'.

3   value.someMethod()
  ~~~~~

docs/18046/index.ts:4:18 - error TS18046: 'value' is of type 'unknown'.

4   const result = value + 5
                  ~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/18046/index.ts(2,15): error TS18046: 'value' is of type 'unknown'.
docs/18046/index.ts(3,3): error TS18046: 'value' is of type 'unknown'.
docs/18046/index.ts(4,18): error TS18046: 'value' is of type 'unknown'.
```
