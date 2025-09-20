# 1042 - '{0}' modifier cannot be used here.

## 🔍 Regex Patterns
```regex
regexFind: /async\s+([a-zA-Z_$][a-zA-Z0-9_$.-]*)\s*=/
regexReplace: $1 =
```

## 💡 Suggestion
```text
Remove async modifier from property declaration. The async modifier can only be used on function declarations and methods, not on class properties or variables.
```

## 📝 Examples

### Example 1: Async class property
```diff
- class TestClass {
-   async property = 'value'
- }
+ class TestClass {
+   property = 'value'
+ }
```

**Explanation:** Remove async modifier from class property declaration

### Example 2: Async variable declaration
```diff
- const async config = { api: 'https://api.com' }
+ const config = { api: 'https://api.com' }
```

**Explanation:** Remove async modifier from variable declaration

### Example 3: Async let declaration
```diff
- let async data = await fetch()
+ let data = await fetch()
```

**Explanation:** Remove async modifier from let declaration

### Example 4: Async const with complex assignment
```diff
- const async result = await processData()
+ const result = await processData()
```

**Explanation:** Remove async modifier from const declaration with async assignment

### Example 5: Async property with special characters
```diff
- class MyClass {
-   async $special = 'value'
-   async test-property = 'value'
-   async test.property = 'value'
- }
+ class MyClass {
+   $special = 'value'
+   test-property = 'value'
+   test.property = 'value'
+ }
```

**Explanation:** Remove async modifier from properties with special characters

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1042/index.ts --noEmit --pretty
```

### Result
```bash
docs/1042/index.ts:2:3 - error TS1042: 'async' modifier cannot be used here.

2   async property = 'value'
    ~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1042/index.ts(2,3): error TS1042: 'async' modifier cannot be used here.
```
