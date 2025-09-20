# 1003 - Identifier expected.

## 🔍 Regex Patterns
```regex
regexFind: /\d+\s+((function|enum|class|interface|type))\s*=\s*(.*)/
regexReplace: $1 myFunction = $3
```

## 💡 Suggestion
```text
Add a valid identifier name after the keyword
```

## 📝 Examples

### Example 1: Missing function name
```diff
- function = () => {};
+ function myFunction = () => {};
```

**Explanation:** Missing function name after function keyword

### Example 2: Missing enum name
```diff
- enum = { A, B };
+ enum MyEnum = { A, B };
```

**Explanation:** Missing enum name after enum keyword

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1003/index.ts --noEmit --pretty
```

### Result
```bash
docs/1003/index.ts:1:10 - error TS1003: Identifier expected.

1 function = () => {};

docs/1003/index.ts:2:6 - error TS1003: Identifier expected.

2 enum = { A, B };
```

**OR** (without `--pretty` flag):

```bash
docs/1003/index.ts(1,10): error TS1003: Identifier expected.
docs/1003/index.ts(2,6): error TS1003: Identifier expected.
```
