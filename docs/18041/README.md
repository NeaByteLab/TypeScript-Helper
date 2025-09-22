# 18041 - A 'return' statement cannot be used inside a class static block

## 🔍 Regex Patterns
```regex
regexFind: /static\s*\{[^}]*\breturn\s+[^;]+;?[^}]*\}/
regexReplace: static { /* Remove return statement - static blocks cannot return values */ }
```

## 💡 Suggestion
```text
Remove the return statement from the static block. Static blocks are for initialization only and cannot return values. Use console.log, assignments, or other side effects instead.
```

## 📝 Examples

### Example 1: Return statement in static block
```diff
class MyClass {
  static {
-   return "This will cause TS18041"
+   console.log("Initialization complete")
  }
}
```

**Explanation:** Replace return statement with initialization code

### Example 2: Return statement in conditional block
```diff
class MyClass {
  static {
    if (true) {
-     return 42
+     console.log("Condition met")
    }
  }
}
```

**Explanation:** Remove return from conditional block in static block

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/18041/index.ts --noEmit --pretty
```

### Result
```bash
docs/18041/index.ts:3:5 - error TS18041: A 'return' statement cannot be used inside a class static block.

3     return "This will cause TS18041"
      ~~~~~~

docs/18041/index.ts:8:7 - error TS18041: A 'return' statement cannot be used inside a class static block.

8       return 42
        ~~~~~~
```

**OR** (without `--pretty` flag):

```bash
docs/18041/index.ts(3,5): error TS18041: A 'return' statement cannot be used inside a class static block.
docs/18041/index.ts(8,7): error TS18041: A 'return' statement cannot be used inside a class static block.
```
