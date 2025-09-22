# 18060 - Deferred imports are only supported when the '--module' flag is set to 'esnext' or 'preserve'

## 🔍 Regex Patterns
```regex
regexFind: /import\s+defer\s+.*from\s+(['"][^'"]+['"])/
regexReplace: import * as MyModule from $1
```

## 💡 Suggestion
```text
Change the module target to 'esnext' or 'preserve' in tsconfig.json to support deferred imports, or use regular imports instead of deferred imports.
```

## 📝 Examples

### Example 1: Deferred import with wrong module target
```diff
-  import defer * as MyModule from './module'
+  import * as MyModule from './module'
```

**Explanation:** Change deferred import to regular import

### Example 2: Update tsconfig.json
```diff
// tsconfig.json
{
  "compilerOptions": {
-   "module": "commonjs"
+   "module": "esnext"
  }
}
```

**Explanation:** Update module target to support deferred imports

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/18060/index.ts --noEmit --pretty --module commonjs
```

### Result
```bash
docs/18060/index.ts:1:8 - error TS18060: Deferred imports are only supported when the '--module' flag is set to 'esnext' or 'preserve'.

1 import defer * as MyModule from './module'
          ~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/18060/index.ts(1,8): error TS18060: Deferred imports are only supported when the '--module' flag is set to 'esnext' or 'preserve'.
```
