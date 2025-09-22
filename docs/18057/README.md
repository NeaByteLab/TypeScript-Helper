# 18057 - String literal import and export names are not supported when the '--module' flag is set to 'es2015' or 'es2020'

## 🔍 Regex Patterns
```regex
regexFind: /import\s*\{\s*"([^"]+)"\s*as\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\s*from\s*['"][^'"]+['"]/
regexReplace: import { $1 as $2 } from './module'
```

## 💡 Suggestion
```text
Change the module target to 'esnext' or 'preserve' to support string literal imports, or use regular identifier imports instead of string literals.
```

## 📝 Examples

### Example 1: String literal import name
```diff
-  import { "myFunction" as func } from './module'
+  import { myFunction as func } from './module'
```

**Explanation:** Remove quotes from import name

### Example 2: String literal default import
```diff
-  import { "default" as MyDefault } from './module'
+  import MyDefault from './module'
```

**Explanation:** Use default import instead of string literal

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/18057/index.ts --noEmit --pretty --module es2015
```

### Result
```bash
docs/18057/index.ts:1:10 - error TS18057: String literal import and export names are not supported when the '--module' flag is set to 'es2015' or 'es2020'.

1 import { "myFunction" as func } from './module'
          ~~~~~~~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/18057/index.ts(1,10): error TS18057: String literal import and export names are not supported when the '--module' flag is set to 'es2015' or 'es2020'.
```
