# 1029 - '{0}' modifier must precede '{1}' modifier.

## 🔍 Regex Patterns
```regex
regexFind: /(static)\s+(public|private|protected)\s+/
regexReplace: $2 $1 
```

## 💡 Suggestion
```text
Reorder modifiers correctly. Accessibility modifiers (public, private, protected) must come before static modifier.
```

## 📝 Examples

### Example 1: Static before public
```diff
- class MyClass {
-   static public method() {
-     return 'test'
-   }
- }
+ class MyClass {
+   public static method() {
+     return 'test'
+   }
+ }
```

**Explanation:** Move public modifier before static modifier

### Example 2: Static before private
```diff
- class DataClass {
-   static private property = 'data'
- }
+ class DataClass {
+   private static property = 'data'
+ }
```

**Explanation:** Move private modifier before static modifier

### Example 3: Static before protected
```diff
- class ConfigClass {
-   static protected calculate() {
-     return 42
-   }
- }
+ class ConfigClass {
+   protected static calculate() {
+     return 42
+   }
+ }
```

**Explanation:** Move protected modifier before static modifier

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1029/index.ts --noEmit --pretty
```

### Result
```bash
docs/1029/index.ts:2:10 - error TS1029: 'public' modifier must precede 'static' modifier.

2   static public method() {
          ~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1029/index.ts(2,10): error TS1029: 'public' modifier must precede 'static' modifier.
```
