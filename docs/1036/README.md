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
declare module "my-module" {
-  const value = 42
+  const value: number
   console.log(value)
}
```

**Explanation:** Remove console.log statement and add type annotation instead of initializer

### Example 2: Debugger in ambient namespace
```diff
declare namespace MyNamespace {
   interface Config {
     name: string
   }
-  debugger
}
```

**Explanation:** Remove debugger statement from ambient namespace

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1036/index.ts --noEmit --pretty
```

### Result
```bash
docs/1036/index.ts:3:3 - error TS1036: Statements are not allowed in ambient contexts.

3   console.log(value)
  ~~~~~~~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1036/index.ts(3,3): error TS1036: Statements are not allowed in ambient contexts.
```
