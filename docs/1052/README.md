# 1052 - A 'set' accessor parameter cannot have an initializer.

## 🔍 Regex Patterns
```regex
regexFind: /set\s+([a-zA-Z_$][a-zA-Z0-9_$.-]*)\s*\(\s*([^=]+)\s*=\s*[^)]+\)/
regexReplace: set $1($2)
```

## 💡 Suggestion
```text
Remove the parameter initializer from set accessor. Set accessors cannot have default values - they must have exactly one parameter without initialization.
```

## 📝 Examples

### Example 1: Parameter with string initializer
```diff
  class TestClass {
    private _value: string = ''

-   set value(value: string = 'default') {
+   set value(value: string) {
      this._value = value
    }

    get value(): string {
      return this._value
    }
  }
```

**Explanation:** Remove parameter initializer from set accessor

### Example 2: Parameter with number initializer
```diff
  class DataClass {
    private _count: number = 0

-   set count(count: number = 0) {
+   set count(count: number) {
      this._count = count
    }
  }
```

**Explanation:** Remove parameter initializer from set accessor with number type

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1052/index.ts --noEmit --pretty
```

### Result
```bash
docs/1052/index.ts:4:7 - error TS1052: A 'set' accessor parameter cannot have an initializer.

4   set value(value: string = 'default') {
        ~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1052/index.ts(4,7): error TS1052: A 'set' accessor parameter cannot have an initializer.
```
