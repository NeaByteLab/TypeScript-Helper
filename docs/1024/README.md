# 1024 - 'readonly' modifier can only appear on a property declaration or index signature.

## 🔍 Regex Patterns
```regex
regexFind: /readonly\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/
regexReplace: $1(
```

## 💡 Suggestion
```text
Remove 'readonly' modifier from method declaration. The 'readonly' modifier can only be used on properties and index signatures.
```

## 📝 Examples

### Example 1: Readonly modifier on method
```diff
- class MyClass {
-   readonly method() {
-     return 'test'
-   }
- }
+ class MyClass {
+   method() {
+     return 'test'
+   }
+ }
```

**Explanation:** Remove readonly modifier from method declaration

### Example 2: Different method name
```diff
- class DataClass {
-   readonly process() {
-     return 'data'
-   }
- }
+ class DataClass {
+   process() {
+     return 'data'
+   }
+ }
```

**Explanation:** Readonly modifier cannot be used on methods

### Example 3: Different class name
```diff
- class ConfigClass {
-   readonly calculate() {
-     return 42
-   }
- }
+ class ConfigClass {
+   calculate() {
+     return 42
+   }
+ }
```

**Explanation:** Remove readonly modifier from method, use on properties instead

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1024/index.ts --noEmit --pretty
```

### Result
```bash
docs/1024/index.ts:2:3 - error TS1024: 'readonly' modifier can only appear on a property declaration or index signature.

2   readonly method() {
    ~~~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1024/index.ts(2,3): error TS1024: 'readonly' modifier can only appear on a property declaration or index signature.
```
