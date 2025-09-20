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

### Example 3: Method rest parameter with trailing comma
```diff
- class Greeter {
-   greet(...names,) {
+ class Greeter {
+   greet(...names) {
    return `Hello ${names.join(', ')}`
  }
}
```

**Explanation:** Method rest parameters cannot have trailing commas

### Example 4: Array destructuring with rest parameter and trailing comma
```diff
- const [first, ...rest,] = [1, 2, 3, 4, 5]
+ const [first, ...rest] = [1, 2, 3, 4, 5]
```

**Explanation:** Array destructuring rest patterns cannot have trailing commas

### Example 5: Object destructuring with rest and trailing comma
```diff
- const { name: userName, ...others, } = { name: 'John', age: 30, city: 'NYC' }
+ const { name: userName, ...others } = { name: 'John', age: 30, city: 'NYC' }
```

**Explanation:** Object destructuring rest patterns cannot have trailing commas

### Example 6: Function parameter destructuring with rest and trailing comma
```diff
- function processUser({ name, ...rest, }: { name: string, age: number, city: string }) {
+ function processUser({ name, ...rest }: { name: string, age: number, city: string }) {
  return { name, rest }
}
```

**Explanation:** Function parameter destructuring rest patterns cannot have trailing commas

### Example 7: Array parameter destructuring with rest and trailing comma
```diff
- function getFirstAndRest([first, ...rest,]: number[]) {
+ function getFirstAndRest([first, ...rest]: number[]) {
  return { first, rest }
}
```

**Explanation:** Array parameter destructuring rest patterns cannot have trailing commas

### Example 8: Nested destructuring with multiple trailing commas
```diff
- function processNested({ user: { name, ...userRest, }, ...configRest, }: any) {
+ function processNested({ user: { name, ...userRest }, ...configRest }: any) {
  return { name, userRest, configRest }
}
```

**Explanation:** Nested destructuring rest patterns cannot have trailing commas

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

docs/1013/index.ts:13:17 - error TS1013: A rest parameter or binding pattern may not have a trailing comma.

13   greet(...names,) {
                   ~

docs/1013/index.ts:19:22 - error TS1013: A rest parameter or binding pattern may not have a trailing comma.

19 const [first, ...rest,] = [1, 2, 3, 4, 5]
                        ~

docs/1013/index.ts:22:34 - error TS1013: A rest parameter or binding pattern may not have a trailing comma.

22 const { name: userName, ...others, } = { name: 'John', age: 30, city: 'NYC' }
                                    ~

docs/1013/index.ts:25:37 - error TS1013: A rest parameter or binding pattern may not have a trailing comma.

25 function processUser({ name, ...rest, }: { name: string, age: number, city: string }) {
                                       ~

docs/1013/index.ts:30:41 - error TS1013: A rest parameter or binding pattern may not have a trailing comma.

30 function getFirstAndRest([first, ...rest,]: number[]) {
                                           ~

docs/1013/index.ts:35:51 - error TS1013: A rest parameter or binding pattern may not have a trailing comma.

35 function processNested({ user: { name, ...userRest, }, ...configRest, }: any) {
                                                     ~

docs/1013/index.ts:35:69 - error TS1013: A rest parameter or binding pattern may not have a trailing comma.

35 function processNested({ user: { name, ...userRest, }, ...configRest, }: any) {
                                                                       ~
```

**OR** (without `--pretty` flag):

```bash
docs/1013/index.ts(2,24): error TS1013: A rest parameter or binding pattern may not have a trailing comma.
docs/1013/index.ts(7,29): error TS1013: A rest parameter or binding pattern may not have a trailing comma.
docs/1013/index.ts(13,17): error TS1013: A rest parameter or binding pattern may not have a trailing comma.
docs/1013/index.ts(19,22): error TS1013: A rest parameter or binding pattern may not have a trailing comma.
docs/1013/index.ts(22,34): error TS1013: A rest parameter or binding pattern may not have a trailing comma.
docs/1013/index.ts(25,37): error TS1013: A rest parameter or binding pattern may not have a trailing comma.
docs/1013/index.ts(30,41): error TS1013: A rest parameter or binding pattern may not have a trailing comma.
docs/1013/index.ts(35,51): error TS1013: A rest parameter or binding pattern may not have a trailing comma.
docs/1013/index.ts(35,69): error TS1013: A rest parameter or binding pattern may not have a trailing comma.
```
