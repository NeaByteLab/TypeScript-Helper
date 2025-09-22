# 18054 - 'await using' statements cannot be used inside a class static block

## 🔍 Regex Patterns
```regex
regexFind: /static\s*\{[^}]*await\s+using[^}]*\}/
regexReplace: static { /* await using not allowed in static blocks */ }
```

## 💡 Suggestion
```text
Remove 'await using' from static blocks. Static blocks cannot contain async operations. Move the resource management to a static async method or use regular try-finally blocks.
```

## 📝 Examples

### Example 1: Await using in static block
```diff
class MyClass {
  static {
-   await using resource = new AsyncDisposableResource()
+   // Move to static async method
  }
+ 
+ static async initialize() {
+   await using resource = new AsyncDisposableResource()
+ }
}
```

**Explanation:** Move await using to static async method

### Example 2: Await using with variable
```diff
class MyClass {
  static {
    const resource = new AsyncDisposableResource()
-   await using resource
+   // Use regular try-finally or move to async method
  }
}
```

**Explanation:** Remove await using from static block

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/18054/index.ts --noEmit --pretty
```

### Result
```bash
docs/18054/index.ts:9:5 - error TS18054: 'await using' statements cannot be used inside a class static block.

9     await using resource = new AsyncDisposableResource()
      ~~~~~~~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/18054/index.ts(9,5): error TS18054: 'await using' statements cannot be used inside a class static block.
```
