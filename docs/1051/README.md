# 1051 - A 'set' accessor cannot have an optional parameter.

## 🔍 Regex Patterns
```regex
regexFind: /set\s+([a-zA-Z_$][a-zA-Z0-9_$.-]*)\s*\(\s*([^)]*)\?([^)]*)\)/
regexReplace: set $1($2$3)
```

## 💡 Suggestion
```text
Remove the optional parameter modifier (?) from set accessor. Set accessors cannot have optional parameters - they must have exactly one required parameter.
```

## 📝 Examples

### Example 1: Optional parameter in set accessor
```diff
  class TestClass {
    private _value: string = ''

-   set value(value?: string) {
+   set value(value: string) {
      this._value = value || 'default'
    }

    get value(): string {
      return this._value
    }
  }
```

**Explanation:** Remove optional parameter modifier from set accessor

### Example 2: Optional parameter with type annotation
```diff
  class DataClass {
    private _config: any

-   set config(item?: any) {
+   set config(item: any) {
      this._config = item
    }
  }
```

**Explanation:** Remove optional parameter modifier from set accessor with type annotation

### Example 3: Optional parameter with complex type
```diff
  class MyClass {
    private _data: { id: number; name: string }

-   set data(item?: { id: number; name: string }) {
+   set data(item: { id: number; name: string }) {
      this._data = item
    }
  }
```

**Explanation:** Remove optional parameter modifier from set accessor with complex type

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1051/index.ts --noEmit --pretty
```

### Result
```bash
docs/1051/index.ts:4:18 - error TS1051: A 'set' accessor cannot have an optional parameter.

4   set value(value?: string) {
                   ~
```

**OR** (without `--pretty` flag):

```bash
docs/1051/index.ts(4,18): error TS1051: A 'set' accessor cannot have an optional parameter.
```
