# 1002 - Unterminated string literal.

## 🔍 Regex Patterns
```regex
regexFind: /([\"'])([^\"';]*)(;?)$/
regexReplace: $1$2$1$3
```

## 💡 Suggestion
```text
Add a closing quote to terminate the string literal
```

## 📝 Examples

### Example 1: Missing closing double quote
```diff
- const message = "Hello world;
+ const message = "Hello world";
```

**Explanation:** Missing closing quote at the end of the string

### Example 2: Missing closing single quote
```diff
- const path = 'C:\\Users\\John;
+ const path = 'C:\\Users\\John';
```

**Explanation:** Missing closing single quote in the string

## 🖼️ Visual Output
### Command
```bash
npx tsc ./docs/1002/index.ts --noEmit --pretty
```

### Result
```bash
docs/1002/index.ts:1:30 - error TS1002: Unterminated string literal.

1 const message = "Hello world;


docs/1002/index.ts:2:31 - error TS1002: Unterminated string literal.

2 const path = 'C:\\Users\\John;
```

**OR** (without `--pretty` flag):

```bash
docs/1002/index.ts(1,30): error TS1002: Unterminated string literal.
docs/1002/index.ts(2,31): error TS1002: Unterminated string literal.
``` 
