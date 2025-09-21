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
+ function testRestInitializer(...args: string[]) {
    return args
  }
```

**Explanation:** Remove initializer from rest parameter

### Example 2: Rest parameter with initializer in arrow function
```diff
- const process = (...items: number[] = [1, 2, 3]) => items
+ const process = (...items: number[]) => items
```

**Explanation:** Remove initializer from rest parameter in arrow function

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
