# 18058 - Default imports are not allowed in a deferred import

## 🔍 Regex Patterns
```regex
regexFind: /import\s+defer\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s+from\s+['"][^'"]+['"]/
regexReplace: import * as $1 from './module'
```

## 💡 Suggestion
```text
Use namespace import (* as) instead of default import with deferred imports. Deferred imports only support namespace imports, not default or named imports.
```

## 📝 Examples

### Example 1: Default deferred import
```diff
- import defer MyDefault from './module'
+ import * as MyModule from './module'
```

**Explanation:** Change default import to namespace import

### Example 2: Default import with alias
```diff
- import defer { default as MyDefault } from './module'
+ import * as MyModule from './module'
```

**Explanation:** Use namespace import instead of default import

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/18058/index.ts --noEmit --pretty --module esnext
```

### Result
```bash
docs/18058/index.ts:1:8 - error TS18058: Default imports are not allowed in a deferred import.

1 import defer MyDefault from './module'
          ~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/18058/index.ts(1,8): error TS18058: Default imports are not allowed in a deferred import.
```
