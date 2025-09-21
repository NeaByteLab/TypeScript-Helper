# 1054 - A 'get' accessor cannot have parameters.

## 🔍 Regex Patterns
```regex
regexFind: /get\s+([a-zA-Z_$][a-zA-Z0-9_$.-]*)\s*\([^)]+\)/
regexReplace: get $1()
```

## 💡 Suggestion
```text
Remove parameters from get accessor. Get accessors cannot have parameters - they must be parameterless.
```

## 📝 Examples

### Example 1: Get accessor with single parameter
```diff
class TestClass {
   private _value: string = ''

-  get value(param: string): string {
-    return this._value + param
+  get value(): string {
+    return this._value
   }

   set value(newValue: string) {
     this._value = newValue
   }
}
```

**Explanation:** Remove parameters from get accessor

### Example 2: Get accessor with optional parameter
```diff
class MyClass {
   private _config: any

-  get config(optional?: boolean): any {
+  get config(): any {
     return this._config
   }
}
```

**Explanation:** Remove parameters from get accessor with optional parameter

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1054/index.ts --noEmit --pretty
```

### Result
```bash
docs/1054/index.ts:4:7 - error TS1054: A 'get' accessor cannot have parameters.

4   get value(param: string): string {
        ~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1054/index.ts(4,7): error TS1054: A 'get' accessor cannot have parameters.
```
