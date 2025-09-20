# 1005 - '{0}' expected.

## 🔍 Regex Patterns
```regex
regexFind: /([a-zA-Z_$][a-zA-Z0-9_$]*)\\s+(number|string|boolean|any|object|Array|Function)/
regexReplace: $1: $2
```

## 💡 Suggestion
```text
Add missing punctuation mark. Common fixes: comma between object properties, colon in type annotations, closing parenthesis in functions, or semicolon after statements.
```

## 📝 Examples

### Example 1: Missing comma between object properties
```diff
- const obj = {
-   name: "John"
-   age: 30
- }
+ const obj = {
+   name: "John",
+   age: 30
+ }
```

**Explanation:** Missing comma between object literal properties

### Example 2: Missing colon in type annotation
```diff
- let count number = 5
+ let count: number = 5
```

**Explanation:** Missing colon between variable name and type annotation

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1005/index.ts --noEmit
```

### Result
```bash
docs/1005/index.ts:3:3 - error TS1005: ',' expected.

3   age: 30
    ~~~

docs/1005/index.ts:6:11 - error TS1005: ',' expected.

6 let count number = 5
            ~~~~~~
```

**OR** (depending on TypeScript configuration):

```bash
docs/1005/index.ts(3,3): error TS1005: ',' expected.
docs/1005/index.ts(6,11): error TS1005: ',' expected.
```
