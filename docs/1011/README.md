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

### Example 3: Empty string character access
```diff
- const char = str[]
+ const char = str[0]
```

**Explanation:** String character access requires an index inside the brackets

### Example 4: Function call result access
```diff
- const result = getArray()[]
+ const result = getArray()[0]
```

**Explanation:** Function call result access requires an index inside the brackets

### Example 5: Variable array access
```diff
- let item = numbers[]
+ let item = numbers[0]
```

**Explanation:** Variable array access requires an index inside the brackets

### Example 6: Expression array access
```diff
- const sum = (arr[0] + arr[1] + arr[])
+ const sum = (arr[0] + arr[1] + arr[2])
```

**Explanation:** Expression array access requires an index inside the brackets

### Example 7: Function parameter access
```diff
- function processItem(item: any) {
-   return item[]
- }
+ function processItem(item: any) {
+   return item[0]
+ }
```

**Explanation:** Function parameter access requires an index inside the brackets

### Example 8: Return statement array access
```diff
- function getFirstItem(arr: number[]) {
-   return arr[]
- }
+ function getFirstItem(arr: number[]) {
+   return arr[0]
+ }
```

**Explanation:** Return statement array access requires an index inside the brackets

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1011/index.ts --noEmit
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

**OR** (depending on TypeScript configuration):

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
