# 1013 - A rest parameter or binding pattern may not have a trailing comma.

## 🔍 Regex Patterns
```regex
regexFind: /(\.\.\.[a-zA-Z_$][a-zA-Z0-9_$]*),/
regexReplace: $1
```

## 💡 Suggestion
```text
Remove trailing comma after rest parameter or binding pattern
```

## 📝 Examples

### Example 1: Rest parameter with trailing comma
```diff
- function greet(...names,) {
+ function greet(...names) {
  return `Hello ${names.join(', ')}`
}
```

**Explanation:** Rest parameters cannot have trailing commas

### Example 2: Arrow function rest parameter with trailing comma
```diff
- const greetArrow = (...names,) => {
+ const greetArrow = (...names) => {
  return `Hello ${names.join(', ')}`
}
```

**Explanation:** Arrow function rest parameters cannot have trailing commas

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1013/index.ts --noEmit --pretty
```

### Result
```bash
docs/1013/index.ts:2:24 - error TS1013: A rest parameter or binding pattern may not have a trailing comma.

2 function greet(...names,) {
                         ~

docs/1013/index.ts:7:29 - error TS1013: A rest parameter or binding pattern may not have a trailing comma.

7 const greetArrow = (...names,) => {
                              ~
```

**OR** (without `--pretty` flag):

```bash
docs/1013/index.ts(2,24): error TS1013: A rest parameter or binding pattern may not have a trailing comma.
docs/1013/index.ts(7,29): error TS1013: A rest parameter or binding pattern may not have a trailing comma.
```
