# 1047 - A rest parameter cannot be optional.

## 🔍 Regex Patterns
```regex
regexFind: /\.\.\.([a-zA-Z_$][a-zA-Z0-9_$.-]*)\?/
regexReplace: ...$1
```

## 💡 Suggestion
```text
Remove question mark from rest parameter. Rest parameters cannot be optional - they are always optional by nature since they collect remaining arguments.
```

## 📝 Examples

### Example 1: Optional rest parameter in function
```diff
- function testOptionalRest(...args?: string[]) {
+ function testOptionalRest(...args: string[]) {
    return args
  }
```

**Explanation:** Remove optional marker from rest parameter

### Example 2: Optional rest parameter in arrow function
```diff
- const process = (...items?: number[]) => items
+ const process = (...items: number[]) => items
```

**Explanation:** Remove optional marker from rest parameter in arrow function

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1047/index.ts --noEmit --pretty
```

### Result
```bash
docs/1047/index.ts:1:34 - error TS1047: A rest parameter cannot be optional.

1 function testOptionalRest(...args?: string[]) {
                                 ~
```

**OR** (without `--pretty` flag):

```bash
docs/1047/index.ts(1,34): error TS1047: A rest parameter cannot be optional.
```
