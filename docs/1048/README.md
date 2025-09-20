# 1048 - A rest parameter cannot have an initializer.

## 🔍 Regex Patterns
```regex
regexFind: /\.\.\.([a-zA-Z_$][a-zA-Z0-9_$.-]*):\s*(\w+)\[\]\s*=\s*\[.*\]/
regexReplace: ...$1: $2[]
```

## 💡 Suggestion
```text
Remove initializer from rest parameter. Rest parameters cannot have default values or initializers - they collect remaining arguments and are always optional.
```

## 📝 Examples

### Example 1: Rest parameter with array initializer
```diff
- function testRestInitializer(...args: string[] = ['default']) {
-   return args
- }
+ function testRestInitializer(...args: string[]) {
+   return args
- }
```

**Explanation:** Remove initializer from rest parameter

### Example 2: Rest parameter with initializer in arrow function
```diff
- const process = (...items: number[] = [1, 2, 3]) => items
+ const process = (...items: number[]) => items
```

**Explanation:** Remove initializer from rest parameter in arrow function

### Example 3: Rest parameter with empty array initializer
```diff
- function helper(...params: any[] = []) {
-   console.log(params)
- }
+ function helper(...params: any[]) {
+   console.log(params)
- }
```

**Explanation:** Remove empty array initializer from rest parameter

### Example 4: Rest parameter with object initializer
```diff
- function processData(...data: object[] = [{}]) {
-   return data
- }
+ function processData(...data: object[]) {
+   return data
- }
```

**Explanation:** Remove object initializer from rest parameter

### Example 5: Rest parameter with boolean initializer
```diff
- function logger(...values: boolean[] = [true, false]) {
-   return values
- }
+ function logger(...values: boolean[]) {
+   return values
- }
```

**Explanation:** Remove boolean initializer from rest parameter

### Example 6: Rest parameter with special characters
```diff
- function processData(...$special: string[] = ['test']) {
-   return $special
- }
+ function processData(...$special: string[]) {
+   return $special
- }
```

**Explanation:** Remove initializer from rest parameter with special characters

### Example 7: Rest parameter with hyphenated name
```diff
- function handleItems(...test-property: string[] = ['test']) {
-   return test-property
- }
+ function handleItems(...test-property: string[]) {
+   return test-property
- }
```

**Explanation:** Remove initializer from rest parameter with hyphenated name

### Example 8: Rest parameter with dot notation
```diff
- function processData(...test.property: string[] = ['test']) {
-   return test.property
- }
+ function processData(...test.property: string[]) {
+   return test.property
- }
```

**Explanation:** Remove initializer from rest parameter with dot notation

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1048/index.ts --noEmit --pretty
```

### Result
```bash
docs/1048/index.ts:1:33 - error TS1048: A rest parameter cannot have an initializer.

1 function testRestInitializer(...args: string[] = ['default']) {
                                  ~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1048/index.ts(1,33): error TS1048: A rest parameter cannot have an initializer.
```
