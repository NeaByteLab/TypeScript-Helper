# 1006 - A file cannot have a reference to itself.

## 🔍 Regex Patterns
```regex
regexFind: /(.*)/
regexReplace: $1
```

## 💡 Suggestion
```text
Remove self-reference. Files cannot reference themselves.
```

## 📝 Examples

### Example 1: Remove self-reference entirely
```diff
- /// <reference path="./index.ts" />
+ // Remove self-reference
```

**Explanation:** Remove triple-slash directive that references the same file

### Example 2: Change reference to different file
```diff
- /// <reference path="./index.ts" />
+ /// <reference path="./other-file.ts" />
```

**Explanation:** Change reference to point to a different file

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1006/index.ts --noEmit
```

```bash
docs/1006/index.ts:1:22 - error TS1006: A file cannot have a reference to itself.

1 /// <reference path="./index.ts" />
                       ~~~~~~~~~~
```

**OR** (depending on TypeScript configuration):

### Result
```bash
docs/1006/index.ts(1,22): error TS1006: A file cannot have a reference to itself.
```
