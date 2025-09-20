# 1015 - Parameter cannot have question mark and initializer.

## 🔍 Regex Patterns
```regex
regexFind: /([a-zA-Z_$][a-zA-Z0-9_$]*)\?\s*:\s*([^=()]+?)\s*=\s*([^,)]+)/
regexReplace: $1: $2= $3
```

## 💡 Suggestion
```text
Remove the question mark from optional parameters that have default values, or remove the default value from optional parameters
```

## 📝 Examples

### Example 1: Optional parameter with initializer
```diff
- function greet(name?: string = "Guest") {
+ function greet(name: string = "Guest") {
  console.log(`Hello, ${name}!`)
}
```

**Explanation:** Parameters with default values are automatically optional, so the '?' is redundant

### Example 2: Arrow function parameter with initializer
```diff
- const greetArrow = (name?: string = "Guest") => {
+ const greetArrow = (name: string = "Guest") => {
  console.log(`Hello, ${name}!`)
}
```

**Explanation:** Arrow function parameters with default values don't need the '?'

### Example 3: Method parameter with initializer
```diff
- class Greeter {
-   greet(name?: string = "Guest") {
+ class Greeter {
+   greet(name: string = "Guest") {
    console.log(`Hello, ${name}!`)
  }
}
```

**Explanation:** Method parameters with default values don't need the '?'

### Example 4: Generic function parameter with initializer
```diff
- function genericFunction<T>(value?: T = null): T | null {
+ function genericFunction<T>(value: T = null): T | null {
  return value
}
```

**Explanation:** Generic function parameters with default values don't need the '?'

### Example 5: Callback parameter with initializer
```diff
- function withCallback(callback?: (value: string) => void = (v) => console.log(v)) {
+ function withCallback(callback: (value: string) => void = (v) => console.log(v)) {
  callback("test")
}
```

**Explanation:** Callback parameters with default values don't need the '?'

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1015/index.ts --noEmit
```

### Result
```bash
docs/1015/index.ts:2:16 - error TS1015: Parameter cannot have question mark and initializer.

2 function greet(name?: string = "Guest") {
                 ~~~~

docs/1015/index.ts:7:21 - error TS1015: Parameter cannot have question mark and initializer.

7 const greetArrow = (name?: string = "Guest") => {
                      ~~~~

docs/1015/index.ts:13:9 - error TS1015: Parameter cannot have question mark and initializer.

13   greet(name?: string = "Guest") {
           ~~~~

docs/1015/index.ts:19:29 - error TS1015: Parameter cannot have question mark and initializer.

19 function genericFunction<T>(value?: T = null): T | null {
                               ~~~~~

docs/1015/index.ts:24:23 - error TS1015: Parameter cannot have question mark and initializer.

24 function withCallback(callback?: (value: string) => void = (v) => console.log(v)) {
                         ~~~~~~~~
```

**OR** (depending on TypeScript configuration):

```bash
docs/1015/index.ts(2,16): error TS1015: Parameter cannot have question mark and initializer.
docs/1015/index.ts(7,21): error TS1015: Parameter cannot have question mark and initializer.
docs/1015/index.ts(13,9): error TS1015: Parameter cannot have question mark and initializer.
docs/1015/index.ts(19,29): error TS1015: Parameter cannot have question mark and initializer.
docs/1015/index.ts(24,23): error TS1015: Parameter cannot have question mark and initializer.
```
