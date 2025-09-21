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

### Example 3: Interface with then method as return type
```diff
  interface PromiseLike {
    then(): void
  }
  
- async function process(): PromiseLike {
+ async function process(): Promise<PromiseLike> {
    return { then: () => {} }
  }
```

**Explanation:** Wrap interface return type in Promise for async function

### Example 4: Class with callable then method as return type
```diff
  class MyClass {
    then(callback: Function) {
      callback()
      return this
    }
  }
  
- async function handle(): MyClass {
+ async function handle(): Promise<MyClass> {
    return new MyClass()
  }
```

**Explanation:** Wrap class return type in Promise for async function

### Example 5: Object with then method as return type
```diff
- async function createObject(): { then: () => void } {
+ async function createObject(): Promise<{ then: () => void }> {
    return { then: () => {} }
  }
```

**Explanation:** Wrap object return type in Promise for async function

### Example 6: Generic class with then method as return type
```diff
  class ApiResponse<T> {
    data: T
    then(): void {}
  }

- async function fetchData(): ApiResponse<string> {
+ async function fetchData(): Promise<ApiResponse<string>> {
    return new ApiResponse<string>()
  }
```

**Explanation:** Wrap generic class return type in Promise for async function

### Example 7: Class with then method and parameters as return type
```diff
  class Handler {
    then(onSuccess: Function, onError?: Function) {
      return this
    }
  }

- async function getHandler(): Handler {
+ async function getHandler(): Promise<Handler> {
    return new Handler()
  }
```

**Explanation:** Wrap class with parameterized then method return type in Promise for async function

### Example 8: Class with then method returning different type as return type
```diff
  class CustomType {
    then(): string {
      return 'result'
    }
  }

- async function process(): CustomType {
+ async function process(): Promise<CustomType> {
    return new CustomType()
  }
```

**Explanation:** Wrap class with then method returning different type in Promise for async function

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
