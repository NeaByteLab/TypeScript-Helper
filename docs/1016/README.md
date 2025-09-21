# 1016 - A required parameter cannot follow an optional parameter.

## 🔍 Regex Patterns
```regex
regexFind: /([a-zA-Z_$][a-zA-Z0-9_$]*\?\s*:[^,)]+),\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:[^,)]+)/
regexReplace: $2, $1
```

## 💡 Suggestion
```text
Move optional parameters after required parameters. Required parameters must come before optional ones.
```

## 📝 Examples

### Example 1: Basic optional before required
```diff
- function createUser(firstName: string, lastName?: string, age: number) {
+ function createUser(firstName: string, age: number, lastName?: string) {
  return { firstName, lastName, age }
}
```

**Explanation:** Required parameters must come before optional parameters

### Example 2: Different parameter names
```diff
- function processData(data?: string, required: boolean) {
+ function processData(required: boolean, data?: string) {
  return { data, required }
}
```

**Explanation:** Move optional parameter after required parameter

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1016/index.ts --noEmit --pretty
```

### Result
```bash
docs/1016/index.ts:1:59 - error TS1016: A required parameter cannot follow an optional parameter.

1 function createUser(firstName: string, lastName?: string, age: number) {
                                                          ~~~
```

**OR** (without `--pretty` flag):

```bash
docs/1016/index.ts(1,59): error TS1016: A required parameter cannot follow an optional parameter.
```
