# 1055 - Type '{0}' is not a valid async function return type in ES5 because it does not refer to a Promise-compatible constructor value.

## 🔍 Regex Patterns
```regex
regexFind: /async\s+function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(([^)]*)\)\s*:\s*([A-Z][a-zA-Z0-9_$]*)/
regexReplace: async function $1($2): Promise<$3>
```

## 💡 Suggestion
```text
Change return type to Promise<T> or use a Promise-compatible type. Async functions must return a Promise or Promise-compatible type in ES5.
```

## 📝 Examples

### Example 1: Custom Promise class as return type
```diff
class CustomPromise {
  constructor(executor: any) {}
}

- async function testAsync(): CustomPromise {
+ async function testAsync(): Promise<CustomPromise> {
    return new CustomPromise(() => {})
}
```

**Explanation:** Change return type to Promise for async function

### Example 2: Custom type as return type
```diff
class MyType {
  value: string
}

- async function getData(): MyType {
+ async function getData(): Promise<MyType> {
    return new MyType()
}
```

**Explanation:** Wrap return type in Promise for async function

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1055/index.ts --noEmit --pretty
```

### Result
```bash
docs/1055/index.ts:5:29 - error TS1055: Type 'typeof CustomPromise' is not a valid async function return type in ES5 because it does not refer to a Promise-compatible constructor value.
  Types of construct signatures are incompatible.
    Type 'new (executor: any) => CustomPromise' is not assignable to type 'new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) => PromiseLike<T>'.
      Property 'then' is missing in type 'CustomPromise' but required in type 'PromiseLike<T>'.

5 async function testAsync(): CustomPromise {
                              ~~~~~~~~~~~~~

  node_modules/typescript/lib/lib.es5.d.ts:1544:5
    1544     then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>;
             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    'then' is declared here.
```

**OR** (without `--pretty` flag):

```bash
docs/1055/index.ts(5,29): error TS1055: Type 'typeof CustomPromise' is not a valid async function return type in ES5 because it does not refer to a Promise-compatible constructor value.
```
