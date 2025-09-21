# 1014 - A rest parameter must be last in a parameter list.

## 🔍 Regex Patterns
```regex
regexFind: /(\.\.\.[^,]+),\s*([^,)]+)/
regexReplace: $2, $1
```

## 💡 Suggestion
```text
Move the rest parameter (...) to the end of the parameter list
```

## 📝 Examples

### Example 1: Rest parameter not last in function
```diff
- function greet(firstName: string, ...names: string[], lastName: string) {
+ function greet(firstName: string, lastName: string, ...names: string[]) {
  return `Hello ${firstName} ${names.join(' ')} ${lastName}`
}
```

**Explanation:** Rest parameters must be the last parameter in the function signature

### Example 2: Arrow function rest parameter not last
```diff
- const greetArrow = (firstName: string, ...names: string[], lastName: string) => {
+ const greetArrow = (firstName: string, lastName: string, ...names: string[]) => {
  return `Hello ${firstName} ${names.join(' ')} ${lastName}`
}
```

**Explanation:** Arrow function rest parameters must be the last parameter

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1014/index.ts --noEmit --pretty
```

### Result
```bash
docs/1014/index.ts:2:35 - error TS1014: A rest parameter must be last in a parameter list.

2 function greet(firstName: string, ...names: string[], lastName: string) {
                                    ~~~

docs/1014/index.ts:7:40 - error TS1014: A rest parameter must be last in a parameter list.

7 const greetArrow = (firstName: string, ...names: string[], lastName: string) => {
                                         ~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1014/index.ts(2,35): error TS1014: A rest parameter must be last in a parameter list.
docs/1014/index.ts(7,40): error TS1014: A rest parameter must be last in a parameter list.
```
