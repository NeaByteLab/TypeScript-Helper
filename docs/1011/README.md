# 1011 - An element access expression should take an argument.

## 🔍 Regex Patterns
```regex
regexFind: /(\w+(?:\([^)]*\))?)\[\]/
regexReplace: $1[index]
```

## 💡 Suggestion
```text
Add an index or property name inside the square brackets for element access
```

## 📝 Examples

### Example 1: Empty array access
```diff
- const value = arr[]
+ const value = arr[0]
```

**Explanation:** Array access requires an index inside the brackets

### Example 2: Empty object property access
```diff
- const prop = obj[]
+ const prop = obj['name']
```

**Explanation:** Object property access requires a property name inside the brackets

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1011/index.ts --noEmit --pretty
```

### Result
```bash
docs/1011/index.ts:3:19 - error TS1011: An element access expression should take an argument.

3 const value = arr[]
                    

docs/1011/index.ts:7:18 - error TS1011: An element access expression should take an argument.

7 const prop = obj[]
                   

docs/1011/index.ts:11:18 - error TS1011: An element access expression should take an argument.

11 const char = str[]
                    

docs/1011/index.ts:17:27 - error TS1011: An element access expression should take an argument.

17 const result = getArray()[]
                             

docs/1011/index.ts:21:20 - error TS1011: An element access expression should take an argument.

21 let item = numbers[]
                      

docs/1011/index.ts:24:36 - error TS1011: An element access expression should take an argument.

24 const sum = (arr[0] + arr[1] + arr[])
                                      

docs/1011/index.ts:28:15 - error TS1011: An element access expression should take an argument.

28   return item[]
                 

docs/1011/index.ts:33:14 - error TS1011: An element access expression should take an argument.

33   return arr[]
```

**OR** (without `--pretty` flag):

```bash
docs/1011/index.ts(3,19): error TS1011: An element access expression should take an argument.
docs/1011/index.ts(7,18): error TS1011: An element access expression should take an argument.
docs/1011/index.ts(11,18): error TS1011: An element access expression should take an argument.
docs/1011/index.ts(17,27): error TS1011: An element access expression should take an argument.
docs/1011/index.ts(21,20): error TS1011: An element access expression should take an argument.
docs/1011/index.ts(24,36): error TS1011: An element access expression should take an argument.
docs/1011/index.ts(28,15): error TS1011: An element access expression should take an argument.
docs/1011/index.ts(33,14): error TS1011: An element access expression should take an argument.
```
