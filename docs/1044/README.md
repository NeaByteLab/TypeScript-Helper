# 1044 - '{0}' modifier cannot appear on a module or namespace element.

## 🔍 Regex Patterns
```regex
regexFind: /(public|private|protected|static|async|readonly)\s+(const|let|var|function|class|interface|type)/
regexReplace: $2
```

## 💡 Suggestion
```text
Remove accessibility modifier from module or namespace element. Modules and namespaces cannot have accessibility modifiers like public, private, or protected.
```

## 📝 Examples

### Example 1: Public modifier in module
```diff
module TestModule {
-  public const value = 42
+  const value = 42
}
```

**Explanation:** Remove public modifier from module element

### Example 2: Private modifier in namespace
```diff
namespace MyNamespace {
-  private function helper() {}
+  function helper() {}
}
```

**Explanation:** Remove private modifier from namespace element

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1044/index.ts --noEmit --pretty
```

### Result
```bash
docs/1044/index.ts:2:3 - error TS1044: 'public' modifier cannot appear on a module or namespace element.

2   public const value = 42
    ~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1044/index.ts(2,3): error TS1044: 'public' modifier cannot appear on a module or namespace element.
```
