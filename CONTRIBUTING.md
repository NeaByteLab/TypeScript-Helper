# Contributing Guideline

Thank you for your interest in contributing to TypeScript Helper! This project parses TypeScript compiler error messages and provides automatic code fixes using regex patterns, making it easier for developers to understand and resolve TypeScript errors during development.

## 🎯 Project Overview

TypeScript Helper is a tool that:
- Parses TypeScript compiler error messages
- Provides automatic code fixes using regex patterns
- Generates helpful suggestions and documentation
- Uses a dynamic two-regex system (`regexFind` + `regexReplace`)

## 🚀 Getting Started

### Prerequisites
- Node.js >= 22.0.0
- TypeScript >= 5.9.2
- Git

### Setup
```bash
# Clone the repository
git clone https://github.com/NeaByteLab/TypeScript-Helper.git
cd TypeScript-Helper

# Install dependencies
npm install

# Build the project
npm run build
```

---

## 📋 How to Contribute

### 1. Adding New Error Types

#### Step 1: Study Existing Patterns
- Read `/docs/1002/README.md` for reference implementation
- Check `/dataset/1002.json` for data structure
- Review `/docs/1003/` for the new two-regex approach

#### Step 2: Create Error Code Files
```bash
# Create directory structure
mkdir -p docs/100X
touch docs/100X/index.ts docs/100X/test.ts docs/100X/README.md
```

#### Step 3: Write Triggering Code
Create `docs/100X/index.ts` with code that triggers the specific error:
```typescript
// Example for TS1009 (Trailing comma)
const obj = {
  name: "John",
  age: 30,  // ← This trailing comma triggers TS1009
};
```

#### Step 4: Test TypeScript Error
```bash
npx tsc ./docs/100X/index.ts --noEmit
# Should output the specific error
```

#### Step 5: Update Dataset JSON
Edit `dataset/100X.json`:
```json
{
  "code": 100X,
  "message": "Error message from TypeScript",
  "regexFind": "/pattern-to-detect-problem/",
  "regexReplace": "replacement-pattern",
  "suggestion": "Human-readable suggestion",
  "example": [
    {
      "base": "problematic code",
      "fixed": "corrected code",
      "description": "explanation of the fix"
    },
    {
      "base": "another problematic code",
      "fixed": "another corrected code",
      "description": "explanation of the fix"
    }
  ]
}
```

#### Step 6: Create Test File
Create `docs/100X/test.ts`:
```typescript
import helper from '../../src/core/index'
const result = helper.parse(`docs/100X/index.ts:1:1 - error TS100X: Error message.

1 problematic code;`)
console.log(result)
```

#### Step 7: Create Documentation
Create `docs/100X/README.md` following the established format. Use existing docs as reference:
- `/docs/1002/README.md` - Reference implementation
- `/docs/1003/README.md` - Two-regex approach

#### Step 8: Test Everything
```bash
# Test TypeScript error
npx tsc ./docs/100X/index.ts --noEmit

# Test our helper
npx tsx ./docs/100X/test.ts

# Build and test
npm run build
npx tsx ./docs/100X/test.ts
```

#### Step 9: Update Checklist
Update `CHECKLIST.md` to mark the error as completed (✅).

### 2. Improving Existing Error Types

- Fix regex patterns that don't work correctly
- Add more examples to existing error types
- Improve documentation clarity
- Add edge cases to test coverage

### 3. Core System Improvements

- Enhance the TypeScript Helper core logic
- Improve error handling and validation
- Add new features to the parsing system
- Optimize performance

---

## 🧪 Testing Guidelines

### Required Tests
1. **TypeScript Error Trigger**: `npx tsc ./docs/errorCode/index.ts --noEmit`
2. **Helper Parsing**: `npx tsx ./docs/errorCode/test.ts`
3. **Regex Patterns**: Verify `regexFind` and `regexReplace` work correctly
4. **Edge Cases**: Test with various code patterns

### Test Coverage
- All error types must have working tests
- Edge cases should be covered
- Performance should be maintained
- No regressions in existing functionality

---

## 📝 Code Style Guidelines

### TypeScript Rules
- Use strict mode always
- No `any` types allowed
- Use descriptive variable names
- Add JSDoc comments for public functions
- Follow the existing code formatting

### File Structure
```
docs/
├── errorCode/
│   ├── index.ts         # Code that triggers error
│   ├── test.ts          # Test our helper
│   └── README.md        # Documentation
├── dataset/
└── └── errorCode.json   # Error data with regex patterns
```

### Naming Conventions
- kebab-case for files/directories
- camelCase for variables/functions
- PascalCase for classes/types
- SCREAMING_SNAKE_CASE for constants

---

## 🔍 Regex Pattern Guidelines

### For `regexFind`:
- Purpose: Detect the problematic code pattern
- Format: `/pattern/flags`
- Should match the actual problematic code in error messages
- Use capture groups for parts you want to reference

### For `regexReplace`:
- Purpose: Generate the fixed code
- Format: `$1$2$3` (using capture groups from regexFind)
- Should produce the corrected code
- Test with various examples

---

## 📋 Pull Request Process

### Before Submitting
1. Ensure all tests pass
2. Update documentation if needed
3. Update checklist if adding new error types
4. Test with multiple error formats
5. Verify no regressions

### PR Description
- Describe what error type you're adding/fixing
- Include test results
- Show before/after examples
- Reference any related issues

### Review Process
- All PRs require review
- Tests must pass
- Documentation must be complete
- Code must follow style guidelines

---

## 🐛 Reporting Issues

### Bug Reports
- Use the issue template
- Include steps to reproduce
- Provide expected vs actual behavior
- Include TypeScript version and error messages

### Feature Requests
- Describe the feature clearly
- Explain the use case
- Consider if it fits the project scope

---

## 📚 Resources

### Learning Materials
- [TypeScript Error Reference](https://github.com/Microsoft/TypeScript/tree/main/src/compiler/diagnosticMessages.json)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Regex Testing Tool](https://regex101.com/)

### Project Files to Study
- `/docs/1002/` - Reference implementation
- `/docs/1003/` - New two-regex approach
- `/src/core/index.ts` - Core parsing logic
- `/dataset/` - Error data structure

---

## 🤝 Community Guidelines

- Be respectful and constructive
- Help others learn and improve
- Follow the established patterns
- Ask questions if unsure
- Share knowledge and best practices

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in the project README and release notes.
