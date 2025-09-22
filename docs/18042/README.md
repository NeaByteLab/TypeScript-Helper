# 18042 - '{0}' is a type and cannot be imported in JavaScript files

## 🔍 Regex Patterns
```regex
regexFind: /import\s*\{\s*([A-Z][a-zA-Z0-9_$]*)\s*\}\s*from\s*['"][^'"]+['"]/
regexReplace: // @ts-ignore
// import { $1 } from './types' // Use JSDoc instead
```

## 💡 Suggestion
```text
Convert TypeScript type imports to JSDoc type annotations in JavaScript files. Use @typedef or inline JSDoc comments instead of import statements for types.
```

## 📝 Examples

### Example 1: Type import in JavaScript file
```diff
-  import { MyType } from './types'
+  /** @typedef {Object} MyType
+   * @property {string} name
+   */

const value = { name: 'test' }
```

**Explanation:** Replace type import with JSDoc typedef

### Example 2: Multiple type imports
```diff
-  import { User, Product } from './types'
+  /** @typedef {Object} User
+   * @typedef {Object} Product
+   */

+  /** @param {User} user */
function processUser(user) { }
```

**Explanation:** Replace multiple type imports with JSDoc typedefs

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/18042/index.js --noEmit --pretty --allowJs --checkJs
```

### Result
```bash
docs/18042/index.js:1:10 - error TS18042: 'MyType' is a type and cannot be imported in JavaScript files. Use 'import("./types").MyType' in a JSDoc type annotation.

1 import { MyType } from './types'
          ~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/18042/index.js(1,10): error TS18042: 'MyType' is a type and cannot be imported in JavaScript files. Use 'import("./types").MyType' in a JSDoc type annotation.
```
