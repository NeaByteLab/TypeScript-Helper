# 1036 - Statements are not allowed in ambient contexts.

## 🔍 Regex Patterns
```regex
regexFind: /\s+(console\.log|console\.error|console\.warn|debugger|return|throw|if|for|while|switch)\s*[^;]*;?/
regexReplace: 
```

## 💡 Suggestion
```text
Remove executable statements from ambient context. Ambient contexts (declare module, declare namespace) can only contain type declarations, not executable code.
```

## 📝 Examples

### Example 1: Console.log in ambient module
```diff
- declare module "my-module" {
-   const value = 42
-   console.log(value)
- }
+ declare module "my-module" {
+   const value: number
+ }
```

**Explanation:** Remove console.log statement and add type annotation instead of initializer

### Example 2: Debugger in ambient namespace
```diff
- declare namespace MyNamespace {
-   interface Config {
-     name: string
-   }
-   debugger
- }
+ declare namespace MyNamespace {
+   interface Config {
+     name: string
+   }
+ }
```

**Explanation:** Remove debugger statement from ambient namespace

### Example 3: If statement in ambient module
```diff
- declare module "utils" {
-   export function helper(): void
-   if (true) { return }
- }
+ declare module "utils" {
+   export function helper(): void
+ }
```

**Explanation:** Remove if statement from ambient module context

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1036/index.ts --noEmit
```

### Result
```bash
docs/1036/index.ts:3:3 - error TS1036: Statements are not allowed in ambient contexts.

3   console.log(value)
  ~~~~~~~~~~~~
```

**OR** (depending on TypeScript configuration):

```bash
docs/1036/index.ts(3,3): error TS1036: Statements are not allowed in ambient contexts.
```
