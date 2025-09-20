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

### Example 3: Method rest parameter not last
```diff
- class Greeter {
-   greet(firstName: string, ...names: string[], lastName: string) {
+ class Greeter {
+   greet(firstName: string, lastName: string, ...names: string[]) {
    return `Hello ${firstName} ${names.join(' ')} ${lastName}`
  }
}
```

**Explanation:** Method rest parameters must be the last parameter

### Example 4: Rest parameter not last with optional parameter
```diff
- function processData(data: string, ...items: string[], optional?: boolean) {
+ function processData(data: string, optional?: boolean, ...items: string[]) {
  return { data, items, optional }
}
```

**Explanation:** Move rest parameter after all other parameters including optional ones

### Example 5: Rest parameter not last with default parameter
```diff
- function calculateSum(...numbers: number[], multiplier: number = 1) {
+ function calculateSum(multiplier: number = 1, ...numbers: number[]) {
  return numbers.reduce((sum, num) => sum + num, 0) * multiplier
}
```

**Explanation:** Rest parameters must come after all other parameters including those with default values

### Example 6: Interface method rest parameter not last
```diff
- interface Processor {
-   process(input: string, ...args: string[], output: string): string
- }
+ interface Processor {
+   process(input: string, output: string, ...args: string[]): string
+ }
```

**Explanation:** Interface method rest parameters must be the last parameter

### Example 7: Type definition rest parameter not last
```diff
- type Handler = (event: string, ...data: any[], callback: Function) => void
+ type Handler = (event: string, callback: Function, ...data: any[]) => void
```

**Explanation:** Type definition rest parameters must be the last parameter

### Example 8: Generic function rest parameter not last
```diff
- function genericFunction<T>(first: T, ...rest: T[], last: T): T[] {
+ function genericFunction<T>(first: T, last: T, ...rest: T[]): T[] {
  return [first, ...rest, last]
}
```

**Explanation:** Generic function rest parameters must be the last parameter

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1014/index.ts --noEmit
```

### Result
```bash
docs/1014/index.ts:2:35 - error TS1014: A rest parameter must be last in a parameter list.

2 function greet(firstName: string, ...names: string[], lastName: string) {
                                    ~~~

docs/1014/index.ts:7:40 - error TS1014: A rest parameter must be last in a parameter list.

7 const greetArrow = (firstName: string, ...names: string[], lastName: string) => {
                                         ~~~

docs/1014/index.ts:13:28 - error TS1014: A rest parameter must be last in a parameter list.

13   greet(firstName: string, ...names: string[], lastName: string) {
                              ~~~

docs/1014/index.ts:19:36 - error TS1014: A rest parameter must be last in a parameter list.

19 function processData(data: string, ...items: string[], optional?: boolean) {
                                      ~~~

docs/1014/index.ts:24:23 - error TS1014: A rest parameter must be last in a parameter list.

24 function calculateSum(...numbers: number[], multiplier: number = 1) {
                         ~~~

docs/1014/index.ts:30:26 - error TS1014: A rest parameter must be last in a parameter list.

30   process(input: string, ...args: string[], output: string): string
                            ~~~

docs/1014/index.ts:34:32 - error TS1014: A rest parameter must be last in a parameter list.

34 type Handler = (event: string, ...data: any[], callback: Function) => void
                                  ~~~

docs/1014/index.ts:37:39 - error TS1014: A rest parameter must be last in a parameter list.

37 function genericFunction<T>(first: T, ...rest: T[], last: T): T[] {
                                         ~~~
```

**OR** (depending on TypeScript configuration):

```bash
docs/1014/index.ts(2,35): error TS1014: A rest parameter must be last in a parameter list.
docs/1014/index.ts(7,40): error TS1014: A rest parameter must be last in a parameter list.
docs/1014/index.ts(13,28): error TS1014: A rest parameter must be last in a parameter list.
docs/1014/index.ts(19,36): error TS1014: A rest parameter must be last in a parameter list.
docs/1014/index.ts(24,23): error TS1014: A rest parameter must be last in a parameter list.
docs/1014/index.ts(30,26): error TS1014: A rest parameter must be last in a parameter list.
docs/1014/index.ts(34,32): error TS1014: A rest parameter must be last in a parameter list.
docs/1014/index.ts(37,39): error TS1014: A rest parameter must be last in a parameter list.
```
