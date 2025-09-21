# 1035 - Only ambient modules can use quoted names.

## 🔍 Regex Patterns
```regex
regexFind: /module\s+"([^"]+)"/
regexReplace: declare module "$1"
```

## 💡 Suggestion
```text
Add declare keyword to make it an ambient module. Only ambient modules (declare module) can use quoted names for module declarations.
```

## 📝 Examples

### Example 1: Basic module declaration
```diff
-  module "my-module" {
+  declare module "my-module" {
     export const value = 42
   }
```

**Explanation:** Add declare keyword to make it an ambient module

### Example 2: Type definitions module
```diff
-  module "@types/node" {
+  declare module "@types/node" {
     export interface Process {
       env: any
     }
   }
```

**Explanation:** Convert to ambient module declaration with declare keyword

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1035/index.ts --noEmit --pretty
```

### Result
```bash
docs/1035/index.ts:1:8 - error TS1035: Only ambient modules can use quoted names.

1 module "my-module" {
       ~~~~~~~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1035/index.ts(1,8): error TS1035: Only ambient modules can use quoted names.
```
