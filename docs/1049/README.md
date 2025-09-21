# 1049 - A 'set' accessor must have exactly one parameter.

## 🔍 Regex Patterns
```regex
regexFind: /set\s+([a-zA-Z_$][a-zA-Z0-9_$.-]*)\s*\(\s*\)/
regexReplace: set $1(value: any)
```

## 💡 Suggestion
```text
Add exactly one parameter to set accessor. Set accessors must have exactly one parameter to receive the value being assigned.
```

## 📝 Examples

### Example 1: Set accessor without parameter
```diff
class TestClass {
-  set value() {
-    this._value = 'test'
+  set value(newValue: string) {
+    this._value = newValue
   }
 }
```

**Explanation:** Add parameter to set accessor

### Example 2: Set accessor with proper type
```diff
class DataClass {
-  set config() {
-    this._config = {}
+  set config(newConfig: object) {
+    this._config = newConfig
   }
}
```

**Explanation:** Add parameter to set accessor with proper type

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1049/index.ts --noEmit --pretty
```

### Result
```bash
docs/1049/index.ts:4:7 - error TS1049: A 'set' accessor must have exactly one parameter.

4   set value() {
        ~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1049/index.ts(4,7): error TS1049: A 'set' accessor must have exactly one parameter.
```
