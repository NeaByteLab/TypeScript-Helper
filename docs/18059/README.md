# 18059 - Named imports are not allowed in a deferred import

## 🔍 Regex Patterns
```regex
regexFind: /import\s+defer\s*\{\s*([^}]+)\s*\}\s*from\s*(['"][^'"]+['"])/
regexReplace: import * as MyModule from $2
```

## 💡 Suggestion
```text
Use namespace import (* as) instead of named imports with deferred imports. Deferred imports only support namespace imports, not default or named imports.
```

## 📝 Examples

### Example 1: Named deferred imports
```diff
-  import defer { myFunction, myVariable } from './module'
+  import * as MyModule from './module'
```

**Explanation:** Change named imports to namespace import

### Example 2: Named import with alias
```diff
-  import defer { myFunction as func } from './module'
+  import * as MyModule from './module'
```

**Explanation:** Change named import with alias to namespace import

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/18059/index.ts --noEmit --pretty --module esnext
```

### Result
```bash
docs/18059/index.ts:5:8 - error TS18059: Named imports are not allowed in a deferred import.

5 import defer { myFunction, myVariable } from './module'
          ~~~~

docs/18059/index.ts:8:8 - error TS18059: Named imports are not allowed in a deferred import.

8 import defer { myFunction as func } from './module'
          ~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/18059/index.ts(5,8): error TS18059: Named imports are not allowed in a deferred import.
docs/18059/index.ts(8,8): error TS18059: Named imports are not allowed in a deferred import.
```
