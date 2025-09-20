# 1031 - '{0}' modifier cannot appear on class elements of this kind.

## 🔍 Regex Patterns
```regex
regexFind: /(export|import)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/
regexReplace: $2(
```

## 💡 Suggestion
```text
Remove invalid modifier from class method. Export and import modifiers cannot be used on class methods - they are only for module-level declarations.
```

## 📝 Examples

### Example 1: Export modifier on method
```diff
- class MyClass {
-   export method() {
-     return 'test'
-   }
- }
+ class MyClass {
+   method() {
+     return 'test'
+   }
+ }
```

**Explanation:** Remove export modifier from class method declaration

### Example 2: Import modifier on method
```diff
- class DataClass {
-   import process() {
-     return 'data'
-   }
- }
+ class DataClass {
+   process() {
+     return 'data'
+   }
+ }
```

**Explanation:** Remove import modifier from class method declaration

### Example 3: Export modifier on different method
```diff
- class ConfigClass {
-   export calculate() {
-     return 42
-   }
- }
+ class ConfigClass {
+   calculate() {
+     return 42
+   }
+ }
```

**Explanation:** Remove export modifier from class method, use on class declaration instead

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1031/index.ts --noEmit --pretty
```

### Result
```bash
docs/1031/index.ts:2:3 - error TS1031: 'export' modifier cannot appear on class elements of this kind.

2   export method() {
  ~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1031/index.ts(2,3): error TS1031: 'export' modifier cannot appear on class elements of this kind.
```
