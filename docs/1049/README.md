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
- class TestClass {
-   set value() {
-     this._value = 'test'
-   }
- }
+ class TestClass {
+   set value(newValue: string) {
+     this._value = newValue
+   }
+ }
```

**Explanation:** Add parameter to set accessor

### Example 2: Set accessor with proper type
```diff
- class DataClass {
-   set config() {
-     this._config = {}
-   }
- }
+ class DataClass {
+   set config(newConfig: object) {
+     this._config = newConfig
+   }
+ }
```

**Explanation:** Add parameter to set accessor with proper type

### Example 3: Set accessor with number type
```diff
- class MyClass {
-   private _count: number = 0
-   set count() {
-     this._count = 0
-   }
- }
+ class MyClass {
+   private _count: number = 0
+   set count(newCount: number) {
+     this._count = newCount
-   }
- }
```

**Explanation:** Add parameter to set accessor and use it in assignment

### Example 4: Set accessor with special characters
```diff
- class SpecialClass {
-   set $special() {
-     this._special = 'value'
-   }
- }
+ class SpecialClass {
+   set $special(newValue: string) {
+     this._special = newValue
-   }
- }
```

**Explanation:** Add parameter to set accessor with special characters

### Example 5: Set accessor with hyphenated name
```diff
- class DataClass {
-   set test-property() {
-     this._testProperty = 'value'
-   }
- }
+ class DataClass {
+   set test-property(newValue: string) {
+     this._testProperty = newValue
-   }
- }
```

**Explanation:** Add parameter to set accessor with hyphenated name

### Example 6: Set accessor with dot notation
```diff
- class UtilsClass {
-   set test.property() {
-     this._testProperty = 'value'
-   }
- }
+ class UtilsClass {
+   set test.property(newValue: string) {
+     this._testProperty = newValue
-   }
- }
```

**Explanation:** Add parameter to set accessor with dot notation

### Example 7: Set accessor with mixed characters
```diff
- class MixedClass {
-   set test$123() {
-     this._test = 'value'
-   }
- }
+ class MixedClass {
+   set test$123(newValue: string) {
+     this._test = newValue
-   }
- }
```

**Explanation:** Add parameter to set accessor with mixed characters

### Example 8: Set accessor with long name
```diff
- class LongClass {
-   set veryLongPropertyName() {
-     this._veryLongPropertyName = 'value'
-   }
- }
+ class LongClass {
+   set veryLongPropertyName(newValue: string) {
+     this._veryLongPropertyName = newValue
-   }
- }
```

**Explanation:** Add parameter to set accessor with long name

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
