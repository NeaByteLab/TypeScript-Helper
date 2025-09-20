# 1039 - Initializers are not allowed in ambient contexts.

## 🔍 Regex Patterns
```regex
regexFind: /\s*=\s*[^;]+/
regexReplace: 
```

## 💡 Suggestion
```text
Remove initializer from ambient context. Ambient contexts (declare module, declare namespace) can only contain type declarations, not initializers or executable code.
```

## 📝 Examples

### Example 1: Number initializer in ambient module
```diff
- declare module "my-module" {
-   const value: number = 42
- }
+ declare module "my-module" {
+   const value: number
+ }
```

**Explanation:** Remove initializer from const declaration in ambient module

### Example 2: String initializer in ambient namespace
```diff
- declare namespace MyNamespace {
-   const config: string = 'default'
- }
+ declare namespace MyNamespace {
+   const config: string
+ }
```

**Explanation:** Remove initializer from const declaration in ambient namespace

### Example 3: Function initializer in ambient module
```diff
- declare module "utils" {
-   export const helper: () => void = () => {}
- }
+ declare module "utils" {
+   export const helper: () => void
+ }
```

**Explanation:** Remove function initializer from const declaration in ambient module

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1039/index.ts --noEmit
```

### Result
```bash
docs/1039/index.ts:2:25 - error TS1039: Initializers are not allowed in ambient contexts.

2   const value: number = 42
                        ~~~
```

**OR** (depending on TypeScript configuration):

```bash
docs/1039/index.ts(2,25): error TS1039: Initializers are not allowed in ambient contexts.
```
