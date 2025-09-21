# 1058 - The return type of an async function must either be a valid promise or must not contain a callable 'then' member.

## 🔍 Regex Patterns
```regex
regexFind: /async\s+function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(([^)]*)\)\s*:\s*([A-Z][a-zA-Z0-9_$]*)/
regexReplace: async function $1($2): Promise<$3>
```

## 💡 Suggestion
```text
Change return type to Promise<T> or remove the 'then' method. Async functions must return a valid Promise or a type without callable 'then' method.
```

## 📝 Examples

### Example 1: Class with then method as return type
```diff
  class NotAPromise {
    then() {
      return this
    }
  }
  
- async function testAsync(): NotAPromise {
+ async function testAsync(): Promise<NotAPromise> {
    return new NotAPromise()
  }
```

**Explanation:** Change return type to Promise for async function

### Example 2: Class with then property as return type
```diff
class CustomPromise {
  then: () => void = () => {}
}
  
- async function getData(): CustomPromise {
+ async function getData(): Promise<CustomPromise> {
    return new CustomPromise()
}
```

**Explanation:** Use Promise return type for async function

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1058/index.ts --noEmit --pretty
```

### Result
```bash
docs/1058/index.ts:7:16 - error TS1058: The return type of an async function must either be a valid promise or must not contain a callable 'then' member.

7 async function testAsync(): NotAPromise {
                 ~~~~~~~~~

docs/1058/index.ts:8:3 - error TS1058: The return type of an async function must either be a valid promise or must not contain a callable 'then' member.

8   return new NotAPromise()
    ~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1058/index.ts(7,16): error TS1058: The return type of an async function must either be a valid promise or must not contain a callable 'then' member.
docs/1058/index.ts(8:3): error TS1058: The return type of an async function must either be a valid promise or must not contain a callable 'then' member.
```
