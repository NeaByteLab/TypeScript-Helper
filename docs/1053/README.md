# 1053 - A 'set' accessor cannot have rest parameter.

## 🔍 Regex Patterns
```regex
regexFind: /set\s+([a-zA-Z_$][a-zA-Z0-9_$.-]*)\s*\(\s*\.\.\.([^)]+)\)/
regexReplace: set $1($2)
```

## 💡 Suggestion
```text
Replace rest parameter with a single parameter. Set accessors cannot have rest parameters - they must have exactly one parameter.
```

## 📝 Examples

### Example 1: Rest parameter in set accessor
```diff
  class TestClass {
    private _value: string = ''
    
-   set value(...args: string[]) {
+   set value(args: string[]) {
      this._value = args.join('')
    }

    get value(): string {
      return this._value
    }
  }
```

**Explanation:** Replace rest parameter with single parameter in set accessor

### Example 2: Rest parameter with multiple types
```diff
  class DataClass {
    private _data: any

-   set data(...items: any[]) {
+   set data(items: any[]) {
      this._data = items
    }
  }
```

**Explanation:** Replace rest parameter with single parameter in set accessor

### Example 3: Rest parameter with number array
```diff
  class NumberClass {
-   set numbers(...nums: number[]) {
+   set numbers(nums: number[]) {
      this._numbers = nums
    }
  }
```

**Explanation:** Replace rest parameter with single parameter in set accessor

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1053/index.ts --noEmit --pretty
```

### Result
```bash
docs/1053/index.ts:4:13 - error TS1053: A 'set' accessor cannot have rest parameter.

4   set value(...args: string[]) {
              ~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1053/index.ts(4,13): error TS1053: A 'set' accessor cannot have rest parameter.
```
