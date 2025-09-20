# 1034 - 'super' must be followed by an argument list or member access.

## 🔍 Regex Patterns
```regex
regexFind: /\bsuper\b(?!\s*[.(])/
regexReplace: super()
```

## 💡 Suggestion
```text
Add parentheses or member access after super. The super keyword must be followed by either a function call super() or member access super.property.
```

## 📝 Examples

### Example 1: Super in constructor
```diff
- class Child extends Parent {
-   constructor() {
-     super
-   }
- }
+ class Child extends Parent {
+   constructor() {
+     super()
+   }
+ }
```

**Explanation:** Add parentheses to call parent constructor

### Example 2: Super in method
```diff
- class Child extends Parent {
-   method() {
-     super
-     return 'test'
-   }
- }
+ class Child extends Parent {
+   method() {
+     super.method()
+     return 'test'
+   }
+ }
```

**Explanation:** Add member access to call parent method

### Example 3: Super in return statement
```diff
- class Child extends Parent {
-   getValue() {
-     return super
-   }
- }
+ class Child extends Parent {
+   getValue() {
+     return super.getValue()
+   }
+ }
```

**Explanation:** Add method call to access parent method

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1034/index.ts --noEmit --pretty
```

### Result
```bash
docs/1034/index.ts:4:3 - error TS1034: 'super' must be followed by an argument list or member access.

4   }
   ~
```

**OR** (without `--pretty` flag):

```bash
docs/1034/index.ts(4,3): error TS1034: 'super' must be followed by an argument list or member access.
```
