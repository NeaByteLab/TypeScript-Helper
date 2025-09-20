# 1010 - '*/' expected.

## 🔍 Regex Patterns
```regex
regexFind: /\/\*([^*]|\*(?!\/))*$/
regexReplace: $& */
```

## 💡 Suggestion
```text
Add closing comment delimiter '*/' to terminate the block comment
```

## 📝 Examples

### Example 1: Missing closing comment delimiter
```diff
- /* console.log('This is commented out')
+ /* console.log('This is commented out') */
```

**Explanation:** Block comments must be properly closed with '*/'

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1010/index.ts --noEmit
```

### Result
```bash
docs/1010/index.ts(1,40): error TS1010: '*/' expected.
```
