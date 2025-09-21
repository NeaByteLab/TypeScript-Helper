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
class MyClass {
-  readonly readonly property = 'test'
+  readonly property = 'test'
}
```

**Explanation:** Remove duplicate readonly modifier from property declaration

### Example 2: Duplicate static modifier
```diff
class DataClass {
-  static static method() {
+  static method() {
     return 'data'
   }
}
```

**Explanation:** Remove duplicate static modifier from method declaration

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1030/index.ts --noEmit --pretty
```

### Result
```bash
docs/1030/index.ts:2:12 - error TS1030: 'readonly' modifier already seen.

2   readonly readonly property = 'test'
            ~~~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1030/index.ts(2,12): error TS1030: 'readonly' modifier already seen.
```
