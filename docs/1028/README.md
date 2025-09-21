# 1028 - Accessibility modifier already seen.

## 🔍 Regex Patterns
```regex
regexFind: /(public|private|protected)\s+(public|private|protected)\s+/
regexReplace: $1 
```

## 💡 Suggestion
```text
Remove duplicate accessibility modifier. Each class member can only have one accessibility modifier (public, private, or protected).
```

## 📝 Examples

### Example 1: Duplicate public modifier
```diff
class MyClass {
-  public public method() {
+  public method() {
     return 'test'
   }
}
```

**Explanation:** Remove duplicate public modifier from method declaration

### Example 2: Duplicate private modifier
```diff
class DataClass {
-  private private property = 'data'
+  private property = 'data'
}
```

**Explanation:** Remove duplicate private modifier from property declaration

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1028/index.ts --noEmit --pretty
```

### Result
```bash
docs/1028/index.ts:2:10 - error TS1028: Accessibility modifier already seen.

2   public public method() {
          ~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1028/index.ts(2,10): error TS1028: Accessibility modifier already seen.
```
