# 18045 - Properties with the 'accessor' modifier are only available when targeting ECMAScript 2015 and higher

## 🔍 Regex Patterns
```regex
regexFind: /accessor\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/
regexReplace: $1:
```

## 💡 Suggestion
```text
Remove the 'accessor' modifier or update your TypeScript target to ES2015 or higher. Accessor fields are a modern JavaScript feature that requires ES2015+ support.
```

## 📝 Examples

### Example 1: Accessor modifier in class property
```diff
class MyClass {
-  accessor value: string = 'test'
+  value: string = 'test'
}
```

**Explanation:** Remove accessor modifier for ES5 compatibility

### Example 2: Accessor modifier with private property
```diff
class MyClass {
-  accessor private _value: string = 'test'
+  private _value: string = 'test'
}
```

**Explanation:** Remove accessor modifier from private property

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/18045/index.ts --noEmit --pretty
```

### Result
```bash
docs/18045/index.ts:2:12 - error TS18045: Properties with the 'accessor' modifier are only available when targeting ECMAScript 2015 and higher.

2   accessor value: string = 'test'
            ~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/18045/index.ts(2,12): error TS18045: Properties with the 'accessor' modifier are only available when targeting ECMAScript 2015 and higher.
```
