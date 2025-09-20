# 1030 - '{0}' modifier already seen.

## 🔍 Regex Patterns
```regex
regexFind: /(readonly|static|async)\s+(readonly|static|async)\s+/
regexReplace: $1 
```

## 💡 Suggestion
```text
Remove duplicate modifier. Each class member can only have one instance of the same modifier (readonly, static, async).
```

## 📝 Examples

### Example 1: Duplicate readonly modifier
```diff
- class MyClass {
-   readonly readonly property = 'test'
- }
+ class MyClass {
+   readonly property = 'test'
+ }
```

**Explanation:** Remove duplicate readonly modifier from property declaration

### Example 2: Duplicate static modifier
```diff
- class DataClass {
-   static static method() {
-     return 'data'
-   }
- }
+ class DataClass {
+   static method() {
+     return 'data'
+   }
+ }
```

**Explanation:** Remove duplicate static modifier from method declaration

### Example 3: Duplicate async modifier
```diff
- class ConfigClass {
-   async async calculate() {
-     return 42
-   }
- }
+ class ConfigClass {
+   async calculate() {
+     return 42
+   }
+ }
```

**Explanation:** Remove duplicate async modifier from method declaration

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1030/index.ts --noEmit
```

### Result
```bash
docs/1030/index.ts:2:12 - error TS1030: 'readonly' modifier already seen.

2   readonly readonly property = 'test'
            ~~~~~~~~
```

**OR** (depending on TypeScript configuration):

```bash
docs/1030/index.ts(2,12): error TS1030: 'readonly' modifier already seen.
```
