# 📋 Error Documentation Checklist

This checklist tracks the progress of documenting TypeScript errors. Each error gets its own detailed documentation file with regex patterns, suggestions, and examples. The goal is to make sure all errors get validated correctly and can show proper detail.

## 🏗️ Architecture & Requirements

### 🎯 Objectives
1. **Data Collection**: Fetch TypeScript errors from Microsoft's repository
2. **Data Processing**: Add regex patterns, suggestions, and examples
3. **Documentation**: Generate markdown files for each error
4. **Validation**: Check data completeness and accuracy

### 🔄 Development Workflow
```
1. Fetch Error Data → 2. Validate Gaps → 3. Enrich Content → 4. Generate Docs → 5. Test & Verify
```

## 📊 Progress Legend
- ✅ **Completed** - Full documentation with regex, suggestions, and examples
- 🔄 **In Progress** - Currently being worked on
- ⏳ **Pending** - Not started yet
- ❌ **Blocked** - Cannot proceed due to issues

---

| Error Code | Description | Status | Link |
|------------|-------------|--------|------|
| 1002 | Unterminated string literal. | ✅ | [docs/1002/README.md](docs/1002/README.md) |
| 1003 | Identifier expected. | ✅ | [docs/1003/README.md](docs/1003/README.md) |
| 1005 | '{0}' expected. | ✅ | [docs/1005/README.md](docs/1005/README.md) |
| 1006 | A file cannot have a reference to itself. | ✅ | [docs/1006/README.md](docs/1006/README.md) |
| 1007 | The parser expected to find a '{1}' to match the '{0}' token here. | ⏳ | [docs/1007/README.md](docs/1007/README.md) |
| 1009 | Trailing comma not allowed. | ⏳ | [docs/1009/README.md](docs/1009/README.md) |
| 1010 | '*/' expected. | ✅ | [docs/1010/README.md](docs/1010/README.md) |
| 1011 | An element access expression should take an argument. | ✅ | [docs/1011/README.md](docs/1011/README.md) |
| 1012 | Unexpected token. | ⏳ | [docs/1012/README.md](docs/1012/README.md) |
| 1013 | A rest parameter or binding pattern may not have a trailing comma. | ✅ | [docs/1013/README.md](docs/1013/README.md) |
| 1014 | A rest parameter must be last in a parameter list. | ✅ | [docs/1014/README.md](docs/1014/README.md) |
| 1015 | Parameter cannot have question mark and initializer. | ✅ | [docs/1015/README.md](docs/1015/README.md) |
| 1016 | A required parameter cannot follow an optional parameter. | ✅ | [docs/1016/README.md](docs/1016/README.md) |
| 1017 | An index signature cannot have a rest parameter. | ✅ | [docs/1017/README.md](docs/1017/README.md) |
| 1018 | An index signature parameter cannot have an accessibility modifier. | ⏳ | [docs/1018/README.md](docs/1018/README.md) |
| 1019 | An index signature parameter cannot have a question mark. | ✅ | [docs/1019/README.md](docs/1019/README.md) |
| 1020 | An index signature parameter cannot have an initializer. | ✅ | [docs/1020/README.md](docs/1020/README.md) |
| 1021 | An index signature must have a type annotation. | ✅ | [docs/1021/README.md](docs/1021/README.md) |
| 1022 | An index signature parameter must have a type annotation. | ⏳ | [docs/1022/README.md](docs/1022/README.md) |
| 1024 | 'readonly' modifier can only appear on a property declaration or index signature. | ✅ | [docs/1024/README.md](docs/1024/README.md) |
| 1025 | An index signature cannot have a trailing comma. | ✅ | [docs/1025/README.md](docs/1025/README.md) |
| 1028 | Accessibility modifier already seen. | ✅ | [docs/1028/README.md](docs/1028/README.md) |
| 1029 | '{0}' modifier must precede '{1}' modifier. | ✅ | [docs/1029/README.md](docs/1029/README.md) |
| 1030 | '{0}' modifier already seen. | ✅ | [docs/1030/README.md](docs/1030/README.md) |
| 1031 | '{0}' modifier cannot appear on class elements of this kind. | ✅ | [docs/1031/README.md](docs/1031/README.md) |
| 1032 | An index signature parameter must have a type annotation. | ⏳ | [docs/1032/README.md](docs/1032/README.md) |
| 1033 | '{0}' modifier cannot appear on class elements of this kind. | ⏳ | [docs/1033/README.md](docs/1033/README.md) |
| 1034 | 'super' must be followed by an argument list or member access. | ✅ | [docs/1034/README.md](docs/1034/README.md) |
| 1035 | Only ambient modules can use quoted names. | ✅ | [docs/1035/README.md](docs/1035/README.md) |
| 1036 | Statements are not allowed in ambient contexts. | ✅ | [docs/1036/README.md](docs/1036/README.md) |
| 1037 | A 'declare' modifier cannot be used in an already ambient context. | ⏳ | [docs/1037/README.md](docs/1037/README.md) |
| 1038 | A 'declare' modifier cannot be used in an already ambient context. | ✅ | [docs/1038/README.md](docs/1038/README.md) |
| 1039 | Initializers are not allowed in ambient contexts. | ✅ | [docs/1039/README.md](docs/1039/README.md) |
| 1040 | '{0}' modifier cannot be used in an ambient context. | ✅ | [docs/1040/README.md](docs/1040/README.md) |
| 1042 | '{0}' modifier cannot be used here. | ✅ | [docs/1042/README.md](docs/1042/README.md) |
| 1044 | '{0}' modifier cannot appear on a module or namespace element. | ✅ | [docs/1044/README.md](docs/1044/README.md) |
| 1046 | Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier. | ✅ | [docs/1046/README.md](docs/1046/README.md) |
| 1047 | A rest parameter cannot be optional. | ✅ | [docs/1047/README.md](docs/1047/README.md) |
| 1048 | A rest parameter cannot have an initializer. | ✅ | [docs/1048/README.md](docs/1048/README.md) |
| 1049 | A 'set' accessor must have exactly one parameter. | ✅ | [docs/1049/README.md](docs/1049/README.md) |
| 1051 | A 'set' accessor cannot have an optional parameter. | ✅ | [docs/1051/README.md](docs/1051/README.md) |
| 1052 | A 'set' accessor parameter cannot have an initializer. | ✅ | [docs/1052/README.md](docs/1052/README.md) |
| 1053 | A 'set' accessor cannot have rest parameter. | ✅ | [docs/1053/README.md](docs/1053/README.md) |
| 1054 | A 'get' accessor cannot have parameters. | ✅ | [docs/1054/README.md](docs/1054/README.md) |
| 1055 | Type '{0}' is not a valid async function return type in ES5 because it does not refer to a Promise-compatible constructor value. | ✅ | [docs/1055/README.md](docs/1055/README.md) |
| 1056 | Accessors are only available when targeting ECMAScript 5 and higher. | ❌ | Legacy error |
| 1058 | The return type of an async function must either be a valid promise or must not contain a callable 'then' member. | ✅ | [docs/1058/README.md](docs/1058/README.md) |
| 1059 | A promise must have a 'then' method. | ⏳ | [docs/1059/README.md](docs/1059/README.md) |
| 1060 | The first parameter of the 'then' method of a promise must be a callback. | ⏳ | [docs/1060/README.md](docs/1060/README.md) |
| 1061 | Enum member must have initializer. | ⏳ | [docs/1061/README.md](docs/1061/README.md) |
| 1062 | Type is referenced directly or indirectly in the fulfillment callback of its own 'then' method. | ⏳ | [docs/1062/README.md](docs/1062/README.md) |
| 1063 | An export assignment cannot be used in a namespace. | ⏳ | [docs/1063/README.md](docs/1063/README.md) |
| 1064 | The return type of an async function or method must be the global Promise<T> type. Did you mean to write 'Promise<{0}>'? | ⏳ | [docs/1064/README.md](docs/1064/README.md) |
| 1065 | The return type of an async function or method must be the global Promise<T> type. | ⏳ | [docs/1065/README.md](docs/1065/README.md) |
| 1066 | In ambient enum declarations member initializer must be constant expression. | ⏳ | [docs/1066/README.md](docs/1066/README.md) |
| 1068 | Unexpected token. A constructor, method, accessor, or property was expected. | ⏳ | [docs/1068/README.md](docs/1068/README.md) |
| 1069 | Unexpected token. A type parameter name was expected without curly braces. | ⏳ | [docs/1069/README.md](docs/1069/README.md) |
| 1070 | '{0}' modifier cannot appear on a type member. | ⏳ | [docs/1070/README.md](docs/1070/README.md) |
| 1071 | '{0}' modifier cannot appear on an index signature. | ⏳ | [docs/1071/README.md](docs/1071/README.md) |
| 1079 | A '{0}' modifier cannot be used with an import declaration. | ⏳ | [docs/1079/README.md](docs/1079/README.md) |
| 1084 | Invalid 'reference' directive syntax. | ⏳ | [docs/1084/README.md](docs/1084/README.md) |
| 1089 | '{0}' modifier cannot appear on a constructor declaration. | ⏳ | [docs/1089/README.md](docs/1089/README.md) |
| 1090 | '{0}' modifier cannot appear on a parameter. | ⏳ | [docs/1090/README.md](docs/1090/README.md) |
| 1091 | Only a single variable declaration is allowed in a 'for...in' statement. | ⏳ | [docs/1091/README.md](docs/1091/README.md) |
| 1092 | Type parameters cannot appear on a constructor declaration. | ⏳ | [docs/1092/README.md](docs/1092/README.md) |
| 1093 | Type annotation cannot appear on a constructor declaration. | ⏳ | [docs/1093/README.md](docs/1093/README.md) |
| 1094 | An accessor cannot have type parameters. | ⏳ | [docs/1094/README.md](docs/1094/README.md) |
| 1095 | A 'set' accessor cannot have a return type annotation. | ⏳ | [docs/1095/README.md](docs/1095/README.md) |
| 1096 | An index signature must have exactly one parameter. | ⏳ | [docs/1096/README.md](docs/1096/README.md) |
| 1097 | '{0}' list cannot be empty. | ⏳ | [docs/1097/README.md](docs/1097/README.md) |
| 1098 | Type parameter list cannot be empty. | ⏳ | [docs/1098/README.md](docs/1098/README.md) |
| 1099 | Type argument list cannot be empty. | ⏳ | [docs/1099/README.md](docs/1099/README.md) |
| 1100 | Invalid use of '{0}' in strict mode. | ⏳ | [docs/1100/README.md](docs/1100/README.md) |
| 1101 | 'with' statements are not allowed in strict mode. | ⏳ | [docs/1101/README.md](docs/1101/README.md) |
| 1102 | 'delete' cannot be called on an identifier in strict mode. | ⏳ | [docs/1102/README.md](docs/1102/README.md) |
| 1103 | 'for await' loops are only allowed within async functions and at the top levels of modules. | ⏳ | [docs/1103/README.md](docs/1103/README.md) |
| 1104 | A 'continue' statement can only be used within an enclosing iteration statement. | ⏳ | [docs/1104/README.md](docs/1104/README.md) |
| 1105 | A 'break' statement can only be used within an enclosing iteration or switch statement. | ⏳ | [docs/1105/README.md](docs/1105/README.md) |
| 1106 | The left-hand side of a 'for...of' statement may not be 'async'. | ⏳ | [docs/1106/README.md](docs/1106/README.md) |
| 1107 | Jump target cannot cross function boundary. | ⏳ | [docs/1107/README.md](docs/1107/README.md) |
| 1108 | A 'return' statement can only be used within a function body. | ⏳ | [docs/1108/README.md](docs/1108/README.md) |
| 1109 | Expression expected. | ⏳ | [docs/1109/README.md](docs/1109/README.md) |
| 1110 | Type expected. | ⏳ | [docs/1110/README.md](docs/1110/README.md) |
| 1111 | Private field '{0}' must be declared in an enclosing class. | ⏳ | [docs/1111/README.md](docs/1111/README.md) |
| 1113 | A 'default' clause cannot appear more than once in a 'switch' statement. | ⏳ | [docs/1113/README.md](docs/1113/README.md) |
| 1114 | Duplicate label '{0}'. | ⏳ | [docs/1114/README.md](docs/1114/README.md) |
| 1115 | A 'continue' statement can only jump to a label of an enclosing iteration statement. | ⏳ | [docs/1115/README.md](docs/1115/README.md) |
| 1116 | A 'break' statement can only jump to a label of an enclosing statement. | ⏳ | [docs/1116/README.md](docs/1116/README.md) |
| 1117 | An object literal cannot have multiple properties with the same name. | ⏳ | [docs/1117/README.md](docs/1117/README.md) |
| 1118 | An object literal cannot have multiple get/set accessors with the same name. | ⏳ | [docs/1118/README.md](docs/1118/README.md) |
| 1119 | An object literal cannot have property and accessor with the same name. | ⏳ | [docs/1119/README.md](docs/1119/README.md) |
| 1120 | An export assignment cannot have modifiers. | ⏳ | [docs/1120/README.md](docs/1120/README.md) |
| 1121 | Octal literals are not allowed. Use the syntax '{0}'. | ⏳ | [docs/1121/README.md](docs/1121/README.md) |
| 1123 | Variable declaration list cannot be empty. | ⏳ | [docs/1123/README.md](docs/1123/README.md) |
| 1124 | Digit expected. | ⏳ | [docs/1124/README.md](docs/1124/README.md) |
| 1125 | Hexadecimal digit expected. | ⏳ | [docs/1125/README.md](docs/1125/README.md) |
| 1126 | Unexpected end of text. | ⏳ | [docs/1126/README.md](docs/1126/README.md) |
| 1127 | Invalid character. | ⏳ | [docs/1127/README.md](docs/1127/README.md) |
| 1128 | Declaration or statement expected. | ⏳ | [docs/1128/README.md](docs/1128/README.md) |
| 1129 | Statement expected. | ⏳ | [docs/1129/README.md](docs/1129/README.md) |
| 1130 | 'case' or 'default' expected. | ⏳ | [docs/1130/README.md](docs/1130/README.md) |
| 1131 | Property or signature expected. | ⏳ | [docs/1131/README.md](docs/1131/README.md) |
| 1132 | Enum member expected. | ⏳ | [docs/1132/README.md](docs/1132/README.md) |
| 1134 | Variable declaration expected. | ⏳ | [docs/1134/README.md](docs/1134/README.md) |
| 1135 | Argument expression expected. | ⏳ | [docs/1135/README.md](docs/1135/README.md) |
| 1136 | Property assignment expected. | ⏳ | [docs/1136/README.md](docs/1136/README.md) |
| 1137 | Expression or comma expected. | ⏳ | [docs/1137/README.md](docs/1137/README.md) |
| 1138 | Parameter declaration expected. | ⏳ | [docs/1138/README.md](docs/1138/README.md) |
| 1139 | Type parameter declaration expected. | ⏳ | [docs/1139/README.md](docs/1139/README.md) |
| 1140 | Type argument expected. | ⏳ | [docs/1140/README.md](docs/1140/README.md) |
| 1141 | String literal expected. | ⏳ | [docs/1141/README.md](docs/1141/README.md) |
| 1142 | Line break not permitted here. | ⏳ | [docs/1142/README.md](docs/1142/README.md) |
| 1144 | '{' or ';' expected. | ⏳ | [docs/1144/README.md](docs/1144/README.md) |
| 1145 | '{' or JSX element expected. | ⏳ | [docs/1145/README.md](docs/1145/README.md) |
| 1146 | Declaration expected. | ⏳ | [docs/1146/README.md](docs/1146/README.md) |
| 1147 | Import declarations in a namespace cannot reference a module. | ⏳ | [docs/1147/README.md](docs/1147/README.md) |
| 1148 | Cannot use imports, exports, or module augmentations when '--module' is 'none'. | ⏳ | [docs/1148/README.md](docs/1148/README.md) |
| 1149 | File name '{0}' differs from already included file name '{1}' only in casing. | ⏳ | [docs/1149/README.md](docs/1149/README.md) |
| 1155 | '{0}' declarations must be initialized. | ⏳ | [docs/1155/README.md](docs/1155/README.md) |
| 1156 | '{0}' declarations can only be declared inside a block. | ⏳ | [docs/1156/README.md](docs/1156/README.md) |
| 1160 | Unterminated template literal. | ⏳ | [docs/1160/README.md](docs/1160/README.md) |
| 1161 | Unterminated regular expression literal. | ⏳ | [docs/1161/README.md](docs/1161/README.md) |
| 1162 | An object member cannot be declared optional. | ⏳ | [docs/1162/README.md](docs/1162/README.md) |
| 1163 | A 'yield' expression is only allowed in a generator body. | ⏳ | [docs/1163/README.md](docs/1163/README.md) |
| 1164 | Computed property names are not allowed in enums. | ⏳ | [docs/1164/README.md](docs/1164/README.md) |
| 1165 | A computed property name in an ambient context must refer to an expression whose type is a literal type or a 'unique symbol' type. | ⏳ | [docs/1165/README.md](docs/1165/README.md) |
| 1166 | A computed property name in a class property declaration must have a simple literal type or a 'unique symbol' type. | ⏳ | [docs/1166/README.md](docs/1166/README.md) |
| 1168 | A computed property name in a method overload must refer to an expression whose type is a literal type or a 'unique symbol' type. | ⏳ | [docs/1168/README.md](docs/1168/README.md) |
| 1169 | A computed property name in an interface must refer to an expression whose type is a literal type or a 'unique symbol' type. | ⏳ | [docs/1169/README.md](docs/1169/README.md) |
| 1170 | A computed property name in a type literal must refer to an expression whose type is a literal type or a 'unique symbol' type. | ⏳ | [docs/1170/README.md](docs/1170/README.md) |
| 1171 | A comma expression is not allowed in a computed property name. | ⏳ | [docs/1171/README.md](docs/1171/README.md) |
| 1172 | 'extends' clause already seen. | ⏳ | [docs/1172/README.md](docs/1172/README.md) |
| 1173 | 'extends' clause must precede 'implements' clause. | ⏳ | [docs/1173/README.md](docs/1173/README.md) |
| 1174 | Classes can only extend a single class. | ⏳ | [docs/1174/README.md](docs/1174/README.md) |
| 1175 | 'implements' clause already seen. | ⏳ | [docs/1175/README.md](docs/1175/README.md) |
| 1176 | Interface declaration cannot have 'implements' clause. | ⏳ | [docs/1176/README.md](docs/1176/README.md) |
| 1177 | Binary digit expected. | ⏳ | [docs/1177/README.md](docs/1177/README.md) |
| 1178 | Octal digit expected. | ⏳ | [docs/1178/README.md](docs/1178/README.md) |
| 1179 | Unexpected token. '{' expected. | ⏳ | [docs/1179/README.md](docs/1179/README.md) |
| 1180 | Property destructuring pattern expected. | ⏳ | [docs/1180/README.md](docs/1180/README.md) |
| 1181 | Array element destructuring pattern expected. | ⏳ | [docs/1181/README.md](docs/1181/README.md) |
| 1182 | A destructuring declaration must have an initializer. | ⏳ | [docs/1182/README.md](docs/1182/README.md) |
| 1183 | An implementation cannot be declared in ambient contexts. | ⏳ | [docs/1183/README.md](docs/1183/README.md) |
| 1184 | Modifiers cannot appear here. | ⏳ | [docs/1184/README.md](docs/1184/README.md) |
| 1185 | Merge conflict marker encountered. | ⏳ | [docs/1185/README.md](docs/1185/README.md) |
| 1186 | A rest element cannot have an initializer. | ⏳ | [docs/1186/README.md](docs/1186/README.md) |
| 1187 | A parameter property may not be declared using a binding pattern. | ⏳ | [docs/1187/README.md](docs/1187/README.md) |
| 1188 | Only a single variable declaration is allowed in a 'for...of' statement. | ⏳ | [docs/1188/README.md](docs/1188/README.md) |
| 1189 | The variable declaration of a 'for...in' statement cannot have an initializer. | ⏳ | [docs/1189/README.md](docs/1189/README.md) |
| 1190 | The variable declaration of a 'for...of' statement cannot have an initializer. | ⏳ | [docs/1190/README.md](docs/1190/README.md) |
| 1191 | An import declaration cannot have modifiers. | ⏳ | [docs/1191/README.md](docs/1191/README.md) |
| 1192 | Module '{0}' has no default export. | ⏳ | [docs/1192/README.md](docs/1192/README.md) |
| 1193 | An export declaration cannot have modifiers. | ⏳ | [docs/1193/README.md](docs/1193/README.md) |
| 1194 | Export declarations are not permitted in a namespace. | ⏳ | [docs/1194/README.md](docs/1194/README.md) |
| 1195 | 'export *' does not re-export a default. | ⏳ | [docs/1195/README.md](docs/1195/README.md) |
| 1196 | Catch clause variable type annotation must be 'any' or 'unknown' if specified. | ⏳ | [docs/1196/README.md](docs/1196/README.md) |
| 1197 | Catch clause variable cannot have an initializer. | ⏳ | [docs/1197/README.md](docs/1197/README.md) |
| 1198 | An extended Unicode escape value must be between 0x0 and 0x10FFFF inclusive. | ⏳ | [docs/1198/README.md](docs/1198/README.md) |
| 1199 | Unterminated Unicode escape sequence. | ⏳ | [docs/1199/README.md](docs/1199/README.md) |
| 1200 | Line terminator not permitted before arrow. | ⏳ | [docs/1200/README.md](docs/1200/README.md) |
| 1202 | Import assignment cannot be used when targeting ECMAScript modules. Consider using 'import * as ns from "mod"', 'import {a} from "mod"', 'import d from "mod"', or another module format instead. | ⏳ | [docs/1202/README.md](docs/1202/README.md) |
| 1203 | Export assignment cannot be used when targeting ECMAScript modules. Consider using 'export default' or another module format instead. | ⏳ | [docs/1203/README.md](docs/1203/README.md) |
| 1205 | Re-exporting a type when '{0}' is enabled requires using 'export type'. | ⏳ | [docs/1205/README.md](docs/1205/README.md) |
| 1206 | Decorators are not valid here. | ⏳ | [docs/1206/README.md](docs/1206/README.md) |
| 1207 | Decorators cannot be applied to multiple get/set accessors of the same name. | ⏳ | [docs/1207/README.md](docs/1207/README.md) |
| 1209 | Invalid optional chain from new expression. Did you mean to call '{0}()'? | ⏳ | [docs/1209/README.md](docs/1209/README.md) |
| 1210 | Code contained in a class is evaluated in JavaScript's strict mode which does not allow this use of '{0}'. For more information, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode. | ⏳ | [docs/1210/README.md](docs/1210/README.md) |
| 1211 | A class declaration without the 'default' modifier must have a name. | ⏳ | [docs/1211/README.md](docs/1211/README.md) |
| 1212 | Identifier expected. '{0}' is a reserved word in strict mode. | ⏳ | [docs/1212/README.md](docs/1212/README.md) |
| 1213 | Identifier expected. '{0}' is a reserved word in strict mode. Class definitions are automatically in strict mode. | ⏳ | [docs/1213/README.md](docs/1213/README.md) |
| 1214 | Identifier expected. '{0}' is a reserved word in strict mode. Modules are automatically in strict mode. | ⏳ | [docs/1214/README.md](docs/1214/README.md) |
| 1215 | Invalid use of '{0}'. Modules are automatically in strict mode. | ⏳ | [docs/1215/README.md](docs/1215/README.md) |
| 1216 | Identifier expected. '__esModule' is reserved as an exported marker when transforming ECMAScript modules. | ⏳ | [docs/1216/README.md](docs/1216/README.md) |
| 1218 | Export assignment is not supported when '--module' flag is 'system'. | ⏳ | [docs/1218/README.md](docs/1218/README.md) |
| 1221 | Generators are not allowed in an ambient context. | ⏳ | [docs/1221/README.md](docs/1221/README.md) |
| 1222 | An overload signature cannot be declared as a generator. | ⏳ | [docs/1222/README.md](docs/1222/README.md) |
| 1223 | '{0}' tag already specified. | ⏳ | [docs/1223/README.md](docs/1223/README.md) |
| 1224 | Signature '{0}' must be a type predicate. | ⏳ | [docs/1224/README.md](docs/1224/README.md) |
| 1225 | Cannot find parameter '{0}'. | ⏳ | [docs/1225/README.md](docs/1225/README.md) |
| 1226 | Type predicate '{0}' is not assignable to '{1}'. | ⏳ | [docs/1226/README.md](docs/1226/README.md) |
| 1227 | Parameter '{0}' is not in the same position as parameter '{1}'. | ⏳ | [docs/1227/README.md](docs/1227/README.md) |
| 1228 | A type predicate is only allowed in return type position for functions and methods. | ⏳ | [docs/1228/README.md](docs/1228/README.md) |
| 1229 | A type predicate cannot reference a rest parameter. | ⏳ | [docs/1229/README.md](docs/1229/README.md) |
| 1230 | A type predicate cannot reference element '{0}' in a binding pattern. | ⏳ | [docs/1230/README.md](docs/1230/README.md) |
| 1231 | An export assignment must be at the top level of a file or module declaration. | ⏳ | [docs/1231/README.md](docs/1231/README.md) |
| 1232 | An import declaration can only be used at the top level of a namespace or module. | ⏳ | [docs/1232/README.md](docs/1232/README.md) |
| 1233 | An export declaration can only be used at the top level of a namespace or module. | ⏳ | [docs/1233/README.md](docs/1233/README.md) |
| 1234 | An ambient module declaration is only allowed at the top level in a file. | ⏳ | [docs/1234/README.md](docs/1234/README.md) |
| 1235 | A namespace declaration is only allowed at the top level of a namespace or module. | ⏳ | [docs/1235/README.md](docs/1235/README.md) |
| 1236 | The return type of a property decorator function must be either 'void' or 'any'. | ⏳ | [docs/1236/README.md](docs/1236/README.md) |
| 1237 | The return type of a parameter decorator function must be either 'void' or 'any'. | ⏳ | [docs/1237/README.md](docs/1237/README.md) |
| 1238 | Unable to resolve signature of class decorator when called as an expression. | ⏳ | [docs/1238/README.md](docs/1238/README.md) |
| 1239 | Unable to resolve signature of parameter decorator when called as an expression. | ⏳ | [docs/1239/README.md](docs/1239/README.md) |
| 1240 | Unable to resolve signature of property decorator when called as an expression. | ⏳ | [docs/1240/README.md](docs/1240/README.md) |
| 1241 | Unable to resolve signature of method decorator when called as an expression. | ⏳ | [docs/1241/README.md](docs/1241/README.md) |
| 1242 | 'abstract' modifier can only appear on a class, method, or property declaration. | ⏳ | [docs/1242/README.md](docs/1242/README.md) |
| 1243 | '{0}' modifier cannot be used with '{1}' modifier. | ⏳ | [docs/1243/README.md](docs/1243/README.md) |
| 1244 | Abstract methods can only appear within an abstract class. | ⏳ | [docs/1244/README.md](docs/1244/README.md) |
| 1245 | Method '{0}' cannot have an implementation because it is marked abstract. | ⏳ | [docs/1245/README.md](docs/1245/README.md) |
| 1246 | An interface property cannot have an initializer. | ⏳ | [docs/1246/README.md](docs/1246/README.md) |
| 1247 | A type literal property cannot have an initializer. | ⏳ | [docs/1247/README.md](docs/1247/README.md) |
| 1248 | A class member cannot have the '{0}' keyword. | ⏳ | [docs/1248/README.md](docs/1248/README.md) |
| 1249 | A decorator can only decorate a method implementation, not an overload. | ⏳ | [docs/1249/README.md](docs/1249/README.md) |
| 1250 | Function declarations are not allowed inside blocks in strict mode when targeting 'ES5'. | ⏳ | [docs/1250/README.md](docs/1250/README.md) |
| 1251 | Function declarations are not allowed inside blocks in strict mode when targeting 'ES5'. Class definitions are automatically in strict mode. | ⏳ | [docs/1251/README.md](docs/1251/README.md) |
| 1252 | Function declarations are not allowed inside blocks in strict mode when targeting 'ES5'. Modules are automatically in strict mode. | ⏳ | [docs/1252/README.md](docs/1252/README.md) |
| 1253 | Abstract properties can only appear within an abstract class. | ⏳ | [docs/1253/README.md](docs/1253/README.md) |
| 1254 | A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference. | ⏳ | [docs/1254/README.md](docs/1254/README.md) |
| 1255 | A definite assignment assertion '!' is not permitted in this context. | ⏳ | [docs/1255/README.md](docs/1255/README.md) |
| 1257 | A required element cannot follow an optional element. | ⏳ | [docs/1257/README.md](docs/1257/README.md) |
| 1258 | A default export must be at the top level of a file or module declaration. | ⏳ | [docs/1258/README.md](docs/1258/README.md) |
| 1259 | Module '{0}' can only be default-imported using the '{1}' flag | ⏳ | [docs/1259/README.md](docs/1259/README.md) |
| 1260 | Keywords cannot contain escape characters. | ⏳ | [docs/1260/README.md](docs/1260/README.md) |
| 1261 | Already included file name '{0}' differs from file name '{1}' only in casing. | ⏳ | [docs/1261/README.md](docs/1261/README.md) |
| 1262 | Identifier expected. '{0}' is a reserved word at the top-level of a module. | ⏳ | [docs/1262/README.md](docs/1262/README.md) |
| 1263 | Declarations with initializers cannot also have definite assignment assertions. | ⏳ | [docs/1263/README.md](docs/1263/README.md) |
| 1264 | Declarations with definite assignment assertions must also have type annotations. | ⏳ | [docs/1264/README.md](docs/1264/README.md) |
| 1265 | A rest element cannot follow another rest element. | ⏳ | [docs/1265/README.md](docs/1265/README.md) |
| 1266 | An optional element cannot follow a rest element. | ⏳ | [docs/1266/README.md](docs/1266/README.md) |
| 1267 | Property '{0}' cannot have an initializer because it is marked abstract. | ⏳ | [docs/1267/README.md](docs/1267/README.md) |
| 1268 | An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type. | ⏳ | [docs/1268/README.md](docs/1268/README.md) |
| 1269 | Cannot use 'export import' on a type or type-only namespace when '{0}' is enabled. | ⏳ | [docs/1269/README.md](docs/1269/README.md) |
| 1270 | Decorator function return type '{0}' is not assignable to type '{1}'. | ⏳ | [docs/1270/README.md](docs/1270/README.md) |
| 1271 | Decorator function return type is '{0}' but is expected to be 'void' or 'any'. | ⏳ | [docs/1271/README.md](docs/1271/README.md) |
| 1272 | A type referenced in a decorated signature must be imported with 'import type' or a namespace import when 'isolatedModules' and 'emitDecoratorMetadata' are enabled. | ⏳ | [docs/1272/README.md](docs/1272/README.md) |
| 1273 | '{0}' modifier cannot appear on a type parameter | ⏳ | [docs/1273/README.md](docs/1273/README.md) |
| 1274 | '{0}' modifier can only appear on a type parameter of a class, interface or type alias | ⏳ | [docs/1274/README.md](docs/1274/README.md) |
| 1275 | 'accessor' modifier can only appear on a property declaration. | ⏳ | [docs/1275/README.md](docs/1275/README.md) |
| 1276 | An 'accessor' property cannot be declared optional. | ⏳ | [docs/1276/README.md](docs/1276/README.md) |
| 1277 | '{0}' modifier can only appear on a type parameter of a function, method or class | ⏳ | [docs/1277/README.md](docs/1277/README.md) |
| 1278 | The runtime will invoke the decorator with {1} arguments, but the decorator expects {0}. | ⏳ | [docs/1278/README.md](docs/1278/README.md) |
| 1279 | The runtime will invoke the decorator with {1} arguments, but the decorator expects at least {0}. | ⏳ | [docs/1279/README.md](docs/1279/README.md) |
| 1280 | Namespaces are not allowed in global script files when '{0}' is enabled. If this file is not intended to be a global script, set 'moduleDetection' to 'force' or add an empty 'export {}' statement. | ⏳ | [docs/1280/README.md](docs/1280/README.md) |
| 1281 | Cannot access '{0}' from another file without qualification when '{1}' is enabled. Use '{2}' instead. | ⏳ | [docs/1281/README.md](docs/1281/README.md) |
| 1282 | An 'export =' declaration must reference a value when 'verbatimModuleSyntax' is enabled, but '{0}' only refers to a type. | ⏳ | [docs/1282/README.md](docs/1282/README.md) |
| 1283 | An 'export =' declaration must reference a real value when 'verbatimModuleSyntax' is enabled, but '{0}' resolves to a type-only declaration. | ⏳ | [docs/1283/README.md](docs/1283/README.md) |
| 1284 | An 'export default' must reference a value when 'verbatimModuleSyntax' is enabled, but '{0}' only refers to a type. | ⏳ | [docs/1284/README.md](docs/1284/README.md) |
| 1285 | An 'export default' must reference a real value when 'verbatimModuleSyntax' is enabled, but '{0}' resolves to a type-only declaration. | ⏳ | [docs/1285/README.md](docs/1285/README.md) |
| 1286 | ECMAScript imports and exports cannot be written in a CommonJS file under 'verbatimModuleSyntax'. | ⏳ | [docs/1286/README.md](docs/1286/README.md) |
| 1287 | A top-level 'export' modifier cannot be used on value declarations in a CommonJS module when 'verbatimModuleSyntax' is enabled. | ⏳ | [docs/1287/README.md](docs/1287/README.md) |
| 1288 | An import alias cannot resolve to a type or type-only declaration when 'verbatimModuleSyntax' is enabled. | ⏳ | [docs/1288/README.md](docs/1288/README.md) |
| 1289 | '{0}' resolves to a type-only declaration and must be marked type-only in this file before re-exporting when '{1}' is enabled. Consider using 'import type' where '{0}' is imported. | ⏳ | [docs/1289/README.md](docs/1289/README.md) |
| 1290 | '{0}' resolves to a type-only declaration and must be marked type-only in this file before re-exporting when '{1}' is enabled. Consider using 'export type { {0} as default }'. | ⏳ | [docs/1290/README.md](docs/1290/README.md) |
| 1291 | '{0}' resolves to a type and must be marked type-only in this file before re-exporting when '{1}' is enabled. Consider using 'import type' where '{0}' is imported. | ⏳ | [docs/1291/README.md](docs/1291/README.md) |
| 1292 | '{0}' resolves to a type and must be marked type-only in this file before re-exporting when '{1}' is enabled. Consider using 'export type { {0} as default }'. | ⏳ | [docs/1292/README.md](docs/1292/README.md) |
| 1293 | ECMAScript module syntax is not allowed in a CommonJS module when 'module' is set to 'preserve'. | ⏳ | [docs/1293/README.md](docs/1293/README.md) |
| 1294 | This syntax is not allowed when 'erasableSyntaxOnly' is enabled. | ⏳ | [docs/1294/README.md](docs/1294/README.md) |
| 1295 | ECMAScript imports and exports cannot be written in a CommonJS file under 'verbatimModuleSyntax'. Adjust the 'type' field in the nearest 'package.json' to make this file an ECMAScript module, or adjust your 'verbatimModuleSyntax', 'module', and 'moduleResolution' settings in TypeScript. | ⏳ | [docs/1295/README.md](docs/1295/README.md) |
| 1300 | 'with' statements are not allowed in an async function block. | ⏳ | [docs/1300/README.md](docs/1300/README.md) |
| 1308 | 'await' expressions are only allowed within async functions and at the top levels of modules. | ⏳ | [docs/1308/README.md](docs/1308/README.md) |
| 1309 | The current file is a CommonJS module and cannot use 'await' at the top level. | ⏳ | [docs/1309/README.md](docs/1309/README.md) |
| 1312 | Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring pattern. | ⏳ | [docs/1312/README.md](docs/1312/README.md) |
| 1313 | The body of an 'if' statement cannot be the empty statement. | ⏳ | [docs/1313/README.md](docs/1313/README.md) |
| 1314 | Global module exports may only appear in module files. | ⏳ | [docs/1314/README.md](docs/1314/README.md) |
| 1315 | Global module exports may only appear in declaration files. | ⏳ | [docs/1315/README.md](docs/1315/README.md) |
| 1316 | Global module exports may only appear at top level. | ⏳ | [docs/1316/README.md](docs/1316/README.md) |
| 1317 | A parameter property cannot be declared using a rest parameter. | ⏳ | [docs/1317/README.md](docs/1317/README.md) |
| 1318 | An abstract accessor cannot have an implementation. | ⏳ | [docs/1318/README.md](docs/1318/README.md) |
| 1319 | A default export can only be used in an ECMAScript-style module. | ⏳ | [docs/1319/README.md](docs/1319/README.md) |
| 1320 | Type of 'await' operand must either be a valid promise or must not contain a callable 'then' member. | ⏳ | [docs/1320/README.md](docs/1320/README.md) |
| 1321 | Type of 'yield' operand in an async generator must either be a valid promise or must not contain a callable 'then' member. | ⏳ | [docs/1321/README.md](docs/1321/README.md) |
| 1322 | Type of iterated elements of a 'yield*' operand must either be a valid promise or must not contain a callable 'then' member. | ⏳ | [docs/1322/README.md](docs/1322/README.md) |
| 1323 | Dynamic imports are only supported when the '--module' flag is set to 'es2020', 'es2022', 'esnext', 'commonjs', 'amd', 'system', 'umd', 'node16', 'node18', 'node20', or 'nodenext'. | ⏳ | [docs/1323/README.md](docs/1323/README.md) |
| 1324 | Dynamic imports only support a second argument when the '--module' option is set to 'esnext', 'node16', 'node18', 'node20', 'nodenext', or 'preserve'. | ⏳ | [docs/1324/README.md](docs/1324/README.md) |
| 1325 | Argument of dynamic import cannot be spread element. | ⏳ | [docs/1325/README.md](docs/1325/README.md) |
| 1326 | This use of 'import' is invalid. 'import()' calls can be written, but they must have parentheses and cannot have type arguments. | ⏳ | [docs/1326/README.md](docs/1326/README.md) |
| 1327 | String literal with double quotes expected. | ⏳ | [docs/1327/README.md](docs/1327/README.md) |
| 1328 | Property value can only be string literal, numeric literal, 'true', 'false', 'null', object literal or array literal. | ⏳ | [docs/1328/README.md](docs/1328/README.md) |
| 1329 | '{0}' accepts too few arguments to be used as a decorator here. Did you mean to call it first and write '@{0}()'? | ⏳ | [docs/1329/README.md](docs/1329/README.md) |
| 1330 | A property of an interface or type literal whose type is a 'unique symbol' type must be 'readonly'. | ⏳ | [docs/1330/README.md](docs/1330/README.md) |
| 1331 | A property of a class whose type is a 'unique symbol' type must be both 'static' and 'readonly'. | ⏳ | [docs/1331/README.md](docs/1331/README.md) |
| 1332 | A variable whose type is a 'unique symbol' type must be 'const'. | ⏳ | [docs/1332/README.md](docs/1332/README.md) |
| 1333 | 'unique symbol' types may not be used on a variable declaration with a binding name. | ⏳ | [docs/1333/README.md](docs/1333/README.md) |
| 1334 | 'unique symbol' types are only allowed on variables in a variable statement. | ⏳ | [docs/1334/README.md](docs/1334/README.md) |
| 1335 | 'unique symbol' types are not allowed here. | ⏳ | [docs/1335/README.md](docs/1335/README.md) |
| 1337 | An index signature parameter type cannot be a literal type or generic type. Consider using a mapped object type instead. | ⏳ | [docs/1337/README.md](docs/1337/README.md) |
| 1338 | 'infer' declarations are only permitted in the 'extends' clause of a conditional type. | ⏳ | [docs/1338/README.md](docs/1338/README.md) |
| 1339 | Module '{0}' does not refer to a value, but is used as a value here. | ⏳ | [docs/1339/README.md](docs/1339/README.md) |
| 1340 | Module '{0}' does not refer to a type, but is used as a type here. Did you mean 'typeof import('{0}')'? | ⏳ | [docs/1340/README.md](docs/1340/README.md) |
| 1341 | Class constructor may not be an accessor. | ⏳ | [docs/1341/README.md](docs/1341/README.md) |
| 1343 | The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'es2022', 'esnext', 'system', 'node16', 'node18', 'node20', or 'nodenext'. | ⏳ | [docs/1343/README.md](docs/1343/README.md) |
| 1344 | 'A label is not allowed here. | ⏳ | [docs/1344/README.md](docs/1344/README.md) |
| 1345 | An expression of type 'void' cannot be tested for truthiness. | ⏳ | [docs/1345/README.md](docs/1345/README.md) |
| 1346 | This parameter is not allowed with 'use strict' directive. | ⏳ | [docs/1346/README.md](docs/1346/README.md) |
| 1347 | 'use strict' directive cannot be used with non-simple parameter list. | ⏳ | [docs/1347/README.md](docs/1347/README.md) |
| 1348 | Non-simple parameter declared here. | ⏳ | [docs/1348/README.md](docs/1348/README.md) |
| 1349 | 'use strict' directive used here. | ⏳ | [docs/1349/README.md](docs/1349/README.md) |
| 1351 | An identifier or keyword cannot immediately follow a numeric literal. | ⏳ | [docs/1351/README.md](docs/1351/README.md) |
| 1352 | A bigint literal cannot use exponential notation. | ⏳ | [docs/1352/README.md](docs/1352/README.md) |
| 1353 | A bigint literal must be an integer. | ⏳ | [docs/1353/README.md](docs/1353/README.md) |
| 1354 | 'readonly' type modifier is only permitted on array and tuple literal types. | ⏳ | [docs/1354/README.md](docs/1354/README.md) |
| 1355 | A 'const' assertion can only be applied to references to enum members, or string, number, boolean, array, or object literals. | ⏳ | [docs/1355/README.md](docs/1355/README.md) |
| 1356 | Did you mean to mark this function as 'async'? | ⏳ | [docs/1356/README.md](docs/1356/README.md) |
| 1357 | An enum member name must be followed by a ',', '=', or '}'. | ⏳ | [docs/1357/README.md](docs/1357/README.md) |
| 1358 | Tagged template expressions are not permitted in an optional chain. | ⏳ | [docs/1358/README.md](docs/1358/README.md) |
| 1359 | Identifier expected. '{0}' is a reserved word that cannot be used here. | ⏳ | [docs/1359/README.md](docs/1359/README.md) |
| 1360 | Type '{0}' does not satisfy the expected type '{1}'. | ⏳ | [docs/1360/README.md](docs/1360/README.md) |
| 1361 | '{0}' cannot be used as a value because it was imported using 'import type'. | ⏳ | [docs/1361/README.md](docs/1361/README.md) |
| 1362 | '{0}' cannot be used as a value because it was exported using 'export type'. | ⏳ | [docs/1362/README.md](docs/1362/README.md) |
| 1363 | A type-only import can specify a default import or named bindings, but not both. | ⏳ | [docs/1363/README.md](docs/1363/README.md) |
| 1368 | Class constructor may not be a generator. | ⏳ | [docs/1368/README.md](docs/1368/README.md) |
| 1375 | 'await' expressions are only allowed at the top level of a file when that file is a module, but this file has no imports or exports. Consider adding an empty 'export {}' to make this file a module. | ⏳ | [docs/1375/README.md](docs/1375/README.md) |
| 1378 | Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', 'node18', 'node20', 'nodenext', or 'preserve', and the 'target' option is set to 'es2017' or higher. | ⏳ | [docs/1378/README.md](docs/1378/README.md) |
| 1379 | An import alias cannot reference a declaration that was exported using 'export type'. | ⏳ | [docs/1379/README.md](docs/1379/README.md) |
| 1380 | An import alias cannot reference a declaration that was imported using 'import type'. | ⏳ | [docs/1380/README.md](docs/1380/README.md) |
| 1381 | Unexpected token. Did you mean `{'}'}` or `&rbrace;`? | ⏳ | [docs/1381/README.md](docs/1381/README.md) |
| 1382 | Unexpected token. Did you mean `{'>'}` or `&gt;`? | ⏳ | [docs/1382/README.md](docs/1382/README.md) |
| 1385 | Function type notation must be parenthesized when used in a union type. | ⏳ | [docs/1385/README.md](docs/1385/README.md) |
| 1386 | Constructor type notation must be parenthesized when used in a union type. | ⏳ | [docs/1386/README.md](docs/1386/README.md) |
| 1387 | Function type notation must be parenthesized when used in an intersection type. | ⏳ | [docs/1387/README.md](docs/1387/README.md) |
| 1388 | Constructor type notation must be parenthesized when used in an intersection type. | ⏳ | [docs/1388/README.md](docs/1388/README.md) |
| 1389 | '{0}' is not allowed as a variable declaration name. | ⏳ | [docs/1389/README.md](docs/1389/README.md) |
| 1390 | '{0}' is not allowed as a parameter name. | ⏳ | [docs/1390/README.md](docs/1390/README.md) |
| 1392 | An import alias cannot use 'import type' | ⏳ | [docs/1392/README.md](docs/1392/README.md) |
| 1431 | 'for await' loops are only allowed at the top level of a file when that file is a module, but this file has no imports or exports. Consider adding an empty 'export {}' to make this file a module. | ⏳ | [docs/1431/README.md](docs/1431/README.md) |
| 1432 | Top-level 'for await' loops are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', 'node18', 'node20', 'nodenext', or 'preserve', and the 'target' option is set to 'es2017' or higher. | ⏳ | [docs/1432/README.md](docs/1432/README.md) |
| 1433 | Neither decorators nor modifiers may be applied to 'this' parameters. | ⏳ | [docs/1433/README.md](docs/1433/README.md) |
| 1434 | Unexpected keyword or identifier. | ⏳ | [docs/1434/README.md](docs/1434/README.md) |
| 1435 | Unknown keyword or identifier. Did you mean '{0}'? | ⏳ | [docs/1435/README.md](docs/1435/README.md) |
| 1436 | Decorators must precede the name and all keywords of property declarations. | ⏳ | [docs/1436/README.md](docs/1436/README.md) |
| 1437 | Namespace must be given a name. | ⏳ | [docs/1437/README.md](docs/1437/README.md) |
| 1438 | Interface must be given a name. | ⏳ | [docs/1438/README.md](docs/1438/README.md) |
| 1439 | Type alias must be given a name. | ⏳ | [docs/1439/README.md](docs/1439/README.md) |
| 1440 | Variable declaration not allowed at this location. | ⏳ | [docs/1440/README.md](docs/1440/README.md) |
| 1441 | Cannot start a function call in a type annotation. | ⏳ | [docs/1441/README.md](docs/1441/README.md) |
| 1442 | Expected '=' for property initializer. | ⏳ | [docs/1442/README.md](docs/1442/README.md) |
| 1443 | Module declaration names may only use ' or " quoted strings. | ⏳ | [docs/1443/README.md](docs/1443/README.md) |
| 1448 | '{0}' resolves to a type-only declaration and must be re-exported using a type-only re-export when '{1}' is enabled. | ⏳ | [docs/1448/README.md](docs/1448/README.md) |
| 1451 | Private identifiers are only allowed in class bodies and may only be used as part of a class member declaration, property access, or on the left-hand-side of an 'in' expression | ⏳ | [docs/1451/README.md](docs/1451/README.md) |
| 1453 | `resolution-mode` should be either `require` or `import`. | ⏳ | [docs/1453/README.md](docs/1453/README.md) |
| 1454 | `resolution-mode` can only be set for type-only imports. | ⏳ | [docs/1454/README.md](docs/1454/README.md) |
| 1455 | `resolution-mode` is the only valid key for type import assertions. | ⏳ | [docs/1455/README.md](docs/1455/README.md) |
| 1456 | Type import assertions should have exactly one key - `resolution-mode` - with value `import` or `require`. | ⏳ | [docs/1456/README.md](docs/1456/README.md) |
| 1463 | 'resolution-mode' is the only valid key for type import attributes. | ⏳ | [docs/1463/README.md](docs/1463/README.md) |
| 1464 | Type import attributes should have exactly one key - 'resolution-mode' - with value 'import' or 'require'. | ⏳ | [docs/1464/README.md](docs/1464/README.md) |
| 1470 | The 'import.meta' meta-property is not allowed in files which will build into CommonJS output. | ⏳ | [docs/1470/README.md](docs/1470/README.md) |
| 1471 | Module '{0}' cannot be imported using this construct. The specifier only resolves to an ES module, which cannot be imported with 'require'. Use an ECMAScript import instead. | ⏳ | [docs/1471/README.md](docs/1471/README.md) |
| 1472 | 'catch' or 'finally' expected. | ⏳ | [docs/1472/README.md](docs/1472/README.md) |
| 1473 | An import declaration can only be used at the top level of a module. | ⏳ | [docs/1473/README.md](docs/1473/README.md) |
| 1474 | An export declaration can only be used at the top level of a module. | ⏳ | [docs/1474/README.md](docs/1474/README.md) |
| 1477 | An instantiation expression cannot be followed by a property access. | ⏳ | [docs/1477/README.md](docs/1477/README.md) |
| 1478 | Identifier or string literal expected. | ⏳ | [docs/1478/README.md](docs/1478/README.md) |
| 1479 | The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import("{0}")' call instead. | ⏳ | [docs/1479/README.md](docs/1479/README.md) |
| 1484 | '{0}' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled. | ⏳ | [docs/1484/README.md](docs/1484/README.md) |
| 1485 | '{0}' resolves to a type-only declaration and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled. | ⏳ | [docs/1485/README.md](docs/1485/README.md) |
| 1486 | Decorator used before 'export' here. | ⏳ | [docs/1486/README.md](docs/1486/README.md) |
| 1487 | Octal escape sequences are not allowed. Use the syntax '{0}'. | ⏳ | [docs/1487/README.md](docs/1487/README.md) |
| 1488 | Escape sequence '{0}' is not allowed. | ⏳ | [docs/1488/README.md](docs/1488/README.md) |
| 1489 | Decimals with leading zeros are not allowed. | ⏳ | [docs/1489/README.md](docs/1489/README.md) |
| 1490 | File appears to be binary. | ⏳ | [docs/1490/README.md](docs/1490/README.md) |
| 1491 | '{0}' modifier cannot appear on a 'using' declaration. | ⏳ | [docs/1491/README.md](docs/1491/README.md) |
| 1492 | '{0}' declarations may not have binding patterns. | ⏳ | [docs/1492/README.md](docs/1492/README.md) |
| 1493 | The left-hand side of a 'for...in' statement cannot be a 'using' declaration. | ⏳ | [docs/1493/README.md](docs/1493/README.md) |
| 1494 | The left-hand side of a 'for...in' statement cannot be an 'await using' declaration. | ⏳ | [docs/1494/README.md](docs/1494/README.md) |
| 1495 | '{0}' modifier cannot appear on an 'await using' declaration. | ⏳ | [docs/1495/README.md](docs/1495/README.md) |
| 1496 | Identifier, string literal, or number literal expected. | ⏳ | [docs/1496/README.md](docs/1496/README.md) |
| 1497 | Expression must be enclosed in parentheses to be used as a decorator. | ⏳ | [docs/1497/README.md](docs/1497/README.md) |
| 1498 | Invalid syntax in decorator. | ⏳ | [docs/1498/README.md](docs/1498/README.md) |
| 1499 | Unknown regular expression flag. | ⏳ | [docs/1499/README.md](docs/1499/README.md) |
| 1500 | Duplicate regular expression flag. | ⏳ | [docs/1500/README.md](docs/1500/README.md) |
| 1501 | This regular expression flag is only available when targeting '{0}' or later. | ⏳ | [docs/1501/README.md](docs/1501/README.md) |
| 1502 | The Unicode (u) flag and the Unicode Sets (v) flag cannot be set simultaneously. | ⏳ | [docs/1502/README.md](docs/1502/README.md) |
| 1503 | Named capturing groups are only available when targeting 'ES2018' or later. | ⏳ | [docs/1503/README.md](docs/1503/README.md) |
| 1504 | Subpattern flags must be present when there is a minus sign. | ⏳ | [docs/1504/README.md](docs/1504/README.md) |
| 1505 | Incomplete quantifier. Digit expected. | ⏳ | [docs/1505/README.md](docs/1505/README.md) |
| 1506 | Numbers out of order in quantifier. | ⏳ | [docs/1506/README.md](docs/1506/README.md) |
| 1507 | There is nothing available for repetition. | ⏳ | [docs/1507/README.md](docs/1507/README.md) |
| 1508 | Unexpected '{0}'. Did you mean to escape it with backslash? | ⏳ | [docs/1508/README.md](docs/1508/README.md) |
| 1509 | This regular expression flag cannot be toggled within a subpattern. | ⏳ | [docs/1509/README.md](docs/1509/README.md) |
| 1510 | '\k' must be followed by a capturing group name enclosed in angle brackets. | ⏳ | [docs/1510/README.md](docs/1510/README.md) |
| 1511 | '\q' is only available inside character class. | ⏳ | [docs/1511/README.md](docs/1511/README.md) |
| 1512 | '\c' must be followed by an ASCII letter. | ⏳ | [docs/1512/README.md](docs/1512/README.md) |
| 1513 | Undetermined character escape. | ⏳ | [docs/1513/README.md](docs/1513/README.md) |
| 1514 | Expected a capturing group name. | ⏳ | [docs/1514/README.md](docs/1514/README.md) |
| 1515 | Named capturing groups with the same name must be mutually exclusive to each other. | ⏳ | [docs/1515/README.md](docs/1515/README.md) |
| 1516 | A character class range must not be bounded by another character class. | ⏳ | [docs/1516/README.md](docs/1516/README.md) |
| 1517 | Range out of order in character class. | ⏳ | [docs/1517/README.md](docs/1517/README.md) |
| 1518 | Anything that would possibly match more than a single character is invalid inside a negated character class. | ⏳ | [docs/1518/README.md](docs/1518/README.md) |
| 1519 | Operators must not be mixed within a character class. Wrap it in a nested class instead. | ⏳ | [docs/1519/README.md](docs/1519/README.md) |
| 1520 | Expected a class set operand. | ⏳ | [docs/1520/README.md](docs/1520/README.md) |
| 1521 | '\q' must be followed by string alternatives enclosed in braces. | ⏳ | [docs/1521/README.md](docs/1521/README.md) |
| 1522 | A character class must not contain a reserved double punctuator. Did you mean to escape it with backslash? | ⏳ | [docs/1522/README.md](docs/1522/README.md) |
| 1523 | Expected a Unicode property name. | ⏳ | [docs/1523/README.md](docs/1523/README.md) |
| 1524 | Unknown Unicode property name. | ⏳ | [docs/1524/README.md](docs/1524/README.md) |
| 1525 | Expected a Unicode property value. | ⏳ | [docs/1525/README.md](docs/1525/README.md) |
| 1526 | Unknown Unicode property value. | ⏳ | [docs/1526/README.md](docs/1526/README.md) |
| 1527 | Expected a Unicode property name or value. | ⏳ | [docs/1527/README.md](docs/1527/README.md) |
| 1528 | Any Unicode property that would possibly match more than a single character is only available when the Unicode Sets (v) flag is set. | ⏳ | [docs/1528/README.md](docs/1528/README.md) |
| 1529 | Unknown Unicode property name or value. | ⏳ | [docs/1529/README.md](docs/1529/README.md) |
| 1530 | Unicode property value expressions are only available when the Unicode (u) flag or the Unicode Sets (v) flag is set. | ⏳ | [docs/1530/README.md](docs/1530/README.md) |
| 1531 | '\{0}' must be followed by a Unicode property value expression enclosed in braces. | ⏳ | [docs/1531/README.md](docs/1531/README.md) |
| 1532 | There is no capturing group named '{0}' in this regular expression. | ⏳ | [docs/1532/README.md](docs/1532/README.md) |
| 1533 | This backreference refers to a group that does not exist. There are only {0} capturing groups in this regular expression. | ⏳ | [docs/1533/README.md](docs/1533/README.md) |
| 1534 | This backreference refers to a group that does not exist. There are no capturing groups in this regular expression. | ⏳ | [docs/1534/README.md](docs/1534/README.md) |
| 1535 | This character cannot be escaped in a regular expression. | ⏳ | [docs/1535/README.md](docs/1535/README.md) |
| 1536 | Octal escape sequences and backreferences are not allowed in a character class. If this was intended as an escape sequence, use the syntax '{0}' instead. | ⏳ | [docs/1536/README.md](docs/1536/README.md) |
| 1537 | Decimal escape sequences and backreferences are not allowed in a character class. | ⏳ | [docs/1537/README.md](docs/1537/README.md) |
| 1538 | Unicode escape sequences are only available when the Unicode (u) flag or the Unicode Sets (v) flag is set. | ⏳ | [docs/1538/README.md](docs/1538/README.md) |
| 1539 | A 'bigint' literal cannot be used as a property name. | ⏳ | [docs/1539/README.md](docs/1539/README.md) |
| 1541 | Type-only import of an ECMAScript module from a CommonJS module must have a 'resolution-mode' attribute. | ⏳ | [docs/1541/README.md](docs/1541/README.md) |
| 1542 | Type import of an ECMAScript module from a CommonJS module must have a 'resolution-mode' attribute. | ⏳ | [docs/1542/README.md](docs/1542/README.md) |
| 1543 | Importing a JSON file into an ECMAScript module requires a 'type: "json"' import attribute when 'module' is set to '{0}'. | ⏳ | [docs/1543/README.md](docs/1543/README.md) |
| 1544 | Named imports from a JSON file into an ECMAScript module are not allowed when 'module' is set to '{0}'. | ⏳ | [docs/1544/README.md](docs/1544/README.md) |
| 1545 | 'using' declarations are not allowed in ambient contexts. | ⏳ | [docs/1545/README.md](docs/1545/README.md) |
| 1546 | 'await using' declarations are not allowed in ambient contexts. | ⏳ | [docs/1546/README.md](docs/1546/README.md) |
| 2200 | The types of '{0}' are incompatible between these types. | ⏳ | [docs/2200/README.md](docs/2200/README.md) |
| 2201 | The types returned by '{0}' are incompatible between these types. | ⏳ | [docs/2201/README.md](docs/2201/README.md) |
| 2202 | Call signature return types '{0}' and '{1}' are incompatible. | ⏳ | [docs/2202/README.md](docs/2202/README.md) |
| 2203 | Construct signature return types '{0}' and '{1}' are incompatible. | ⏳ | [docs/2203/README.md](docs/2203/README.md) |
| 2204 | Call signatures with no arguments have incompatible return types '{0}' and '{1}'. | ⏳ | [docs/2204/README.md](docs/2204/README.md) |
| 2205 | Construct signatures with no arguments have incompatible return types '{0}' and '{1}'. | ⏳ | [docs/2205/README.md](docs/2205/README.md) |
| 2206 | The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement. | ⏳ | [docs/2206/README.md](docs/2206/README.md) |
| 2207 | The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement. | ⏳ | [docs/2207/README.md](docs/2207/README.md) |
| 2208 | This type parameter might need an `extends {0}` constraint. | ⏳ | [docs/2208/README.md](docs/2208/README.md) |
| 2209 | The project root is ambiguous, but is required to resolve export map entry '{0}' in file '{1}'. Supply the `rootDir` compiler option to disambiguate. | ⏳ | [docs/2209/README.md](docs/2209/README.md) |
| 2210 | The project root is ambiguous, but is required to resolve import map entry '{0}' in file '{1}'. Supply the `rootDir` compiler option to disambiguate. | ⏳ | [docs/2210/README.md](docs/2210/README.md) |
| 2300 | Duplicate identifier '{0}'. | ⏳ | [docs/2300/README.md](docs/2300/README.md) |
| 2301 | Initializer of instance member variable '{0}' cannot reference identifier '{1}' declared in the constructor. | ⏳ | [docs/2301/README.md](docs/2301/README.md) |
| 2302 | Static members cannot reference class type parameters. | ⏳ | [docs/2302/README.md](docs/2302/README.md) |
| 2303 | Circular definition of import alias '{0}'. | ⏳ | [docs/2303/README.md](docs/2303/README.md) |
| 2304 | Cannot find name '{0}'. | ⏳ | [docs/2304/README.md](docs/2304/README.md) |
| 2305 | Module '{0}' has no exported member '{1}'. | ⏳ | [docs/2305/README.md](docs/2305/README.md) |
| 2306 | File '{0}' is not a module. | ⏳ | [docs/2306/README.md](docs/2306/README.md) |
| 2307 | Cannot find module '{0}' or its corresponding type declarations. | ⏳ | [docs/2307/README.md](docs/2307/README.md) |
| 2308 | Module {0} has already exported a member named '{1}'. Consider explicitly re-exporting to resolve the ambiguity. | ⏳ | [docs/2308/README.md](docs/2308/README.md) |
| 2309 | An export assignment cannot be used in a module with other exported elements. | ⏳ | [docs/2309/README.md](docs/2309/README.md) |
| 2310 | Type '{0}' recursively references itself as a base type. | ⏳ | [docs/2310/README.md](docs/2310/README.md) |
| 2311 | Cannot find name '{0}'. Did you mean to write this in an async function? | ⏳ | [docs/2311/README.md](docs/2311/README.md) |
| 2312 | An interface can only extend an object type or intersection of object types with statically known members. | ⏳ | [docs/2312/README.md](docs/2312/README.md) |
| 2313 | Type parameter '{0}' has a circular constraint. | ⏳ | [docs/2313/README.md](docs/2313/README.md) |
| 2314 | Generic type '{0}' requires {1} type argument(s). | ⏳ | [docs/2314/README.md](docs/2314/README.md) |
| 2315 | Type '{0}' is not generic. | ⏳ | [docs/2315/README.md](docs/2315/README.md) |
| 2316 | Global type '{0}' must be a class or interface type. | ⏳ | [docs/2316/README.md](docs/2316/README.md) |
| 2317 | Global type '{0}' must have {1} type parameter(s). | ⏳ | [docs/2317/README.md](docs/2317/README.md) |
| 2318 | Cannot find global type '{0}'. | ⏳ | [docs/2318/README.md](docs/2318/README.md) |
| 2319 | Named property '{0}' of types '{1}' and '{2}' are not identical. | ⏳ | [docs/2319/README.md](docs/2319/README.md) |
| 2320 | Interface '{0}' cannot simultaneously extend types '{1}' and '{2}'. | ⏳ | [docs/2320/README.md](docs/2320/README.md) |
| 2321 | Excessive stack depth comparing types '{0}' and '{1}'. | ⏳ | [docs/2321/README.md](docs/2321/README.md) |
| 2322 | Type '{0}' is not assignable to type '{1}'. | ⏳ | [docs/2322/README.md](docs/2322/README.md) |
| 2323 | Cannot redeclare exported variable '{0}'. | ⏳ | [docs/2323/README.md](docs/2323/README.md) |
| 2324 | Property '{0}' is missing in type '{1}'. | ⏳ | [docs/2324/README.md](docs/2324/README.md) |
| 2325 | Property '{0}' is private in type '{1}' but not in type '{2}'. | ⏳ | [docs/2325/README.md](docs/2325/README.md) |
| 2326 | Types of property '{0}' are incompatible. | ⏳ | [docs/2326/README.md](docs/2326/README.md) |
| 2327 | Property '{0}' is optional in type '{1}' but required in type '{2}'. | ⏳ | [docs/2327/README.md](docs/2327/README.md) |
| 2328 | Types of parameters '{0}' and '{1}' are incompatible. | ⏳ | [docs/2328/README.md](docs/2328/README.md) |
| 2329 | Index signature for type '{0}' is missing in type '{1}'. | ⏳ | [docs/2329/README.md](docs/2329/README.md) |
| 2330 | '{0}' and '{1}' index signatures are incompatible. | ⏳ | [docs/2330/README.md](docs/2330/README.md) |
| 2331 | 'this' cannot be referenced in a module or namespace body. | ⏳ | [docs/2331/README.md](docs/2331/README.md) |
| 2332 | 'this' cannot be referenced in current location. | ⏳ | [docs/2332/README.md](docs/2332/README.md) |
| 2334 | 'this' cannot be referenced in a static property initializer. | ⏳ | [docs/2334/README.md](docs/2334/README.md) |
| 2335 | 'super' can only be referenced in a derived class. | ⏳ | [docs/2335/README.md](docs/2335/README.md) |
| 2336 | 'super' cannot be referenced in constructor arguments. | ⏳ | [docs/2336/README.md](docs/2336/README.md) |
| 2337 | Super calls are not permitted outside constructors or in nested functions inside constructors. | ⏳ | [docs/2337/README.md](docs/2337/README.md) |
| 2338 | 'super' property access is permitted only in a constructor, member function, or member accessor of a derived class. | ⏳ | [docs/2338/README.md](docs/2338/README.md) |
| 2339 | Property '{0}' does not exist on type '{1}'. | ⏳ | [docs/2339/README.md](docs/2339/README.md) |
| 2340 | Only public and protected methods of the base class are accessible via the 'super' keyword. | ⏳ | [docs/2340/README.md](docs/2340/README.md) |
| 2341 | Property '{0}' is private and only accessible within class '{1}'. | ⏳ | [docs/2341/README.md](docs/2341/README.md) |
| 2343 | This syntax requires an imported helper named '{1}' which does not exist in '{0}'. Consider upgrading your version of '{0}'. | ⏳ | [docs/2343/README.md](docs/2343/README.md) |
| 2344 | Type '{0}' does not satisfy the constraint '{1}'. | ⏳ | [docs/2344/README.md](docs/2344/README.md) |
| 2345 | Argument of type '{0}' is not assignable to parameter of type '{1}'. | ⏳ | [docs/2345/README.md](docs/2345/README.md) |
| 2346 | Call target does not contain any signatures. | ⏳ | [docs/2346/README.md](docs/2346/README.md) |
| 2347 | Untyped function calls may not accept type arguments. | ⏳ | [docs/2347/README.md](docs/2347/README.md) |
| 2348 | Value of type '{0}' is not callable. Did you mean to include 'new'? | ⏳ | [docs/2348/README.md](docs/2348/README.md) |
| 2349 | This expression is not callable. | ⏳ | [docs/2349/README.md](docs/2349/README.md) |
| 2350 | Only a void function can be called with the 'new' keyword. | ⏳ | [docs/2350/README.md](docs/2350/README.md) |
| 2351 | This expression is not constructable. | ⏳ | [docs/2351/README.md](docs/2351/README.md) |
| 2352 | Conversion of type '{0}' to type '{1}' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first. | ⏳ | [docs/2352/README.md](docs/2352/README.md) |
| 2353 | Object literal may only specify known properties, and '{0}' does not exist in type '{1}'. | ⏳ | [docs/2353/README.md](docs/2353/README.md) |
| 2354 | This syntax requires an imported helper but module '{0}' cannot be found. | ⏳ | [docs/2354/README.md](docs/2354/README.md) |
| 2355 | A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value. | ⏳ | [docs/2355/README.md](docs/2355/README.md) |
| 2356 | An arithmetic operand must be of type 'any', 'number', 'bigint' or an enum type. | ⏳ | [docs/2356/README.md](docs/2356/README.md) |
| 2357 | The operand of an increment or decrement operator must be a variable or a property access. | ⏳ | [docs/2357/README.md](docs/2357/README.md) |
| 2358 | The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter. | ⏳ | [docs/2358/README.md](docs/2358/README.md) |
| 2359 | The right-hand side of an 'instanceof' expression must be either of type 'any', a class, function, or other type assignable to the 'Function' interface type, or an object type with a 'Symbol.hasInstance' method. | ⏳ | [docs/2359/README.md](docs/2359/README.md) |
| 2362 | The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type. | ⏳ | [docs/2362/README.md](docs/2362/README.md) |
| 2363 | The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type. | ⏳ | [docs/2363/README.md](docs/2363/README.md) |
| 2364 | The left-hand side of an assignment expression must be a variable or a property access. | ⏳ | [docs/2364/README.md](docs/2364/README.md) |
| 2365 | Operator '{0}' cannot be applied to types '{1}' and '{2}'. | ⏳ | [docs/2365/README.md](docs/2365/README.md) |
| 2366 | Function lacks ending return statement and return type does not include 'undefined'. | ⏳ | [docs/2366/README.md](docs/2366/README.md) |
| 2367 | This comparison appears to be unintentional because the types '{0}' and '{1}' have no overlap. | ⏳ | [docs/2367/README.md](docs/2367/README.md) |
| 2368 | Type parameter name cannot be '{0}'. | ⏳ | [docs/2368/README.md](docs/2368/README.md) |
| 2369 | A parameter property is only allowed in a constructor implementation. | ⏳ | [docs/2369/README.md](docs/2369/README.md) |
| 2370 | A rest parameter must be of an array type. | ⏳ | [docs/2370/README.md](docs/2370/README.md) |
| 2371 | A parameter initializer is only allowed in a function or constructor implementation. | ⏳ | [docs/2371/README.md](docs/2371/README.md) |
| 2372 | Parameter '{0}' cannot reference itself. | ⏳ | [docs/2372/README.md](docs/2372/README.md) |
| 2373 | Parameter '{0}' cannot reference identifier '{1}' declared after it. | ⏳ | [docs/2373/README.md](docs/2373/README.md) |
| 2374 | Duplicate index signature for type '{0}'. | ⏳ | [docs/2374/README.md](docs/2374/README.md) |
| 2375 | Type '{0}' is not assignable to type '{1}' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties. | ⏳ | [docs/2375/README.md](docs/2375/README.md) |
| 2376 | A 'super' call must be the first statement in the constructor to refer to 'super' or 'this' when a derived class contains initialized properties, parameter properties, or private identifiers. | ⏳ | [docs/2376/README.md](docs/2376/README.md) |
| 2377 | Constructors for derived classes must contain a 'super' call. | ⏳ | [docs/2377/README.md](docs/2377/README.md) |
| 2378 | A 'get' accessor must return a value. | ⏳ | [docs/2378/README.md](docs/2378/README.md) |
| 2379 | Argument of type '{0}' is not assignable to parameter of type '{1}' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the types of the target's properties. | ⏳ | [docs/2379/README.md](docs/2379/README.md) |
| 2383 | Overload signatures must all be exported or non-exported. | ⏳ | [docs/2383/README.md](docs/2383/README.md) |
| 2384 | Overload signatures must all be ambient or non-ambient. | ⏳ | [docs/2384/README.md](docs/2384/README.md) |
| 2385 | Overload signatures must all be public, private or protected. | ⏳ | [docs/2385/README.md](docs/2385/README.md) |
| 2386 | Overload signatures must all be optional or required. | ⏳ | [docs/2386/README.md](docs/2386/README.md) |
| 2387 | Function overload must be static. | ⏳ | [docs/2387/README.md](docs/2387/README.md) |
| 2388 | Function overload must not be static. | ⏳ | [docs/2388/README.md](docs/2388/README.md) |
| 2389 | Function implementation name must be '{0}'. | ⏳ | [docs/2389/README.md](docs/2389/README.md) |
| 2390 | Constructor implementation is missing. | ⏳ | [docs/2390/README.md](docs/2390/README.md) |
| 2391 | Function implementation is missing or not immediately following the declaration. | ⏳ | [docs/2391/README.md](docs/2391/README.md) |
| 2392 | Multiple constructor implementations are not allowed. | ⏳ | [docs/2392/README.md](docs/2392/README.md) |
| 2393 | Duplicate function implementation. | ⏳ | [docs/2393/README.md](docs/2393/README.md) |
| 2394 | This overload signature is not compatible with its implementation signature. | ⏳ | [docs/2394/README.md](docs/2394/README.md) |
| 2395 | Individual declarations in merged declaration '{0}' must be all exported or all local. | ⏳ | [docs/2395/README.md](docs/2395/README.md) |
| 2396 | Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters. | ⏳ | [docs/2396/README.md](docs/2396/README.md) |
| 2397 | Declaration name conflicts with built-in global identifier '{0}'. | ⏳ | [docs/2397/README.md](docs/2397/README.md) |
| 2398 | 'constructor' cannot be used as a parameter property name. | ⏳ | [docs/2398/README.md](docs/2398/README.md) |
| 2399 | Duplicate identifier '_this'. Compiler uses variable declaration '_this' to capture 'this' reference. | ⏳ | [docs/2399/README.md](docs/2399/README.md) |
| 2400 | Expression resolves to variable declaration '_this' that compiler uses to capture 'this' reference. | ⏳ | [docs/2400/README.md](docs/2400/README.md) |
| 2401 | A 'super' call must be a root-level statement within a constructor of a derived class that contains initialized properties, parameter properties, or private identifiers. | ⏳ | [docs/2401/README.md](docs/2401/README.md) |
| 2402 | Expression resolves to '_super' that compiler uses to capture base class reference. | ⏳ | [docs/2402/README.md](docs/2402/README.md) |
| 2403 | Subsequent variable declarations must have the same type.  Variable '{0}' must be of type '{1}', but here has type '{2}'. | ⏳ | [docs/2403/README.md](docs/2403/README.md) |
| 2404 | The left-hand side of a 'for...in' statement cannot use a type annotation. | ⏳ | [docs/2404/README.md](docs/2404/README.md) |
| 2405 | The left-hand side of a 'for...in' statement must be of type 'string' or 'any'. | ⏳ | [docs/2405/README.md](docs/2405/README.md) |
| 2406 | The left-hand side of a 'for...in' statement must be a variable or a property access. | ⏳ | [docs/2406/README.md](docs/2406/README.md) |
| 2407 | The right-hand side of a 'for...in' statement must be of type 'any', an object type or a type parameter, but here has type '{0}'. | ⏳ | [docs/2407/README.md](docs/2407/README.md) |
| 2408 | Setters cannot return a value. | ⏳ | [docs/2408/README.md](docs/2408/README.md) |
| 2409 | Return type of constructor signature must be assignable to the instance type of the class. | ⏳ | [docs/2409/README.md](docs/2409/README.md) |
| 2410 | The 'with' statement is not supported. All symbols in a 'with' block will have type 'any'. | ⏳ | [docs/2410/README.md](docs/2410/README.md) |
| 2411 | Property '{0}' of type '{1}' is not assignable to '{2}' index type '{3}'. | ⏳ | [docs/2411/README.md](docs/2411/README.md) |
| 2412 | Type '{0}' is not assignable to type '{1}' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the type of the target. | ⏳ | [docs/2412/README.md](docs/2412/README.md) |
| 2413 | '{0}' index type '{1}' is not assignable to '{2}' index type '{3}'. | ⏳ | [docs/2413/README.md](docs/2413/README.md) |
| 2414 | Class name cannot be '{0}'. | ⏳ | [docs/2414/README.md](docs/2414/README.md) |
| 2415 | Class '{0}' incorrectly extends base class '{1}'. | ⏳ | [docs/2415/README.md](docs/2415/README.md) |
| 2416 | Property '{0}' in type '{1}' is not assignable to the same property in base type '{2}'. | ⏳ | [docs/2416/README.md](docs/2416/README.md) |
| 2417 | Class static side '{0}' incorrectly extends base class static side '{1}'. | ⏳ | [docs/2417/README.md](docs/2417/README.md) |
| 2418 | Type of computed property's value is '{0}', which is not assignable to type '{1}'. | ⏳ | [docs/2418/README.md](docs/2418/README.md) |
| 2419 | Types of construct signatures are incompatible. | ⏳ | [docs/2419/README.md](docs/2419/README.md) |
| 2420 | Class '{0}' incorrectly implements interface '{1}'. | ⏳ | [docs/2420/README.md](docs/2420/README.md) |
| 2422 | A class can only implement an object type or intersection of object types with statically known members. | ⏳ | [docs/2422/README.md](docs/2422/README.md) |
| 2423 | Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member accessor. | ⏳ | [docs/2423/README.md](docs/2423/README.md) |
| 2425 | Class '{0}' defines instance member property '{1}', but extended class '{2}' defines it as instance member function. | ⏳ | [docs/2425/README.md](docs/2425/README.md) |
| 2426 | Class '{0}' defines instance member accessor '{1}', but extended class '{2}' defines it as instance member function. | ⏳ | [docs/2426/README.md](docs/2426/README.md) |
| 2427 | Interface name cannot be '{0}'. | ⏳ | [docs/2427/README.md](docs/2427/README.md) |
| 2428 | All declarations of '{0}' must have identical type parameters. | ⏳ | [docs/2428/README.md](docs/2428/README.md) |
| 2430 | Interface '{0}' incorrectly extends interface '{1}'. | ⏳ | [docs/2430/README.md](docs/2430/README.md) |
| 2431 | Enum name cannot be '{0}'. | ⏳ | [docs/2431/README.md](docs/2431/README.md) |
| 2432 | In an enum with multiple declarations, only one declaration can omit an initializer for its first enum element. | ⏳ | [docs/2432/README.md](docs/2432/README.md) |
| 2433 | A namespace declaration cannot be in a different file from a class or function with which it is merged. | ⏳ | [docs/2433/README.md](docs/2433/README.md) |
| 2434 | A namespace declaration cannot be located prior to a class or function with which it is merged. | ⏳ | [docs/2434/README.md](docs/2434/README.md) |
| 2435 | Ambient modules cannot be nested in other modules or namespaces. | ⏳ | [docs/2435/README.md](docs/2435/README.md) |
| 2436 | Ambient module declaration cannot specify relative module name. | ⏳ | [docs/2436/README.md](docs/2436/README.md) |
| 2437 | Module '{0}' is hidden by a local declaration with the same name. | ⏳ | [docs/2437/README.md](docs/2437/README.md) |
| 2438 | Import name cannot be '{0}'. | ⏳ | [docs/2438/README.md](docs/2438/README.md) |
| 2439 | Import or export declaration in an ambient module declaration cannot reference module through relative module name. | ⏳ | [docs/2439/README.md](docs/2439/README.md) |
| 2440 | Import declaration conflicts with local declaration of '{0}'. | ⏳ | [docs/2440/README.md](docs/2440/README.md) |
| 2441 | Duplicate identifier '{0}'. Compiler reserves name '{1}' in top level scope of a module. | ⏳ | [docs/2441/README.md](docs/2441/README.md) |
| 2442 | Types have separate declarations of a private property '{0}'. | ⏳ | [docs/2442/README.md](docs/2442/README.md) |
| 2443 | Property '{0}' is protected but type '{1}' is not a class derived from '{2}'. | ⏳ | [docs/2443/README.md](docs/2443/README.md) |
| 2444 | Property '{0}' is protected in type '{1}' but public in type '{2}'. | ⏳ | [docs/2444/README.md](docs/2444/README.md) |
| 2445 | Property '{0}' is protected and only accessible within class '{1}' and its subclasses. | ⏳ | [docs/2445/README.md](docs/2445/README.md) |
| 2446 | Property '{0}' is protected and only accessible through an instance of class '{1}'. This is an instance of class '{2}'. | ⏳ | [docs/2446/README.md](docs/2446/README.md) |
| 2447 | The '{0}' operator is not allowed for boolean types. Consider using '{1}' instead. | ⏳ | [docs/2447/README.md](docs/2447/README.md) |
| 2448 | Block-scoped variable '{0}' used before its declaration. | ⏳ | [docs/2448/README.md](docs/2448/README.md) |
| 2449 | Class '{0}' used before its declaration. | ⏳ | [docs/2449/README.md](docs/2449/README.md) |
| 2450 | Enum '{0}' used before its declaration. | ⏳ | [docs/2450/README.md](docs/2450/README.md) |
| 2451 | Cannot redeclare block-scoped variable '{0}'. | ⏳ | [docs/2451/README.md](docs/2451/README.md) |
| 2452 | An enum member cannot have a numeric name. | ⏳ | [docs/2452/README.md](docs/2452/README.md) |
| 2454 | Variable '{0}' is used before being assigned. | ⏳ | [docs/2454/README.md](docs/2454/README.md) |
| 2456 | Type alias '{0}' circularly references itself. | ⏳ | [docs/2456/README.md](docs/2456/README.md) |
| 2457 | Type alias name cannot be '{0}'. | ⏳ | [docs/2457/README.md](docs/2457/README.md) |
| 2458 | An AMD module cannot have multiple name assignments. | ⏳ | [docs/2458/README.md](docs/2458/README.md) |
| 2459 | Module '{0}' declares '{1}' locally, but it is not exported. | ⏳ | [docs/2459/README.md](docs/2459/README.md) |
| 2460 | Module '{0}' declares '{1}' locally, but it is exported as '{2}'. | ⏳ | [docs/2460/README.md](docs/2460/README.md) |
| 2461 | Type '{0}' is not an array type. | ⏳ | [docs/2461/README.md](docs/2461/README.md) |
| 2462 | A rest element must be last in a destructuring pattern. | ⏳ | [docs/2462/README.md](docs/2462/README.md) |
| 2463 | A binding pattern parameter cannot be optional in an implementation signature. | ⏳ | [docs/2463/README.md](docs/2463/README.md) |
| 2464 | A computed property name must be of type 'string', 'number', 'symbol', or 'any'. | ⏳ | [docs/2464/README.md](docs/2464/README.md) |
| 2465 | 'this' cannot be referenced in a computed property name. | ⏳ | [docs/2465/README.md](docs/2465/README.md) |
| 2466 | 'super' cannot be referenced in a computed property name. | ⏳ | [docs/2466/README.md](docs/2466/README.md) |
| 2467 | A computed property name cannot reference a type parameter from its containing type. | ⏳ | [docs/2467/README.md](docs/2467/README.md) |
| 2468 | Cannot find global value '{0}'. | ⏳ | [docs/2468/README.md](docs/2468/README.md) |
| 2469 | The '{0}' operator cannot be applied to type 'symbol'. | ⏳ | [docs/2469/README.md](docs/2469/README.md) |
| 2472 | Spread operator in 'new' expressions is only available when targeting ECMAScript 5 and higher. | ⏳ | [docs/2472/README.md](docs/2472/README.md) |
| 2473 | Enum declarations must all be const or non-const. | ⏳ | [docs/2473/README.md](docs/2473/README.md) |
| 2474 | const enum member initializers must be constant expressions. | ⏳ | [docs/2474/README.md](docs/2474/README.md) |
| 2475 | 'const' enums can only be used in property or index access expressions or the right hand side of an import declaration or export assignment or type query. | ⏳ | [docs/2475/README.md](docs/2475/README.md) |
| 2476 | A const enum member can only be accessed using a string literal. | ⏳ | [docs/2476/README.md](docs/2476/README.md) |
| 2477 | 'const' enum member initializer was evaluated to a non-finite value. | ⏳ | [docs/2477/README.md](docs/2477/README.md) |
| 2478 | 'const' enum member initializer was evaluated to disallowed value 'NaN'. | ⏳ | [docs/2478/README.md](docs/2478/README.md) |
| 2480 | 'let' is not allowed to be used as a name in 'let' or 'const' declarations. | ⏳ | [docs/2480/README.md](docs/2480/README.md) |
| 2481 | Cannot initialize outer scoped variable '{0}' in the same scope as block scoped declaration '{1}'. | ⏳ | [docs/2481/README.md](docs/2481/README.md) |
| 2483 | The left-hand side of a 'for...of' statement cannot use a type annotation. | ⏳ | [docs/2483/README.md](docs/2483/README.md) |
| 2484 | Export declaration conflicts with exported declaration of '{0}'. | ⏳ | [docs/2484/README.md](docs/2484/README.md) |
| 2487 | The left-hand side of a 'for...of' statement must be a variable or a property access. | ⏳ | [docs/2487/README.md](docs/2487/README.md) |
| 2488 | Type '{0}' must have a '[Symbol.iterator]()' method that returns an iterator. | ⏳ | [docs/2488/README.md](docs/2488/README.md) |
| 2489 | An iterator must have a 'next()' method. | ⏳ | [docs/2489/README.md](docs/2489/README.md) |
| 2490 | The type returned by the '{0}()' method of an iterator must have a 'value' property. | ⏳ | [docs/2490/README.md](docs/2490/README.md) |
| 2491 | The left-hand side of a 'for...in' statement cannot be a destructuring pattern. | ⏳ | [docs/2491/README.md](docs/2491/README.md) |
| 2492 | Cannot redeclare identifier '{0}' in catch clause. | ⏳ | [docs/2492/README.md](docs/2492/README.md) |
| 2493 | Tuple type '{0}' of length '{1}' has no element at index '{2}'. | ⏳ | [docs/2493/README.md](docs/2493/README.md) |
| 2494 | Using a string in a 'for...of' statement is only supported in ECMAScript 5 and higher. | ⏳ | [docs/2494/README.md](docs/2494/README.md) |
| 2495 | Type '{0}' is not an array type or a string type. | ⏳ | [docs/2495/README.md](docs/2495/README.md) |
| 2496 | The 'arguments' object cannot be referenced in an arrow function in ES5. Consider using a standard function expression. | ⏳ | [docs/2496/README.md](docs/2496/README.md) |
| 2497 | This module can only be referenced with ECMAScript imports/exports by turning on the '{0}' flag and referencing its default export. | ⏳ | [docs/2497/README.md](docs/2497/README.md) |
| 2498 | Module '{0}' uses 'export =' and cannot be used with 'export *'. | ⏳ | [docs/2498/README.md](docs/2498/README.md) |
| 2499 | An interface can only extend an identifier/qualified-name with optional type arguments. | ⏳ | [docs/2499/README.md](docs/2499/README.md) |
| 2500 | A class can only implement an identifier/qualified-name with optional type arguments. | ⏳ | [docs/2500/README.md](docs/2500/README.md) |
| 2501 | A rest element cannot contain a binding pattern. | ⏳ | [docs/2501/README.md](docs/2501/README.md) |
| 2502 | '{0}' is referenced directly or indirectly in its own type annotation. | ⏳ | [docs/2502/README.md](docs/2502/README.md) |
| 2503 | Cannot find namespace '{0}'. | ⏳ | [docs/2503/README.md](docs/2503/README.md) |
| 2504 | Type '{0}' must have a '[Symbol.asyncIterator]()' method that returns an async iterator. | ⏳ | [docs/2504/README.md](docs/2504/README.md) |
| 2505 | A generator cannot have a 'void' type annotation. | ⏳ | [docs/2505/README.md](docs/2505/README.md) |
| 2506 | '{0}' is referenced directly or indirectly in its own base expression. | ⏳ | [docs/2506/README.md](docs/2506/README.md) |
| 2507 | Type '{0}' is not a constructor function type. | ⏳ | [docs/2507/README.md](docs/2507/README.md) |
| 2508 | No base constructor has the specified number of type arguments. | ⏳ | [docs/2508/README.md](docs/2508/README.md) |
| 2509 | Base constructor return type '{0}' is not an object type or intersection of object types with statically known members. | ⏳ | [docs/2509/README.md](docs/2509/README.md) |
| 2510 | Base constructors must all have the same return type. | ⏳ | [docs/2510/README.md](docs/2510/README.md) |
| 2511 | Cannot create an instance of an abstract class. | ⏳ | [docs/2511/README.md](docs/2511/README.md) |
| 2512 | Overload signatures must all be abstract or non-abstract. | ⏳ | [docs/2512/README.md](docs/2512/README.md) |
| 2513 | Abstract method '{0}' in class '{1}' cannot be accessed via super expression. | ⏳ | [docs/2513/README.md](docs/2513/README.md) |
| 2514 | A tuple type cannot be indexed with a negative value. | ⏳ | [docs/2514/README.md](docs/2514/README.md) |
| 2515 | Non-abstract class '{0}' does not implement inherited abstract member {1} from class '{2}'. | ⏳ | [docs/2515/README.md](docs/2515/README.md) |
| 2516 | All declarations of an abstract method must be consecutive. | ⏳ | [docs/2516/README.md](docs/2516/README.md) |
| 2517 | Cannot assign an abstract constructor type to a non-abstract constructor type. | ⏳ | [docs/2517/README.md](docs/2517/README.md) |
| 2518 | A 'this'-based type guard is not compatible with a parameter-based type guard. | ⏳ | [docs/2518/README.md](docs/2518/README.md) |
| 2519 | An async iterator must have a 'next()' method. | ⏳ | [docs/2519/README.md](docs/2519/README.md) |
| 2520 | Duplicate identifier '{0}'. Compiler uses declaration '{1}' to support async functions. | ⏳ | [docs/2520/README.md](docs/2520/README.md) |
| 2522 | The 'arguments' object cannot be referenced in an async function or method in ES5. Consider using a standard function or method. | ⏳ | [docs/2522/README.md](docs/2522/README.md) |
| 2523 | 'yield' expressions cannot be used in a parameter initializer. | ⏳ | [docs/2523/README.md](docs/2523/README.md) |
| 2524 | 'await' expressions cannot be used in a parameter initializer. | ⏳ | [docs/2524/README.md](docs/2524/README.md) |
| 2526 | A 'this' type is available only in a non-static member of a class or interface. | ⏳ | [docs/2526/README.md](docs/2526/README.md) |
| 2527 | The inferred type of '{0}' references an inaccessible '{1}' type. A type annotation is necessary. | ⏳ | [docs/2527/README.md](docs/2527/README.md) |
| 2528 | A module cannot have multiple default exports. | ⏳ | [docs/2528/README.md](docs/2528/README.md) |
| 2529 | Duplicate identifier '{0}'. Compiler reserves name '{1}' in top level scope of a module containing async functions. | ⏳ | [docs/2529/README.md](docs/2529/README.md) |
| 2530 | Property '{0}' is incompatible with index signature. | ⏳ | [docs/2530/README.md](docs/2530/README.md) |
| 2531 | Object is possibly 'null'. | ⏳ | [docs/2531/README.md](docs/2531/README.md) |
| 2532 | Object is possibly 'undefined'. | ⏳ | [docs/2532/README.md](docs/2532/README.md) |
| 2533 | Object is possibly 'null' or 'undefined'. | ⏳ | [docs/2533/README.md](docs/2533/README.md) |
| 2534 | A function returning 'never' cannot have a reachable end point. | ⏳ | [docs/2534/README.md](docs/2534/README.md) |
| 2536 | Type '{0}' cannot be used to index type '{1}'. | ⏳ | [docs/2536/README.md](docs/2536/README.md) |
| 2537 | Type '{0}' has no matching index signature for type '{1}'. | ⏳ | [docs/2537/README.md](docs/2537/README.md) |
| 2538 | Type '{0}' cannot be used as an index type. | ⏳ | [docs/2538/README.md](docs/2538/README.md) |
| 2539 | Cannot assign to '{0}' because it is not a variable. | ⏳ | [docs/2539/README.md](docs/2539/README.md) |
| 2540 | Cannot assign to '{0}' because it is a read-only property. | ⏳ | [docs/2540/README.md](docs/2540/README.md) |
| 2542 | Index signature in type '{0}' only permits reading. | ⏳ | [docs/2542/README.md](docs/2542/README.md) |
| 2543 | Duplicate identifier '_newTarget'. Compiler uses variable declaration '_newTarget' to capture 'new.target' meta-property reference. | ⏳ | [docs/2543/README.md](docs/2543/README.md) |
| 2544 | Expression resolves to variable declaration '_newTarget' that compiler uses to capture 'new.target' meta-property reference. | ⏳ | [docs/2544/README.md](docs/2544/README.md) |
| 2545 | A mixin class must have a constructor with a single rest parameter of type 'any[]'. | ⏳ | [docs/2545/README.md](docs/2545/README.md) |
| 2547 | The type returned by the '{0}()' method of an async iterator must be a promise for a type with a 'value' property. | ⏳ | [docs/2547/README.md](docs/2547/README.md) |
| 2548 | Type '{0}' is not an array type or does not have a '[Symbol.iterator]()' method that returns an iterator. | ⏳ | [docs/2548/README.md](docs/2548/README.md) |
| 2549 | Type '{0}' is not an array type or a string type or does not have a '[Symbol.iterator]()' method that returns an iterator. | ⏳ | [docs/2549/README.md](docs/2549/README.md) |
| 2550 | Property '{0}' does not exist on type '{1}'. Do you need to change your target library? Try changing the 'lib' compiler option to '{2}' or later. | ⏳ | [docs/2550/README.md](docs/2550/README.md) |
| 2551 | Property '{0}' does not exist on type '{1}'. Did you mean '{2}'? | ⏳ | [docs/2551/README.md](docs/2551/README.md) |
| 2552 | Cannot find name '{0}'. Did you mean '{1}'? | ⏳ | [docs/2552/README.md](docs/2552/README.md) |
| 2553 | Computed values are not permitted in an enum with string valued members. | ⏳ | [docs/2553/README.md](docs/2553/README.md) |
| 2554 | Expected {0} arguments, but got {1}. | ⏳ | [docs/2554/README.md](docs/2554/README.md) |
| 2555 | Expected at least {0} arguments, but got {1}. | ⏳ | [docs/2555/README.md](docs/2555/README.md) |
| 2556 | A spread argument must either have a tuple type or be passed to a rest parameter. | ⏳ | [docs/2556/README.md](docs/2556/README.md) |
| 2558 | Expected {0} type arguments, but got {1}. | ⏳ | [docs/2558/README.md](docs/2558/README.md) |
| 2559 | Type '{0}' has no properties in common with type '{1}'. | ⏳ | [docs/2559/README.md](docs/2559/README.md) |
| 2560 | Value of type '{0}' has no properties in common with type '{1}'. Did you mean to call it? | ⏳ | [docs/2560/README.md](docs/2560/README.md) |
| 2561 | Object literal may only specify known properties, but '{0}' does not exist in type '{1}'. Did you mean to write '{2}'? | ⏳ | [docs/2561/README.md](docs/2561/README.md) |
| 2562 | Base class expressions cannot reference class type parameters. | ⏳ | [docs/2562/README.md](docs/2562/README.md) |
| 2563 | The containing function or module body is too large for control flow analysis. | ⏳ | [docs/2563/README.md](docs/2563/README.md) |
| 2564 | Property '{0}' has no initializer and is not definitely assigned in the constructor. | ⏳ | [docs/2564/README.md](docs/2564/README.md) |
| 2565 | Property '{0}' is used before being assigned. | ⏳ | [docs/2565/README.md](docs/2565/README.md) |
| 2566 | A rest element cannot have a property name. | ⏳ | [docs/2566/README.md](docs/2566/README.md) |
| 2567 | Enum declarations can only merge with namespace or other enum declarations. | ⏳ | [docs/2567/README.md](docs/2567/README.md) |
| 2568 | Property '{0}' may not exist on type '{1}'. Did you mean '{2}'? | ⏳ | [docs/2568/README.md](docs/2568/README.md) |
| 2570 | Could not find name '{0}'. Did you mean '{1}'? | ⏳ | [docs/2570/README.md](docs/2570/README.md) |
| 2571 | Object is of type 'unknown'. | ⏳ | [docs/2571/README.md](docs/2571/README.md) |
| 2574 | A rest element type must be an array type. | ⏳ | [docs/2574/README.md](docs/2574/README.md) |
| 2575 | No overload expects {0} arguments, but overloads do exist that expect either {1} or {2} arguments. | ⏳ | [docs/2575/README.md](docs/2575/README.md) |
| 2576 | Property '{0}' does not exist on type '{1}'. Did you mean to access the static member '{2}' instead? | ⏳ | [docs/2576/README.md](docs/2576/README.md) |
| 2577 | Return type annotation circularly references itself. | ⏳ | [docs/2577/README.md](docs/2577/README.md) |
| 2578 | Unused '@ts-expect-error' directive. | ⏳ | [docs/2578/README.md](docs/2578/README.md) |
| 2580 | Cannot find name '{0}'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`. | ⏳ | [docs/2580/README.md](docs/2580/README.md) |
| 2581 | Cannot find name '{0}'. Do you need to install type definitions for jQuery? Try `npm i --save-dev @types/jquery`. | ⏳ | [docs/2581/README.md](docs/2581/README.md) |
| 2582 | Cannot find name '{0}'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha`. | ⏳ | [docs/2582/README.md](docs/2582/README.md) |
| 2583 | Cannot find name '{0}'. Do you need to change your target library? Try changing the 'lib' compiler option to '{1}' or later. | ⏳ | [docs/2583/README.md](docs/2583/README.md) |
| 2584 | Cannot find name '{0}'. Do you need to change your target library? Try changing the 'lib' compiler option to include 'dom'. | ⏳ | [docs/2584/README.md](docs/2584/README.md) |
| 2585 | '{0}' only refers to a type, but is being used as a value here. Do you need to change your target library? Try changing the 'lib' compiler option to es2015 or later. | ⏳ | [docs/2585/README.md](docs/2585/README.md) |
| 2588 | Cannot assign to '{0}' because it is a constant. | ⏳ | [docs/2588/README.md](docs/2588/README.md) |
| 2589 | Type instantiation is excessively deep and possibly infinite. | ⏳ | [docs/2589/README.md](docs/2589/README.md) |
| 2590 | Expression produces a union type that is too complex to represent. | ⏳ | [docs/2590/README.md](docs/2590/README.md) |
| 2591 | Cannot find name '{0}'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node` and then add 'node' to the types field in your tsconfig. | ⏳ | [docs/2591/README.md](docs/2591/README.md) |
| 2592 | Cannot find name '{0}'. Do you need to install type definitions for jQuery? Try `npm i --save-dev @types/jquery` and then add 'jquery' to the types field in your tsconfig. | ⏳ | [docs/2592/README.md](docs/2592/README.md) |
| 2593 | Cannot find name '{0}'. Do you need to install type definitions for a test runner? Try `npm i --save-dev @types/jest` or `npm i --save-dev @types/mocha` and then add 'jest' or 'mocha' to the types field in your tsconfig. | ⏳ | [docs/2593/README.md](docs/2593/README.md) |
| 2594 | This module is declared with 'export =', and can only be used with a default import when using the '{0}' flag. | ⏳ | [docs/2594/README.md](docs/2594/README.md) |
| 2595 | '{0}' can only be imported by using a default import. | ⏳ | [docs/2595/README.md](docs/2595/README.md) |
| 2596 | '{0}' can only be imported by turning on the 'esModuleInterop' flag and using a default import. | ⏳ | [docs/2596/README.md](docs/2596/README.md) |
| 2597 | '{0}' can only be imported by using a 'require' call or by using a default import. | ⏳ | [docs/2597/README.md](docs/2597/README.md) |
| 2598 | '{0}' can only be imported by using a 'require' call or by turning on the 'esModuleInterop' flag and using a default import. | ⏳ | [docs/2598/README.md](docs/2598/README.md) |
| 2602 | JSX element implicitly has type 'any' because the global type 'JSX.Element' does not exist. | ⏳ | [docs/2602/README.md](docs/2602/README.md) |
| 2603 | Property '{0}' in type '{1}' is not assignable to type '{2}'. | ⏳ | [docs/2603/README.md](docs/2603/README.md) |
| 2604 | JSX element type '{0}' does not have any construct or call signatures. | ⏳ | [docs/2604/README.md](docs/2604/README.md) |
| 2606 | Property '{0}' of JSX spread attribute is not assignable to target property. | ⏳ | [docs/2606/README.md](docs/2606/README.md) |
| 2607 | JSX element class does not support attributes because it does not have a '{0}' property. | ⏳ | [docs/2607/README.md](docs/2607/README.md) |
| 2608 | The global type 'JSX.{0}' may not have more than one property. | ⏳ | [docs/2608/README.md](docs/2608/README.md) |
| 2609 | JSX spread child must be an array type. | ⏳ | [docs/2609/README.md](docs/2609/README.md) |
| 2610 | '{0}' is defined as an accessor in class '{1}', but is overridden here in '{2}' as an instance property. | ⏳ | [docs/2610/README.md](docs/2610/README.md) |
| 2611 | '{0}' is defined as a property in class '{1}', but is overridden here in '{2}' as an accessor. | ⏳ | [docs/2611/README.md](docs/2611/README.md) |
| 2612 | Property '{0}' will overwrite the base property in '{1}'. If this is intentional, add an initializer. Otherwise, add a 'declare' modifier or remove the redundant declaration. | ⏳ | [docs/2612/README.md](docs/2612/README.md) |
| 2613 | Module '{0}' has no default export. Did you mean to use 'import { {1} } from {0}' instead? | ⏳ | [docs/2613/README.md](docs/2613/README.md) |
| 2614 | Module '{0}' has no exported member '{1}'. Did you mean to use 'import {1} from {0}' instead? | ⏳ | [docs/2614/README.md](docs/2614/README.md) |
| 2615 | Type of property '{0}' circularly references itself in mapped type '{1}'. | ⏳ | [docs/2615/README.md](docs/2615/README.md) |
| 2616 | '{0}' can only be imported by using 'import {1} = require({2})' or a default import. | ⏳ | [docs/2616/README.md](docs/2616/README.md) |
| 2617 | '{0}' can only be imported by using 'import {1} = require({2})' or by turning on the 'esModuleInterop' flag and using a default import. | ⏳ | [docs/2617/README.md](docs/2617/README.md) |
| 2618 | Source has {0} element(s) but target requires {1}. | ⏳ | [docs/2618/README.md](docs/2618/README.md) |
| 2619 | Source has {0} element(s) but target allows only {1}. | ⏳ | [docs/2619/README.md](docs/2619/README.md) |
| 2620 | Target requires {0} element(s) but source may have fewer. | ⏳ | [docs/2620/README.md](docs/2620/README.md) |
| 2621 | Target allows only {0} element(s) but source may have more. | ⏳ | [docs/2621/README.md](docs/2621/README.md) |
| 2623 | Source provides no match for required element at position {0} in target. | ⏳ | [docs/2623/README.md](docs/2623/README.md) |
| 2624 | Source provides no match for variadic element at position {0} in target. | ⏳ | [docs/2624/README.md](docs/2624/README.md) |
| 2625 | Variadic element at position {0} in source does not match element at position {1} in target. | ⏳ | [docs/2625/README.md](docs/2625/README.md) |
| 2626 | Type at position {0} in source is not compatible with type at position {1} in target. | ⏳ | [docs/2626/README.md](docs/2626/README.md) |
| 2627 | Type at positions {0} through {1} in source is not compatible with type at position {2} in target. | ⏳ | [docs/2627/README.md](docs/2627/README.md) |
| 2628 | Cannot assign to '{0}' because it is an enum. | ⏳ | [docs/2628/README.md](docs/2628/README.md) |
| 2629 | Cannot assign to '{0}' because it is a class. | ⏳ | [docs/2629/README.md](docs/2629/README.md) |
| 2630 | Cannot assign to '{0}' because it is a function. | ⏳ | [docs/2630/README.md](docs/2630/README.md) |
| 2631 | Cannot assign to '{0}' because it is a namespace. | ⏳ | [docs/2631/README.md](docs/2631/README.md) |
| 2632 | Cannot assign to '{0}' because it is an import. | ⏳ | [docs/2632/README.md](docs/2632/README.md) |
| 2633 | JSX property access expressions cannot include JSX namespace names | ⏳ | [docs/2633/README.md](docs/2633/README.md) |
| 2634 | '{0}' index signatures are incompatible. | ⏳ | [docs/2634/README.md](docs/2634/README.md) |
| 2635 | Type '{0}' has no signatures for which the type argument list is applicable. | ⏳ | [docs/2635/README.md](docs/2635/README.md) |
| 2636 | Type '{0}' is not assignable to type '{1}' as implied by variance annotation. | ⏳ | [docs/2636/README.md](docs/2636/README.md) |
| 2637 | Variance annotations are only supported in type aliases for object, function, constructor, and mapped types. | ⏳ | [docs/2637/README.md](docs/2637/README.md) |
| 2638 | Type '{0}' may represent a primitive value, which is not permitted as the right operand of the 'in' operator. | ⏳ | [docs/2638/README.md](docs/2638/README.md) |
| 2639 | React components cannot include JSX namespace names | ⏳ | [docs/2639/README.md](docs/2639/README.md) |
| 2649 | Cannot augment module '{0}' with value exports because it resolves to a non-module entity. | ⏳ | [docs/2649/README.md](docs/2649/README.md) |
| 2650 | Non-abstract class expression is missing implementations for the following members of '{0}': {1} and {2} more. | ⏳ | [docs/2650/README.md](docs/2650/README.md) |
| 2651 | A member initializer in a enum declaration cannot reference members declared after it, including members defined in other enums. | ⏳ | [docs/2651/README.md](docs/2651/README.md) |
| 2652 | Merged declaration '{0}' cannot include a default export declaration. Consider adding a separate 'export default {0}' declaration instead. | ⏳ | [docs/2652/README.md](docs/2652/README.md) |
| 2653 | Non-abstract class expression does not implement inherited abstract member '{0}' from class '{1}'. | ⏳ | [docs/2653/README.md](docs/2653/README.md) |
| 2654 | Non-abstract class '{0}' is missing implementations for the following members of '{1}': {2}. | ⏳ | [docs/2654/README.md](docs/2654/README.md) |
| 2655 | Non-abstract class '{0}' is missing implementations for the following members of '{1}': {2} and {3} more. | ⏳ | [docs/2655/README.md](docs/2655/README.md) |
| 2656 | Non-abstract class expression is missing implementations for the following members of '{0}': {1}. | ⏳ | [docs/2656/README.md](docs/2656/README.md) |
| 2657 | JSX expressions must have one parent element. | ⏳ | [docs/2657/README.md](docs/2657/README.md) |
| 2658 | Type '{0}' provides no match for the signature '{1}'. | ⏳ | [docs/2658/README.md](docs/2658/README.md) |
| 2659 | 'super' is only allowed in members of object literal expressions when option 'target' is 'ES2015' or higher. | ⏳ | [docs/2659/README.md](docs/2659/README.md) |
| 2660 | 'super' can only be referenced in members of derived classes or object literal expressions. | ⏳ | [docs/2660/README.md](docs/2660/README.md) |
| 2661 | Cannot export '{0}'. Only local declarations can be exported from a module. | ⏳ | [docs/2661/README.md](docs/2661/README.md) |
| 2662 | Cannot find name '{0}'. Did you mean the static member '{1}.{0}'? | ⏳ | [docs/2662/README.md](docs/2662/README.md) |
| 2663 | Cannot find name '{0}'. Did you mean the instance member 'this.{0}'? | ⏳ | [docs/2663/README.md](docs/2663/README.md) |
| 2664 | Invalid module name in augmentation, module '{0}' cannot be found. | ⏳ | [docs/2664/README.md](docs/2664/README.md) |
| 2665 | Invalid module name in augmentation. Module '{0}' resolves to an untyped module at '{1}', which cannot be augmented. | ⏳ | [docs/2665/README.md](docs/2665/README.md) |
| 2666 | Exports and export assignments are not permitted in module augmentations. | ⏳ | [docs/2666/README.md](docs/2666/README.md) |
| 2667 | Imports are not permitted in module augmentations. Consider moving them to the enclosing external module. | ⏳ | [docs/2667/README.md](docs/2667/README.md) |
| 2668 | 'export' modifier cannot be applied to ambient modules and module augmentations since they are always visible. | ⏳ | [docs/2668/README.md](docs/2668/README.md) |
| 2669 | Augmentations for the global scope can only be directly nested in external modules or ambient module declarations. | ⏳ | [docs/2669/README.md](docs/2669/README.md) |
| 2670 | Augmentations for the global scope should have 'declare' modifier unless they appear in already ambient context. | ⏳ | [docs/2670/README.md](docs/2670/README.md) |
| 2671 | Cannot augment module '{0}' because it resolves to a non-module entity. | ⏳ | [docs/2671/README.md](docs/2671/README.md) |
| 2672 | Cannot assign a '{0}' constructor type to a '{1}' constructor type. | ⏳ | [docs/2672/README.md](docs/2672/README.md) |
| 2673 | Constructor of class '{0}' is private and only accessible within the class declaration. | ⏳ | [docs/2673/README.md](docs/2673/README.md) |
| 2674 | Constructor of class '{0}' is protected and only accessible within the class declaration. | ⏳ | [docs/2674/README.md](docs/2674/README.md) |
| 2675 | Cannot extend a class '{0}'. Class constructor is marked as private. | ⏳ | [docs/2675/README.md](docs/2675/README.md) |
| 2676 | Accessors must both be abstract or non-abstract. | ⏳ | [docs/2676/README.md](docs/2676/README.md) |
| 2677 | A type predicate's type must be assignable to its parameter's type. | ⏳ | [docs/2677/README.md](docs/2677/README.md) |
| 2678 | Type '{0}' is not comparable to type '{1}'. | ⏳ | [docs/2678/README.md](docs/2678/README.md) |
| 2679 | A function that is called with the 'new' keyword cannot have a 'this' type that is 'void'. | ⏳ | [docs/2679/README.md](docs/2679/README.md) |
| 2680 | A '{0}' parameter must be the first parameter. | ⏳ | [docs/2680/README.md](docs/2680/README.md) |
| 2681 | A constructor cannot have a 'this' parameter. | ⏳ | [docs/2681/README.md](docs/2681/README.md) |
| 2683 | 'this' implicitly has type 'any' because it does not have a type annotation. | ⏳ | [docs/2683/README.md](docs/2683/README.md) |
| 2684 | The 'this' context of type '{0}' is not assignable to method's 'this' of type '{1}'. | ⏳ | [docs/2684/README.md](docs/2684/README.md) |
| 2685 | The 'this' types of each signature are incompatible. | ⏳ | [docs/2685/README.md](docs/2685/README.md) |
| 2686 | '{0}' refers to a UMD global, but the current file is a module. Consider adding an import instead. | ⏳ | [docs/2686/README.md](docs/2686/README.md) |
| 2687 | All declarations of '{0}' must have identical modifiers. | ⏳ | [docs/2687/README.md](docs/2687/README.md) |
| 2688 | Cannot find type definition file for '{0}'. | ⏳ | [docs/2688/README.md](docs/2688/README.md) |
| 2689 | Cannot extend an interface '{0}'. Did you mean 'implements'? | ⏳ | [docs/2689/README.md](docs/2689/README.md) |
| 2690 | '{0}' only refers to a type, but is being used as a value here. Did you mean to use '{1} in {0}'? | ⏳ | [docs/2690/README.md](docs/2690/README.md) |
| 2692 | '{0}' is a primitive, but '{1}' is a wrapper object. Prefer using '{0}' when possible. | ⏳ | [docs/2692/README.md](docs/2692/README.md) |
| 2693 | '{0}' only refers to a type, but is being used as a value here. | ⏳ | [docs/2693/README.md](docs/2693/README.md) |
| 2694 | Namespace '{0}' has no exported member '{1}'. | ⏳ | [docs/2694/README.md](docs/2694/README.md) |
| 2695 | Left side of comma operator is unused and has no side effects. | ⏳ | [docs/2695/README.md](docs/2695/README.md) |
| 2696 | The 'Object' type is assignable to very few other types. Did you mean to use the 'any' type instead? | ⏳ | [docs/2696/README.md](docs/2696/README.md) |
| 2697 | An async function or method must return a 'Promise'. Make sure you have a declaration for 'Promise' or include 'ES2015' in your '--lib' option. | ⏳ | [docs/2697/README.md](docs/2697/README.md) |
| 2698 | Spread types may only be created from object types. | ⏳ | [docs/2698/README.md](docs/2698/README.md) |
| 2699 | Static property '{0}' conflicts with built-in property 'Function.{0}' of constructor function '{1}'. | ⏳ | [docs/2699/README.md](docs/2699/README.md) |
| 2700 | Rest types may only be created from object types. | ⏳ | [docs/2700/README.md](docs/2700/README.md) |
| 2701 | The target of an object rest assignment must be a variable or a property access. | ⏳ | [docs/2701/README.md](docs/2701/README.md) |
| 2702 | '{0}' only refers to a type, but is being used as a namespace here. | ⏳ | [docs/2702/README.md](docs/2702/README.md) |
| 2703 | The operand of a 'delete' operator must be a property reference. | ⏳ | [docs/2703/README.md](docs/2703/README.md) |
| 2704 | The operand of a 'delete' operator cannot be a read-only property. | ⏳ | [docs/2704/README.md](docs/2704/README.md) |
| 2705 | An async function or method in ES5 requires the 'Promise' constructor.  Make sure you have a declaration for the 'Promise' constructor or include 'ES2015' in your '--lib' option. | ⏳ | [docs/2705/README.md](docs/2705/README.md) |
| 2706 | Required type parameters may not follow optional type parameters. | ⏳ | [docs/2706/README.md](docs/2706/README.md) |
| 2707 | Generic type '{0}' requires between {1} and {2} type arguments. | ⏳ | [docs/2707/README.md](docs/2707/README.md) |
| 2708 | Cannot use namespace '{0}' as a value. | ⏳ | [docs/2708/README.md](docs/2708/README.md) |
| 2709 | Cannot use namespace '{0}' as a type. | ⏳ | [docs/2709/README.md](docs/2709/README.md) |
| 2710 | '{0}' are specified twice. The attribute named '{0}' will be overwritten. | ⏳ | [docs/2710/README.md](docs/2710/README.md) |
| 2711 | A dynamic import call returns a 'Promise'. Make sure you have a declaration for 'Promise' or include 'ES2015' in your '--lib' option. | ⏳ | [docs/2711/README.md](docs/2711/README.md) |
| 2712 | A dynamic import call in ES5 requires the 'Promise' constructor.  Make sure you have a declaration for the 'Promise' constructor or include 'ES2015' in your '--lib' option. | ⏳ | [docs/2712/README.md](docs/2712/README.md) |
| 2713 | Cannot access '{0}.{1}' because '{0}' is a type, but not a namespace. Did you mean to retrieve the type of the property '{1}' in '{0}' with '{0}["{1}"]'? | ⏳ | [docs/2713/README.md](docs/2713/README.md) |
| 2714 | The expression of an export assignment must be an identifier or qualified name in an ambient context. | ⏳ | [docs/2714/README.md](docs/2714/README.md) |
| 2715 | Abstract property '{0}' in class '{1}' cannot be accessed in the constructor. | ⏳ | [docs/2715/README.md](docs/2715/README.md) |
| 2716 | Type parameter '{0}' has a circular default. | ⏳ | [docs/2716/README.md](docs/2716/README.md) |
| 2717 | Subsequent property declarations must have the same type.  Property '{0}' must be of type '{1}', but here has type '{2}'. | ⏳ | [docs/2717/README.md](docs/2717/README.md) |
| 2718 | Duplicate property '{0}'. | ⏳ | [docs/2718/README.md](docs/2718/README.md) |
| 2719 | Type '{0}' is not assignable to type '{1}'. Two different types with this name exist, but they are unrelated. | ⏳ | [docs/2719/README.md](docs/2719/README.md) |
| 2720 | Class '{0}' incorrectly implements class '{1}'. Did you mean to extend '{1}' and inherit its members as a subclass? | ⏳ | [docs/2720/README.md](docs/2720/README.md) |
| 2721 | Cannot invoke an object which is possibly 'null'. | ⏳ | [docs/2721/README.md](docs/2721/README.md) |
| 2722 | Cannot invoke an object which is possibly 'undefined'. | ⏳ | [docs/2722/README.md](docs/2722/README.md) |
| 2723 | Cannot invoke an object which is possibly 'null' or 'undefined'. | ⏳ | [docs/2723/README.md](docs/2723/README.md) |
| 2724 | '{0}' has no exported member named '{1}'. Did you mean '{2}'? | ⏳ | [docs/2724/README.md](docs/2724/README.md) |
| 2725 | Class name cannot be 'Object' when targeting ES5 and above with module {0}. | ⏳ | [docs/2725/README.md](docs/2725/README.md) |
| 2726 | Cannot find lib definition for '{0}'. | ⏳ | [docs/2726/README.md](docs/2726/README.md) |
| 2727 | Cannot find lib definition for '{0}'. Did you mean '{1}'? | ⏳ | [docs/2727/README.md](docs/2727/README.md) |
| 2729 | Property '{0}' is used before its initialization. | ⏳ | [docs/2729/README.md](docs/2729/README.md) |
| 2730 | An arrow function cannot have a 'this' parameter. | ⏳ | [docs/2730/README.md](docs/2730/README.md) |
| 2731 | Implicit conversion of a 'symbol' to a 'string' will fail at runtime. Consider wrapping this expression in 'String(...)'. | ⏳ | [docs/2731/README.md](docs/2731/README.md) |
| 2732 | Cannot find module '{0}'. Consider using '--resolveJsonModule' to import module with '.json' extension. | ⏳ | [docs/2732/README.md](docs/2732/README.md) |
| 2733 | Property '{0}' was also declared here. | ⏳ | [docs/2733/README.md](docs/2733/README.md) |
| 2734 | Are you missing a semicolon? | ⏳ | [docs/2734/README.md](docs/2734/README.md) |
| 2735 | Did you mean for '{0}' to be constrained to type 'new (...args: any[]) => {1}'? | ⏳ | [docs/2735/README.md](docs/2735/README.md) |
| 2736 | Operator '{0}' cannot be applied to type '{1}'. | ⏳ | [docs/2736/README.md](docs/2736/README.md) |
| 2737 | BigInt literals are not available when targeting lower than ES2020. | ⏳ | [docs/2737/README.md](docs/2737/README.md) |
| 2739 | Type '{0}' is missing the following properties from type '{1}': {2} | ⏳ | [docs/2739/README.md](docs/2739/README.md) |
| 2740 | Type '{0}' is missing the following properties from type '{1}': {2}, and {3} more. | ⏳ | [docs/2740/README.md](docs/2740/README.md) |
| 2741 | Property '{0}' is missing in type '{1}' but required in type '{2}'. | ⏳ | [docs/2741/README.md](docs/2741/README.md) |
| 2742 | The inferred type of '{0}' cannot be named without a reference to '{1}'. This is likely not portable. A type annotation is necessary. | ⏳ | [docs/2742/README.md](docs/2742/README.md) |
| 2743 | No overload expects {0} type arguments, but overloads do exist that expect either {1} or {2} type arguments. | ⏳ | [docs/2743/README.md](docs/2743/README.md) |
| 2744 | Type parameter defaults can only reference previously declared type parameters. | ⏳ | [docs/2744/README.md](docs/2744/README.md) |
| 2745 | This JSX tag's '{0}' prop expects type '{1}' which requires multiple children, but only a single child was provided. | ⏳ | [docs/2745/README.md](docs/2745/README.md) |
| 2746 | This JSX tag's '{0}' prop expects a single child of type '{1}', but multiple children were provided. | ⏳ | [docs/2746/README.md](docs/2746/README.md) |
| 2747 | '{0}' components don't accept text as child elements. Text in JSX has the type 'string', but the expected type of '{1}' is '{2}'. | ⏳ | [docs/2747/README.md](docs/2747/README.md) |
| 2748 | Cannot access ambient const enums when '{0}' is enabled. | ⏳ | [docs/2748/README.md](docs/2748/README.md) |
| 2749 | '{0}' refers to a value, but is being used as a type here. Did you mean 'typeof {0}'? | ⏳ | [docs/2749/README.md](docs/2749/README.md) |
| 2750 | The implementation signature is declared here. | ⏳ | [docs/2750/README.md](docs/2750/README.md) |
| 2751 | Circularity originates in type at this location. | ⏳ | [docs/2751/README.md](docs/2751/README.md) |
| 2752 | The first export default is here. | ⏳ | [docs/2752/README.md](docs/2752/README.md) |
| 2753 | Another export default is here. | ⏳ | [docs/2753/README.md](docs/2753/README.md) |
| 2754 | 'super' may not use type arguments. | ⏳ | [docs/2754/README.md](docs/2754/README.md) |
| 2755 | No constituent of type '{0}' is callable. | ⏳ | [docs/2755/README.md](docs/2755/README.md) |
| 2756 | Not all constituents of type '{0}' are callable. | ⏳ | [docs/2756/README.md](docs/2756/README.md) |
| 2757 | Type '{0}' has no call signatures. | ⏳ | [docs/2757/README.md](docs/2757/README.md) |
| 2758 | Each member of the union type '{0}' has signatures, but none of those signatures are compatible with each other. | ⏳ | [docs/2758/README.md](docs/2758/README.md) |
| 2759 | No constituent of type '{0}' is constructable. | ⏳ | [docs/2759/README.md](docs/2759/README.md) |
| 2760 | Not all constituents of type '{0}' are constructable. | ⏳ | [docs/2760/README.md](docs/2760/README.md) |
| 2761 | Type '{0}' has no construct signatures. | ⏳ | [docs/2761/README.md](docs/2761/README.md) |
| 2762 | Each member of the union type '{0}' has construct signatures, but none of those signatures are compatible with each other. | ⏳ | [docs/2762/README.md](docs/2762/README.md) |
| 2763 | Cannot iterate value because the 'next' method of its iterator expects type '{1}', but for-of will always send '{0}'. | ⏳ | [docs/2763/README.md](docs/2763/README.md) |
| 2764 | Cannot iterate value because the 'next' method of its iterator expects type '{1}', but array spread will always send '{0}'. | ⏳ | [docs/2764/README.md](docs/2764/README.md) |
| 2765 | Cannot iterate value because the 'next' method of its iterator expects type '{1}', but array destructuring will always send '{0}'. | ⏳ | [docs/2765/README.md](docs/2765/README.md) |
| 2766 | Cannot delegate iteration to value because the 'next' method of its iterator expects type '{1}', but the containing generator will always send '{0}'. | ⏳ | [docs/2766/README.md](docs/2766/README.md) |
| 2767 | The '{0}' property of an iterator must be a method. | ⏳ | [docs/2767/README.md](docs/2767/README.md) |
| 2768 | The '{0}' property of an async iterator must be a method. | ⏳ | [docs/2768/README.md](docs/2768/README.md) |
| 2769 | No overload matches this call. | ⏳ | [docs/2769/README.md](docs/2769/README.md) |
| 2770 | The last overload gave the following error. | ⏳ | [docs/2770/README.md](docs/2770/README.md) |
| 2771 | The last overload is declared here. | ⏳ | [docs/2771/README.md](docs/2771/README.md) |
| 2772 | Overload {0} of {1}, '{2}', gave the following error. | ⏳ | [docs/2772/README.md](docs/2772/README.md) |
| 2773 | Did you forget to use 'await'? | ⏳ | [docs/2773/README.md](docs/2773/README.md) |
| 2774 | This condition will always return true since this function is always defined. Did you mean to call it instead? | ⏳ | [docs/2774/README.md](docs/2774/README.md) |
| 2775 | Assertions require every name in the call target to be declared with an explicit type annotation. | ⏳ | [docs/2775/README.md](docs/2775/README.md) |
| 2776 | Assertions require the call target to be an identifier or qualified name. | ⏳ | [docs/2776/README.md](docs/2776/README.md) |
| 2777 | The operand of an increment or decrement operator may not be an optional property access. | ⏳ | [docs/2777/README.md](docs/2777/README.md) |
| 2778 | The target of an object rest assignment may not be an optional property access. | ⏳ | [docs/2778/README.md](docs/2778/README.md) |
| 2779 | The left-hand side of an assignment expression may not be an optional property access. | ⏳ | [docs/2779/README.md](docs/2779/README.md) |
| 2780 | The left-hand side of a 'for...in' statement may not be an optional property access. | ⏳ | [docs/2780/README.md](docs/2780/README.md) |
| 2781 | The left-hand side of a 'for...of' statement may not be an optional property access. | ⏳ | [docs/2781/README.md](docs/2781/README.md) |
| 2783 | '{0}' is specified more than once, so this usage will be overwritten. | ⏳ | [docs/2783/README.md](docs/2783/README.md) |
| 2784 | 'get' and 'set' accessors cannot declare 'this' parameters. | ⏳ | [docs/2784/README.md](docs/2784/README.md) |
| 2785 | This spread always overwrites this property. | ⏳ | [docs/2785/README.md](docs/2785/README.md) |
| 2786 | '{0}' cannot be used as a JSX component. | ⏳ | [docs/2786/README.md](docs/2786/README.md) |
| 2787 | Its return type '{0}' is not a valid JSX element. | ⏳ | [docs/2787/README.md](docs/2787/README.md) |
| 2788 | Its instance type '{0}' is not a valid JSX element. | ⏳ | [docs/2788/README.md](docs/2788/README.md) |
| 2789 | Its element type '{0}' is not a valid JSX element. | ⏳ | [docs/2789/README.md](docs/2789/README.md) |
| 2790 | The operand of a 'delete' operator must be optional. | ⏳ | [docs/2790/README.md](docs/2790/README.md) |
| 2791 | Exponentiation cannot be performed on 'bigint' values unless the 'target' option is set to 'es2016' or later. | ⏳ | [docs/2791/README.md](docs/2791/README.md) |
| 2792 | Cannot find module '{0}'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option? | ⏳ | [docs/2792/README.md](docs/2792/README.md) |
| 2793 | The call would have succeeded against this implementation, but implementation signatures of overloads are not externally visible. | ⏳ | [docs/2793/README.md](docs/2793/README.md) |
| 2794 | Expected {0} arguments, but got {1}. Did you forget to include 'void' in your type argument to 'Promise'? | ⏳ | [docs/2794/README.md](docs/2794/README.md) |
| 2795 | The 'intrinsic' keyword can only be used to declare compiler provided intrinsic types. | ⏳ | [docs/2795/README.md](docs/2795/README.md) |
| 2796 | It is likely that you are missing a comma to separate these two template expressions. They form a tagged template expression which cannot be invoked. | ⏳ | [docs/2796/README.md](docs/2796/README.md) |
| 2797 | A mixin class that extends from a type variable containing an abstract construct signature must also be declared 'abstract'. | ⏳ | [docs/2797/README.md](docs/2797/README.md) |
| 2798 | The declaration was marked as deprecated here. | ⏳ | [docs/2798/README.md](docs/2798/README.md) |
| 2799 | Type produces a tuple type that is too large to represent. | ⏳ | [docs/2799/README.md](docs/2799/README.md) |
| 2800 | Expression produces a tuple type that is too large to represent. | ⏳ | [docs/2800/README.md](docs/2800/README.md) |
| 2801 | This condition will always return true since this '{0}' is always defined. | ⏳ | [docs/2801/README.md](docs/2801/README.md) |
| 2802 | Type '{0}' can only be iterated through when using the '--downlevelIteration' flag or with a '--target' of 'es2015' or higher. | ⏳ | [docs/2802/README.md](docs/2802/README.md) |
| 2803 | Cannot assign to private method '{0}'. Private methods are not writable. | ⏳ | [docs/2803/README.md](docs/2803/README.md) |
| 2804 | Duplicate identifier '{0}'. Static and instance elements cannot share the same private name. | ⏳ | [docs/2804/README.md](docs/2804/README.md) |
| 2806 | Private accessor was defined without a getter. | ⏳ | [docs/2806/README.md](docs/2806/README.md) |
| 2807 | This syntax requires an imported helper named '{1}' with {2} parameters, which is not compatible with the one in '{0}'. Consider upgrading your version of '{0}'. | ⏳ | [docs/2807/README.md](docs/2807/README.md) |
| 2808 | A get accessor must be at least as accessible as the setter | ⏳ | [docs/2808/README.md](docs/2808/README.md) |
| 2809 | Declaration or statement expected. This '=' follows a block of statements, so if you intended to write a destructuring assignment, you might need to wrap the whole assignment in parentheses. | ⏳ | [docs/2809/README.md](docs/2809/README.md) |
| 2810 | Expected 1 argument, but got 0. 'new Promise()' needs a JSDoc hint to produce a 'resolve' that can be called without arguments. | ⏳ | [docs/2810/README.md](docs/2810/README.md) |
| 2811 | Initializer for property '{0}' | ⏳ | [docs/2811/README.md](docs/2811/README.md) |
| 2812 | Property '{0}' does not exist on type '{1}'. Try changing the 'lib' compiler option to include 'dom'. | ⏳ | [docs/2812/README.md](docs/2812/README.md) |
| 2813 | Class declaration cannot implement overload list for '{0}'. | ⏳ | [docs/2813/README.md](docs/2813/README.md) |
| 2814 | Function with bodies can only merge with classes that are ambient. | ⏳ | [docs/2814/README.md](docs/2814/README.md) |
| 2815 | 'arguments' cannot be referenced in property initializers or class static initialization blocks. | ⏳ | [docs/2815/README.md](docs/2815/README.md) |
| 2816 | Cannot use 'this' in a static property initializer of a decorated class. | ⏳ | [docs/2816/README.md](docs/2816/README.md) |
| 2817 | Property '{0}' has no initializer and is not definitely assigned in a class static block. | ⏳ | [docs/2817/README.md](docs/2817/README.md) |
| 2818 | Duplicate identifier '{0}'. Compiler reserves name '{1}' when emitting 'super' references in static initializers. | ⏳ | [docs/2818/README.md](docs/2818/README.md) |
| 2819 | Namespace name cannot be '{0}'. | ⏳ | [docs/2819/README.md](docs/2819/README.md) |
| 2820 | Type '{0}' is not assignable to type '{1}'. Did you mean '{2}'? | ⏳ | [docs/2820/README.md](docs/2820/README.md) |
| 2821 | Import assertions are only supported when the '--module' option is set to 'esnext', 'node18', 'node20', 'nodenext', or 'preserve'. | ⏳ | [docs/2821/README.md](docs/2821/README.md) |
| 2822 | Import assertions cannot be used with type-only imports or exports. | ⏳ | [docs/2822/README.md](docs/2822/README.md) |
| 2823 | Import attributes are only supported when the '--module' option is set to 'esnext', 'node18', 'node20', 'nodenext', or 'preserve'. | ⏳ | [docs/2823/README.md](docs/2823/README.md) |
| 2833 | Cannot find namespace '{0}'. Did you mean '{1}'? | ⏳ | [docs/2833/README.md](docs/2833/README.md) |
| 2834 | Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Consider adding an extension to the import path. | ⏳ | [docs/2834/README.md](docs/2834/README.md) |
| 2835 | Relative import paths need explicit file extensions in ECMAScript imports when '--moduleResolution' is 'node16' or 'nodenext'. Did you mean '{0}'? | ⏳ | [docs/2835/README.md](docs/2835/README.md) |
| 2836 | Import assertions are not allowed on statements that compile to CommonJS 'require' calls. | ⏳ | [docs/2836/README.md](docs/2836/README.md) |
| 2837 | Import assertion values must be string literal expressions. | ⏳ | [docs/2837/README.md](docs/2837/README.md) |
| 2838 | All declarations of '{0}' must have identical constraints. | ⏳ | [docs/2838/README.md](docs/2838/README.md) |
| 2839 | This condition will always return '{0}' since JavaScript compares objects by reference, not value. | ⏳ | [docs/2839/README.md](docs/2839/README.md) |
| 2840 | An interface cannot extend a primitive type like '{0}'. It can only extend other named object types. | ⏳ | [docs/2840/README.md](docs/2840/README.md) |
| 2842 | '{0}' is an unused renaming of '{1}'. Did you intend to use it as a type annotation? | ⏳ | [docs/2842/README.md](docs/2842/README.md) |
| 2843 | We can only write a type for '{0}' by adding a type for the entire parameter here. | ⏳ | [docs/2843/README.md](docs/2843/README.md) |
| 2844 | Type of instance member variable '{0}' cannot reference identifier '{1}' declared in the constructor. | ⏳ | [docs/2844/README.md](docs/2844/README.md) |
| 2845 | This condition will always return '{0}'. | ⏳ | [docs/2845/README.md](docs/2845/README.md) |
| 2846 | A declaration file cannot be imported without 'import type'. Did you mean to import an implementation file '{0}' instead? | ⏳ | [docs/2846/README.md](docs/2846/README.md) |
| 2848 | The right-hand side of an 'instanceof' expression must not be an instantiation expression. | ⏳ | [docs/2848/README.md](docs/2848/README.md) |
| 2849 | Target signature provides too few arguments. Expected {0} or more, but got {1}. | ⏳ | [docs/2849/README.md](docs/2849/README.md) |
| 2850 | The initializer of a 'using' declaration must be either an object with a '[Symbol.dispose]()' method, or be 'null' or 'undefined'. | ⏳ | [docs/2850/README.md](docs/2850/README.md) |
| 2851 | The initializer of an 'await using' declaration must be either an object with a '[Symbol.asyncDispose]()' or '[Symbol.dispose]()' method, or be 'null' or 'undefined'. | ⏳ | [docs/2851/README.md](docs/2851/README.md) |
| 2852 | 'await using' statements are only allowed within async functions and at the top levels of modules. | ⏳ | [docs/2852/README.md](docs/2852/README.md) |
| 2853 | 'await using' statements are only allowed at the top level of a file when that file is a module, but this file has no imports or exports. Consider adding an empty 'export {}' to make this file a module. | ⏳ | [docs/2853/README.md](docs/2853/README.md) |
| 2854 | Top-level 'await using' statements are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', 'node18', 'node20', 'nodenext', or 'preserve', and the 'target' option is set to 'es2017' or higher. | ⏳ | [docs/2854/README.md](docs/2854/README.md) |
| 2855 | Class field '{0}' defined by the parent class is not accessible in the child class via super. | ⏳ | [docs/2855/README.md](docs/2855/README.md) |
| 2856 | Import attributes are not allowed on statements that compile to CommonJS 'require' calls. | ⏳ | [docs/2856/README.md](docs/2856/README.md) |
| 2857 | Import attributes cannot be used with type-only imports or exports. | ⏳ | [docs/2857/README.md](docs/2857/README.md) |
| 2858 | Import attribute values must be string literal expressions. | ⏳ | [docs/2858/README.md](docs/2858/README.md) |
| 2859 | Excessive complexity comparing types '{0}' and '{1}'. | ⏳ | [docs/2859/README.md](docs/2859/README.md) |
| 2860 | The left-hand side of an 'instanceof' expression must be assignable to the first argument of the right-hand side's '[Symbol.hasInstance]' method. | ⏳ | [docs/2860/README.md](docs/2860/README.md) |
| 2861 | An object's '[Symbol.hasInstance]' method must return a boolean value for it to be used on the right-hand side of an 'instanceof' expression. | ⏳ | [docs/2861/README.md](docs/2861/README.md) |
| 2862 | Type '{0}' is generic and can only be indexed for reading. | ⏳ | [docs/2862/README.md](docs/2862/README.md) |
| 2863 | A class cannot extend a primitive type like '{0}'. Classes can only extend constructable values. | ⏳ | [docs/2863/README.md](docs/2863/README.md) |
| 2864 | A class cannot implement a primitive type like '{0}'. It can only implement other named object types. | ⏳ | [docs/2864/README.md](docs/2864/README.md) |
| 2865 | Import '{0}' conflicts with local value, so must be declared with a type-only import when 'isolatedModules' is enabled. | ⏳ | [docs/2865/README.md](docs/2865/README.md) |
| 2866 | Import '{0}' conflicts with global value used in this file, so must be declared with a type-only import when 'isolatedModules' is enabled. | ⏳ | [docs/2866/README.md](docs/2866/README.md) |
| 2867 | Cannot find name '{0}'. Do you need to install type definitions for Bun? Try `npm i --save-dev @types/bun`. | ⏳ | [docs/2867/README.md](docs/2867/README.md) |
| 2868 | Cannot find name '{0}'. Do you need to install type definitions for Bun? Try `npm i --save-dev @types/bun` and then add 'bun' to the types field in your tsconfig. | ⏳ | [docs/2868/README.md](docs/2868/README.md) |
| 2869 | Right operand of ?? is unreachable because the left operand is never nullish. | ⏳ | [docs/2869/README.md](docs/2869/README.md) |
| 2870 | This binary expression is never nullish. Are you missing parentheses? | ⏳ | [docs/2870/README.md](docs/2870/README.md) |
| 2871 | This expression is always nullish. | ⏳ | [docs/2871/README.md](docs/2871/README.md) |
| 2872 | This kind of expression is always truthy. | ⏳ | [docs/2872/README.md](docs/2872/README.md) |
| 2873 | This kind of expression is always falsy. | ⏳ | [docs/2873/README.md](docs/2873/README.md) |
| 2874 | This JSX tag requires '{0}' to be in scope, but it could not be found. | ⏳ | [docs/2874/README.md](docs/2874/README.md) |
| 2875 | This JSX tag requires the module path '{0}' to exist, but none could be found. Make sure you have types for the appropriate package installed. | ⏳ | [docs/2875/README.md](docs/2875/README.md) |
| 2876 | This relative import path is unsafe to rewrite because it looks like a file name, but actually resolves to "{0}". | ⏳ | [docs/2876/README.md](docs/2876/README.md) |
| 2877 | This import uses a '{0}' extension to resolve to an input TypeScript file, but will not be rewritten during emit because it is not a relative path. | ⏳ | [docs/2877/README.md](docs/2877/README.md) |
| 2878 | This import path is unsafe to rewrite because it resolves to another project, and the relative path between the projects' output files is not the same as the relative path between its input files. | ⏳ | [docs/2878/README.md](docs/2878/README.md) |
| 2879 | Using JSX fragments requires fragment factory '{0}' to be in scope, but it could not be found. | ⏳ | [docs/2879/README.md](docs/2879/README.md) |
| 2880 | Import assertions have been replaced by import attributes. Use 'with' instead of 'assert'. | ⏳ | [docs/2880/README.md](docs/2880/README.md) |
| 2881 | This expression is never nullish. | ⏳ | [docs/2881/README.md](docs/2881/README.md) |
| 4000 | Import declaration '{0}' is using private name '{1}'. | ⏳ | [docs/4000/README.md](docs/4000/README.md) |
| 4002 | Type parameter '{0}' of exported class has or is using private name '{1}'. | ⏳ | [docs/4002/README.md](docs/4002/README.md) |
| 4004 | Type parameter '{0}' of exported interface has or is using private name '{1}'. | ⏳ | [docs/4004/README.md](docs/4004/README.md) |
| 4006 | Type parameter '{0}' of constructor signature from exported interface has or is using private name '{1}'. | ⏳ | [docs/4006/README.md](docs/4006/README.md) |
| 4008 | Type parameter '{0}' of call signature from exported interface has or is using private name '{1}'. | ⏳ | [docs/4008/README.md](docs/4008/README.md) |
| 4010 | Type parameter '{0}' of public static method from exported class has or is using private name '{1}'. | ⏳ | [docs/4010/README.md](docs/4010/README.md) |
| 4012 | Type parameter '{0}' of public method from exported class has or is using private name '{1}'. | ⏳ | [docs/4012/README.md](docs/4012/README.md) |
| 4014 | Type parameter '{0}' of method from exported interface has or is using private name '{1}'. | ⏳ | [docs/4014/README.md](docs/4014/README.md) |
| 4016 | Type parameter '{0}' of exported function has or is using private name '{1}'. | ⏳ | [docs/4016/README.md](docs/4016/README.md) |
| 4019 | Implements clause of exported class '{0}' has or is using private name '{1}'. | ⏳ | [docs/4019/README.md](docs/4019/README.md) |
| 4020 | 'extends' clause of exported class '{0}' has or is using private name '{1}'. | ⏳ | [docs/4020/README.md](docs/4020/README.md) |
| 4021 | 'extends' clause of exported class has or is using private name '{0}'. | ⏳ | [docs/4021/README.md](docs/4021/README.md) |
| 4022 | 'extends' clause of exported interface '{0}' has or is using private name '{1}'. | ⏳ | [docs/4022/README.md](docs/4022/README.md) |
| 4023 | Exported variable '{0}' has or is using name '{1}' from external module {2} but cannot be named. | ⏳ | [docs/4023/README.md](docs/4023/README.md) |
| 4024 | Exported variable '{0}' has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4024/README.md](docs/4024/README.md) |
| 4025 | Exported variable '{0}' has or is using private name '{1}'. | ⏳ | [docs/4025/README.md](docs/4025/README.md) |
| 4026 | Public static property '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named. | ⏳ | [docs/4026/README.md](docs/4026/README.md) |
| 4027 | Public static property '{0}' of exported class has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4027/README.md](docs/4027/README.md) |
| 4028 | Public static property '{0}' of exported class has or is using private name '{1}'. | ⏳ | [docs/4028/README.md](docs/4028/README.md) |
| 4029 | Public property '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named. | ⏳ | [docs/4029/README.md](docs/4029/README.md) |
| 4030 | Public property '{0}' of exported class has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4030/README.md](docs/4030/README.md) |
| 4031 | Public property '{0}' of exported class has or is using private name '{1}'. | ⏳ | [docs/4031/README.md](docs/4031/README.md) |
| 4032 | Property '{0}' of exported interface has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4032/README.md](docs/4032/README.md) |
| 4033 | Property '{0}' of exported interface has or is using private name '{1}'. | ⏳ | [docs/4033/README.md](docs/4033/README.md) |
| 4034 | Parameter type of public static setter '{0}' from exported class has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4034/README.md](docs/4034/README.md) |
| 4035 | Parameter type of public static setter '{0}' from exported class has or is using private name '{1}'. | ⏳ | [docs/4035/README.md](docs/4035/README.md) |
| 4036 | Parameter type of public setter '{0}' from exported class has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4036/README.md](docs/4036/README.md) |
| 4037 | Parameter type of public setter '{0}' from exported class has or is using private name '{1}'. | ⏳ | [docs/4037/README.md](docs/4037/README.md) |
| 4038 | Return type of public static getter '{0}' from exported class has or is using name '{1}' from external module {2} but cannot be named. | ⏳ | [docs/4038/README.md](docs/4038/README.md) |
| 4039 | Return type of public static getter '{0}' from exported class has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4039/README.md](docs/4039/README.md) |
| 4040 | Return type of public static getter '{0}' from exported class has or is using private name '{1}'. | ⏳ | [docs/4040/README.md](docs/4040/README.md) |
| 4041 | Return type of public getter '{0}' from exported class has or is using name '{1}' from external module {2} but cannot be named. | ⏳ | [docs/4041/README.md](docs/4041/README.md) |
| 4042 | Return type of public getter '{0}' from exported class has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4042/README.md](docs/4042/README.md) |
| 4043 | Return type of public getter '{0}' from exported class has or is using private name '{1}'. | ⏳ | [docs/4043/README.md](docs/4043/README.md) |
| 4044 | Return type of constructor signature from exported interface has or is using name '{0}' from private module '{1}'. | ⏳ | [docs/4044/README.md](docs/4044/README.md) |
| 4045 | Return type of constructor signature from exported interface has or is using private name '{0}'. | ⏳ | [docs/4045/README.md](docs/4045/README.md) |
| 4046 | Return type of call signature from exported interface has or is using name '{0}' from private module '{1}'. | ⏳ | [docs/4046/README.md](docs/4046/README.md) |
| 4047 | Return type of call signature from exported interface has or is using private name '{0}'. | ⏳ | [docs/4047/README.md](docs/4047/README.md) |
| 4048 | Return type of index signature from exported interface has or is using name '{0}' from private module '{1}'. | ⏳ | [docs/4048/README.md](docs/4048/README.md) |
| 4049 | Return type of index signature from exported interface has or is using private name '{0}'. | ⏳ | [docs/4049/README.md](docs/4049/README.md) |
| 4050 | Return type of public static method from exported class has or is using name '{0}' from external module {1} but cannot be named. | ⏳ | [docs/4050/README.md](docs/4050/README.md) |
| 4051 | Return type of public static method from exported class has or is using name '{0}' from private module '{1}'. | ⏳ | [docs/4051/README.md](docs/4051/README.md) |
| 4052 | Return type of public static method from exported class has or is using private name '{0}'. | ⏳ | [docs/4052/README.md](docs/4052/README.md) |
| 4053 | Return type of public method from exported class has or is using name '{0}' from external module {1} but cannot be named. | ⏳ | [docs/4053/README.md](docs/4053/README.md) |
| 4054 | Return type of public method from exported class has or is using name '{0}' from private module '{1}'. | ⏳ | [docs/4054/README.md](docs/4054/README.md) |
| 4055 | Return type of public method from exported class has or is using private name '{0}'. | ⏳ | [docs/4055/README.md](docs/4055/README.md) |
| 4056 | Return type of method from exported interface has or is using name '{0}' from private module '{1}'. | ⏳ | [docs/4056/README.md](docs/4056/README.md) |
| 4057 | Return type of method from exported interface has or is using private name '{0}'. | ⏳ | [docs/4057/README.md](docs/4057/README.md) |
| 4058 | Return type of exported function has or is using name '{0}' from external module {1} but cannot be named. | ⏳ | [docs/4058/README.md](docs/4058/README.md) |
| 4059 | Return type of exported function has or is using name '{0}' from private module '{1}'. | ⏳ | [docs/4059/README.md](docs/4059/README.md) |
| 4060 | Return type of exported function has or is using private name '{0}'. | ⏳ | [docs/4060/README.md](docs/4060/README.md) |
| 4061 | Parameter '{0}' of constructor from exported class has or is using name '{1}' from external module {2} but cannot be named. | ⏳ | [docs/4061/README.md](docs/4061/README.md) |
| 4062 | Parameter '{0}' of constructor from exported class has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4062/README.md](docs/4062/README.md) |
| 4063 | Parameter '{0}' of constructor from exported class has or is using private name '{1}'. | ⏳ | [docs/4063/README.md](docs/4063/README.md) |
| 4064 | Parameter '{0}' of constructor signature from exported interface has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4064/README.md](docs/4064/README.md) |
| 4065 | Parameter '{0}' of constructor signature from exported interface has or is using private name '{1}'. | ⏳ | [docs/4065/README.md](docs/4065/README.md) |
| 4066 | Parameter '{0}' of call signature from exported interface has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4066/README.md](docs/4066/README.md) |
| 4067 | Parameter '{0}' of call signature from exported interface has or is using private name '{1}'. | ⏳ | [docs/4067/README.md](docs/4067/README.md) |
| 4068 | Parameter '{0}' of public static method from exported class has or is using name '{1}' from external module {2} but cannot be named. | ⏳ | [docs/4068/README.md](docs/4068/README.md) |
| 4069 | Parameter '{0}' of public static method from exported class has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4069/README.md](docs/4069/README.md) |
| 4070 | Parameter '{0}' of public static method from exported class has or is using private name '{1}'. | ⏳ | [docs/4070/README.md](docs/4070/README.md) |
| 4071 | Parameter '{0}' of public method from exported class has or is using name '{1}' from external module {2} but cannot be named. | ⏳ | [docs/4071/README.md](docs/4071/README.md) |
| 4072 | Parameter '{0}' of public method from exported class has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4072/README.md](docs/4072/README.md) |
| 4073 | Parameter '{0}' of public method from exported class has or is using private name '{1}'. | ⏳ | [docs/4073/README.md](docs/4073/README.md) |
| 4074 | Parameter '{0}' of method from exported interface has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4074/README.md](docs/4074/README.md) |
| 4075 | Parameter '{0}' of method from exported interface has or is using private name '{1}'. | ⏳ | [docs/4075/README.md](docs/4075/README.md) |
| 4076 | Parameter '{0}' of exported function has or is using name '{1}' from external module {2} but cannot be named. | ⏳ | [docs/4076/README.md](docs/4076/README.md) |
| 4077 | Parameter '{0}' of exported function has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4077/README.md](docs/4077/README.md) |
| 4078 | Parameter '{0}' of exported function has or is using private name '{1}'. | ⏳ | [docs/4078/README.md](docs/4078/README.md) |
| 4081 | Exported type alias '{0}' has or is using private name '{1}'. | ⏳ | [docs/4081/README.md](docs/4081/README.md) |
| 4082 | Default export of the module has or is using private name '{0}'. | ⏳ | [docs/4082/README.md](docs/4082/README.md) |
| 4083 | Type parameter '{0}' of exported type alias has or is using private name '{1}'. | ⏳ | [docs/4083/README.md](docs/4083/README.md) |
| 4084 | Exported type alias '{0}' has or is using private name '{1}' from module {2}. | ⏳ | [docs/4084/README.md](docs/4084/README.md) |
| 4085 | Extends clause for inferred type '{0}' has or is using private name '{1}'. | ⏳ | [docs/4085/README.md](docs/4085/README.md) |
| 4091 | Parameter '{0}' of index signature from exported interface has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4091/README.md](docs/4091/README.md) |
| 4092 | Parameter '{0}' of index signature from exported interface has or is using private name '{1}'. | ⏳ | [docs/4092/README.md](docs/4092/README.md) |
| 4094 | Property '{0}' of exported anonymous class type may not be private or protected. | ⏳ | [docs/4094/README.md](docs/4094/README.md) |
| 4095 | Public static method '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named. | ⏳ | [docs/4095/README.md](docs/4095/README.md) |
| 4096 | Public static method '{0}' of exported class has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4096/README.md](docs/4096/README.md) |
| 4097 | Public static method '{0}' of exported class has or is using private name '{1}'. | ⏳ | [docs/4097/README.md](docs/4097/README.md) |
| 4098 | Public method '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named. | ⏳ | [docs/4098/README.md](docs/4098/README.md) |
| 4099 | Public method '{0}' of exported class has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4099/README.md](docs/4099/README.md) |
| 4100 | Public method '{0}' of exported class has or is using private name '{1}'. | ⏳ | [docs/4100/README.md](docs/4100/README.md) |
| 4101 | Method '{0}' of exported interface has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4101/README.md](docs/4101/README.md) |
| 4102 | Method '{0}' of exported interface has or is using private name '{1}'. | ⏳ | [docs/4102/README.md](docs/4102/README.md) |
| 4103 | Type parameter '{0}' of exported mapped object type is using private name '{1}'. | ⏳ | [docs/4103/README.md](docs/4103/README.md) |
| 4104 | The type '{0}' is 'readonly' and cannot be assigned to the mutable type '{1}'. | ⏳ | [docs/4104/README.md](docs/4104/README.md) |
| 4105 | Private or protected member '{0}' cannot be accessed on a type parameter. | ⏳ | [docs/4105/README.md](docs/4105/README.md) |
| 4106 | Parameter '{0}' of accessor has or is using private name '{1}'. | ⏳ | [docs/4106/README.md](docs/4106/README.md) |
| 4107 | Parameter '{0}' of accessor has or is using name '{1}' from private module '{2}'. | ⏳ | [docs/4107/README.md](docs/4107/README.md) |
| 4108 | Parameter '{0}' of accessor has or is using name '{1}' from external module '{2}' but cannot be named. | ⏳ | [docs/4108/README.md](docs/4108/README.md) |
| 4109 | Type arguments for '{0}' circularly reference themselves. | ⏳ | [docs/4109/README.md](docs/4109/README.md) |
| 4110 | Tuple type arguments circularly reference themselves. | ⏳ | [docs/4110/README.md](docs/4110/README.md) |
| 4111 | Property '{0}' comes from an index signature, so it must be accessed with ['{0}']. | ⏳ | [docs/4111/README.md](docs/4111/README.md) |
| 4112 | This member cannot have an 'override' modifier because its containing class '{0}' does not extend another class. | ⏳ | [docs/4112/README.md](docs/4112/README.md) |
| 4113 | This member cannot have an 'override' modifier because it is not declared in the base class '{0}'. | ⏳ | [docs/4113/README.md](docs/4113/README.md) |
| 4114 | This member must have an 'override' modifier because it overrides a member in the base class '{0}'. | ⏳ | [docs/4114/README.md](docs/4114/README.md) |
| 4115 | This parameter property must have an 'override' modifier because it overrides a member in base class '{0}'. | ⏳ | [docs/4115/README.md](docs/4115/README.md) |
| 4116 | This member must have an 'override' modifier because it overrides an abstract method that is declared in the base class '{0}'. | ⏳ | [docs/4116/README.md](docs/4116/README.md) |
| 4117 | This member cannot have an 'override' modifier because it is not declared in the base class '{0}'. Did you mean '{1}'? | ⏳ | [docs/4117/README.md](docs/4117/README.md) |
| 4118 | The type of this node cannot be serialized because its property '{0}' cannot be serialized. | ⏳ | [docs/4118/README.md](docs/4118/README.md) |
| 4119 | This member must have a JSDoc comment with an '@override' tag because it overrides a member in the base class '{0}'. | ⏳ | [docs/4119/README.md](docs/4119/README.md) |
| 4120 | This parameter property must have a JSDoc comment with an '@override' tag because it overrides a member in the base class '{0}'. | ⏳ | [docs/4120/README.md](docs/4120/README.md) |
| 4121 | This member cannot have a JSDoc comment with an '@override' tag because its containing class '{0}' does not extend another class. | ⏳ | [docs/4121/README.md](docs/4121/README.md) |
| 4122 | This member cannot have a JSDoc comment with an '@override' tag because it is not declared in the base class '{0}'. | ⏳ | [docs/4122/README.md](docs/4122/README.md) |
| 4123 | This member cannot have a JSDoc comment with an 'override' tag because it is not declared in the base class '{0}'. Did you mean '{1}'? | ⏳ | [docs/4123/README.md](docs/4123/README.md) |
| 4124 | Compiler option '{0}' of value '{1}' is unstable. Use nightly TypeScript to silence this error. Try updating with 'npm install -D typescript@next'. | ⏳ | [docs/4124/README.md](docs/4124/README.md) |
| 4125 | Each declaration of '{0}.{1}' differs in its value, where '{2}' was expected but '{3}' was given. | ⏳ | [docs/4125/README.md](docs/4125/README.md) |
| 4126 | One value of '{0}.{1}' is the string '{2}', and the other is assumed to be an unknown numeric value. | ⏳ | [docs/4126/README.md](docs/4126/README.md) |
| 4127 | This member cannot have an 'override' modifier because its name is dynamic. | ⏳ | [docs/4127/README.md](docs/4127/README.md) |
| 4128 | This member cannot have a JSDoc comment with an '@override' tag because its name is dynamic. | ⏳ | [docs/4128/README.md](docs/4128/README.md) |
| 5001 | The current host does not support the '{0}' option. | ⏳ | [docs/5001/README.md](docs/5001/README.md) |
| 5009 | Cannot find the common subdirectory path for the input files. | ⏳ | [docs/5009/README.md](docs/5009/README.md) |
| 5010 | File specification cannot end in a recursive directory wildcard ('**'): '{0}'. | ⏳ | [docs/5010/README.md](docs/5010/README.md) |
| 5012 | Cannot read file '{0}': {1}. | ⏳ | [docs/5012/README.md](docs/5012/README.md) |
| 5023 | Unknown compiler option '{0}'. | ⏳ | [docs/5023/README.md](docs/5023/README.md) |
| 5024 | Compiler option '{0}' requires a value of type {1}. | ⏳ | [docs/5024/README.md](docs/5024/README.md) |
| 5025 | Unknown compiler option '{0}'. Did you mean '{1}'? | ⏳ | [docs/5025/README.md](docs/5025/README.md) |
| 5033 | Could not write file '{0}': {1}. | ⏳ | [docs/5033/README.md](docs/5033/README.md) |
| 5042 | Option 'project' cannot be mixed with source files on a command line. | ⏳ | [docs/5042/README.md](docs/5042/README.md) |
| 5047 | Option 'isolatedModules' can only be used when either option '--module' is provided or option 'target' is 'ES2015' or higher. | ⏳ | [docs/5047/README.md](docs/5047/README.md) |
| 5051 | Option '{0} can only be used when either option '--inlineSourceMap' or option '--sourceMap' is provided. | ⏳ | [docs/5051/README.md](docs/5051/README.md) |
| 5052 | Option '{0}' cannot be specified without specifying option '{1}'. | ⏳ | [docs/5052/README.md](docs/5052/README.md) |
| 5053 | Option '{0}' cannot be specified with option '{1}'. | ⏳ | [docs/5053/README.md](docs/5053/README.md) |
| 5054 | A 'tsconfig.json' file is already defined at: '{0}'. | ⏳ | [docs/5054/README.md](docs/5054/README.md) |
| 5055 | Cannot write file '{0}' because it would overwrite input file. | ⏳ | [docs/5055/README.md](docs/5055/README.md) |
| 5056 | Cannot write file '{0}' because it would be overwritten by multiple input files. | ⏳ | [docs/5056/README.md](docs/5056/README.md) |
| 5057 | Cannot find a tsconfig.json file at the specified directory: '{0}'. | ⏳ | [docs/5057/README.md](docs/5057/README.md) |
| 5058 | The specified path does not exist: '{0}'. | ⏳ | [docs/5058/README.md](docs/5058/README.md) |
| 5059 | Invalid value for '--reactNamespace'. '{0}' is not a valid identifier. | ⏳ | [docs/5059/README.md](docs/5059/README.md) |
| 5061 | Pattern '{0}' can have at most one '*' character. | ⏳ | [docs/5061/README.md](docs/5061/README.md) |
| 5062 | Substitution '{0}' in pattern '{1}' can have at most one '*' character. | ⏳ | [docs/5062/README.md](docs/5062/README.md) |
| 5063 | Substitutions for pattern '{0}' should be an array. | ⏳ | [docs/5063/README.md](docs/5063/README.md) |
| 5064 | Substitution '{0}' for pattern '{1}' has incorrect type, expected 'string', got '{2}'. | ⏳ | [docs/5064/README.md](docs/5064/README.md) |
| 5065 | File specification cannot contain a parent directory ('..') that appears after a recursive directory wildcard ('**'): '{0}'. | ⏳ | [docs/5065/README.md](docs/5065/README.md) |
| 5066 | Substitutions for pattern '{0}' shouldn't be an empty array. | ⏳ | [docs/5066/README.md](docs/5066/README.md) |
| 5067 | Invalid value for 'jsxFactory'. '{0}' is not a valid identifier or qualified-name. | ⏳ | [docs/5067/README.md](docs/5067/README.md) |
| 5068 | Adding a tsconfig.json file will help organize projects that contain both TypeScript and JavaScript files. Learn more at https://aka.ms/tsconfig. | ⏳ | [docs/5068/README.md](docs/5068/README.md) |
| 5069 | Option '{0}' cannot be specified without specifying option '{1}' or option '{2}'. | ⏳ | [docs/5069/README.md](docs/5069/README.md) |
| 5070 | Option '--resolveJsonModule' cannot be specified when 'moduleResolution' is set to 'classic'. | ⏳ | [docs/5070/README.md](docs/5070/README.md) |
| 5071 | Option '--resolveJsonModule' cannot be specified when 'module' is set to 'none', 'system', or 'umd'. | ⏳ | [docs/5071/README.md](docs/5071/README.md) |
| 5072 | Unknown build option '{0}'. | ⏳ | [docs/5072/README.md](docs/5072/README.md) |
| 5073 | Build option '{0}' requires a value of type {1}. | ⏳ | [docs/5073/README.md](docs/5073/README.md) |
| 5074 | Option '--incremental' can only be specified using tsconfig, emitting to single file or when option '--tsBuildInfoFile' is specified. | ⏳ | [docs/5074/README.md](docs/5074/README.md) |
| 5075 | '{0}' is assignable to the constraint of type '{1}', but '{1}' could be instantiated with a different subtype of constraint '{2}'. | ⏳ | [docs/5075/README.md](docs/5075/README.md) |
| 5076 | '{0}' and '{1}' operations cannot be mixed without parentheses. | ⏳ | [docs/5076/README.md](docs/5076/README.md) |
| 5077 | Unknown build option '{0}'. Did you mean '{1}'? | ⏳ | [docs/5077/README.md](docs/5077/README.md) |
| 5078 | Unknown watch option '{0}'. | ⏳ | [docs/5078/README.md](docs/5078/README.md) |
| 5079 | Unknown watch option '{0}'. Did you mean '{1}'? | ⏳ | [docs/5079/README.md](docs/5079/README.md) |
| 5080 | Watch option '{0}' requires a value of type {1}. | ⏳ | [docs/5080/README.md](docs/5080/README.md) |
| 5081 | Cannot find a tsconfig.json file at the current directory: {0}. | ⏳ | [docs/5081/README.md](docs/5081/README.md) |
| 5082 | '{0}' could be instantiated with an arbitrary type which could be unrelated to '{1}'. | ⏳ | [docs/5082/README.md](docs/5082/README.md) |
| 5083 | Cannot read file '{0}'. | ⏳ | [docs/5083/README.md](docs/5083/README.md) |
| 5085 | A tuple member cannot be both optional and rest. | ⏳ | [docs/5085/README.md](docs/5085/README.md) |
| 5086 | A labeled tuple element is declared as optional with a question mark after the name and before the colon, rather than after the type. | ⏳ | [docs/5086/README.md](docs/5086/README.md) |
| 5087 | A labeled tuple element is declared as rest with a '...' before the name, rather than before the type. | ⏳ | [docs/5087/README.md](docs/5087/README.md) |
| 5088 | The inferred type of '{0}' references a type with a cyclic structure which cannot be trivially serialized. A type annotation is necessary. | ⏳ | [docs/5088/README.md](docs/5088/README.md) |
| 5089 | Option '{0}' cannot be specified when option 'jsx' is '{1}'. | ⏳ | [docs/5089/README.md](docs/5089/README.md) |
| 5090 | Non-relative paths are not allowed when 'baseUrl' is not set. Did you forget a leading './'? | ⏳ | [docs/5090/README.md](docs/5090/README.md) |
| 5091 | Option 'preserveConstEnums' cannot be disabled when '{0}' is enabled. | ⏳ | [docs/5091/README.md](docs/5091/README.md) |
| 5092 | The root value of a '{0}' file must be an object. | ⏳ | [docs/5092/README.md](docs/5092/README.md) |
| 5093 | Compiler option '--{0}' may only be used with '--build'. | ⏳ | [docs/5093/README.md](docs/5093/README.md) |
| 5094 | Compiler option '--{0}' may not be used with '--build'. | ⏳ | [docs/5094/README.md](docs/5094/README.md) |
| 5095 | Option '{0}' can only be used when 'module' is set to 'preserve', 'commonjs', or 'es2015' or later. | ⏳ | [docs/5095/README.md](docs/5095/README.md) |
| 5096 | Option 'allowImportingTsExtensions' can only be used when either 'noEmit' or 'emitDeclarationOnly' is set. | ⏳ | [docs/5096/README.md](docs/5096/README.md) |
| 5097 | An import path can only end with a '{0}' extension when 'allowImportingTsExtensions' is enabled. | ⏳ | [docs/5097/README.md](docs/5097/README.md) |
| 5098 | Option '{0}' can only be used when 'moduleResolution' is set to 'node16', 'nodenext', or 'bundler'. | ⏳ | [docs/5098/README.md](docs/5098/README.md) |
| 5101 | Option '{0}' is deprecated and will stop functioning in TypeScript {1}. Specify compilerOption '"ignoreDeprecations": "{2}"' to silence this error. | ⏳ | [docs/5101/README.md](docs/5101/README.md) |
| 5102 | Option '{0}' has been removed. Please remove it from your configuration. | ⏳ | [docs/5102/README.md](docs/5102/README.md) |
| 5103 | Invalid value for '--ignoreDeprecations'. | ⏳ | [docs/5103/README.md](docs/5103/README.md) |
| 5104 | Option '{0}' is redundant and cannot be specified with option '{1}'. | ⏳ | [docs/5104/README.md](docs/5104/README.md) |
| 5105 | Option 'verbatimModuleSyntax' cannot be used when 'module' is set to 'UMD', 'AMD', or 'System'. | ⏳ | [docs/5105/README.md](docs/5105/README.md) |
| 5107 | Option '{0}={1}' is deprecated and will stop functioning in TypeScript {2}. Specify compilerOption '"ignoreDeprecations": "{3}"' to silence this error. | ⏳ | [docs/5107/README.md](docs/5107/README.md) |
| 5108 | Option '{0}={1}' has been removed. Please remove it from your configuration. | ⏳ | [docs/5108/README.md](docs/5108/README.md) |
| 5109 | Option 'moduleResolution' must be set to '{0}' (or left unspecified) when option 'module' is set to '{1}'. | ⏳ | [docs/5109/README.md](docs/5109/README.md) |
| 5110 | Option 'module' must be set to '{0}' when option 'moduleResolution' is set to '{1}'. | ⏳ | [docs/5110/README.md](docs/5110/README.md) |
| 6044 | Compiler option '{0}' expects an argument. | ⏳ | [docs/6044/README.md](docs/6044/README.md) |
| 6045 | Unterminated quoted string in response file '{0}'. | ⏳ | [docs/6045/README.md](docs/6045/README.md) |
| 6046 | Argument for '{0}' option must be: {1}. | ⏳ | [docs/6046/README.md](docs/6046/README.md) |
| 6048 | Locale must be of the form <language> or <language>-<territory>. For example '{0}' or '{1}'. | ⏳ | [docs/6048/README.md](docs/6048/README.md) |
| 6050 | Unable to open file '{0}'. | ⏳ | [docs/6050/README.md](docs/6050/README.md) |
| 6051 | Corrupted locale file {0}. | ⏳ | [docs/6051/README.md](docs/6051/README.md) |
| 6053 | File '{0}' not found. | ⏳ | [docs/6053/README.md](docs/6053/README.md) |
| 6054 | File '{0}' has an unsupported extension. The only supported extensions are {1}. | ⏳ | [docs/6054/README.md](docs/6054/README.md) |
| 6059 | File '{0}' is not under 'rootDir' '{1}'. 'rootDir' is expected to contain all source files. | ⏳ | [docs/6059/README.md](docs/6059/README.md) |
| 6064 | Option '{0}' can only be specified in 'tsconfig.json' file or set to 'null' on command line. | ⏳ | [docs/6064/README.md](docs/6064/README.md) |
| 6082 | Only 'amd' and 'system' modules are supported alongside --{0}. | ⏳ | [docs/6082/README.md](docs/6082/README.md) |
| 6114 | Unknown option 'excludes'. Did you mean 'exclude'? | ⏳ | [docs/6114/README.md](docs/6114/README.md) |
| 6131 | Cannot compile modules using option '{0}' unless the '--module' flag is 'amd' or 'system'. | ⏳ | [docs/6131/README.md](docs/6131/README.md) |
| 6133 | '{0}' is declared but its value is never read. | ⏳ | [docs/6133/README.md](docs/6133/README.md) |
| 6137 | Cannot import type declaration files. Consider importing '{0}' instead of '{1}'. | ⏳ | [docs/6137/README.md](docs/6137/README.md) |
| 6138 | Property '{0}' is declared but its value is never read. | ⏳ | [docs/6138/README.md](docs/6138/README.md) |
| 6140 | Auto discovery for typings is enabled in project '{0}'. Running extra resolution pass for module '{1}' using cache location '{2}'. | ⏳ | [docs/6140/README.md](docs/6140/README.md) |
| 6142 | Module '{0}' was resolved to '{1}', but '--jsx' is not set. | ⏳ | [docs/6142/README.md](docs/6142/README.md) |
| 6188 | Numeric separators are not allowed here. | ⏳ | [docs/6188/README.md](docs/6188/README.md) |
| 6189 | Multiple consecutive numeric separators are not permitted. | ⏳ | [docs/6189/README.md](docs/6189/README.md) |
| 6192 | All imports in import declaration are unused. | ⏳ | [docs/6192/README.md](docs/6192/README.md) |
| 6196 | '{0}' is declared but never used. | ⏳ | [docs/6196/README.md](docs/6196/README.md) |
| 6198 | All destructured elements are unused. | ⏳ | [docs/6198/README.md](docs/6198/README.md) |
| 6199 | All variables are unused. | ⏳ | [docs/6199/README.md](docs/6199/README.md) |
| 6200 | Definitions of the following identifiers conflict with those in another file: {0} | ⏳ | [docs/6200/README.md](docs/6200/README.md) |
| 6202 | Project references may not form a circular graph. Cycle detected: {0} | ⏳ | [docs/6202/README.md](docs/6202/README.md) |
| 6205 | All type parameters are unused. | ⏳ | [docs/6205/README.md](docs/6205/README.md) |
| 6229 | Tag '{0}' expects at least '{1}' arguments, but the JSX factory '{2}' provides at most '{3}'. | ⏳ | [docs/6229/README.md](docs/6229/README.md) |
| 6230 | Option '{0}' can only be specified in 'tsconfig.json' file or set to 'false' or 'null' on command line. | ⏳ | [docs/6230/README.md](docs/6230/README.md) |
| 6231 | Could not resolve the path '{0}' with the extensions: {1}. | ⏳ | [docs/6231/README.md](docs/6231/README.md) |
| 6232 | Declaration augments declaration in another file. This cannot be serialized. | ⏳ | [docs/6232/README.md](docs/6232/README.md) |
| 6233 | This is the declaration being augmented. Consider moving the augmenting declaration into the same file. | ⏳ | [docs/6233/README.md](docs/6233/README.md) |
| 6234 | This expression is not callable because it is a 'get' accessor. Did you mean to use it without '()'? | ⏳ | [docs/6234/README.md](docs/6234/README.md) |
| 6236 | Arguments for the rest parameter '{0}' were not provided. | ⏳ | [docs/6236/README.md](docs/6236/README.md) |
| 6238 | Specify the module specifier to be used to import the 'jsx' and 'jsxs' factory functions from. eg, react | ⏳ | [docs/6238/README.md](docs/6238/README.md) |
| 6258 | '{0}' should be set inside the 'compilerOptions' object of the config json file | ⏳ | [docs/6258/README.md](docs/6258/README.md) |
| 6263 | Module '{0}' was resolved to '{1}', but '--allowArbitraryExtensions' is not set. | ⏳ | [docs/6263/README.md](docs/6263/README.md) |
| 6266 | Option '{0}' can only be specified on command line. | ⏳ | [docs/6266/README.md](docs/6266/README.md) |
| 6304 | Composite projects may not disable declaration emit. | ⏳ | [docs/6304/README.md](docs/6304/README.md) |
| 6305 | Output file '{0}' has not been built from source file '{1}'. | ⏳ | [docs/6305/README.md](docs/6305/README.md) |
| 6306 | Referenced project '{0}' must have setting "composite": true. | ⏳ | [docs/6306/README.md](docs/6306/README.md) |
| 6307 | File '{0}' is not listed within the file list of project '{1}'. Projects must list all files or use an 'include' pattern. | ⏳ | [docs/6307/README.md](docs/6307/README.md) |
| 6310 | Referenced project '{0}' may not disable emit. | ⏳ | [docs/6310/README.md](docs/6310/README.md) |
| 6369 | Option '--build' must be the first command line argument. | ⏳ | [docs/6369/README.md](docs/6369/README.md) |
| 6370 | Options '{0}' and '{1}' cannot be combined. | ⏳ | [docs/6370/README.md](docs/6370/README.md) |
| 6377 | Cannot write file '{0}' because it will overwrite '.tsbuildinfo' file generated by referenced project '{1}' | ⏳ | [docs/6377/README.md](docs/6377/README.md) |
| 6379 | Composite projects may not disable incremental compilation. | ⏳ | [docs/6379/README.md](docs/6379/README.md) |
| 6504 | File '{0}' is a JavaScript file. Did you mean to enable the 'allowJs' option? | ⏳ | [docs/6504/README.md](docs/6504/README.md) |
| 6807 | This operation can be simplified. This shift is identical to `{0} {1} {2}`. | ⏳ | [docs/6807/README.md](docs/6807/README.md) |
| 6931 | List of file name suffixes to search when resolving a module. | ⏳ | [docs/6931/README.md](docs/6931/README.md) |
| 7005 | Variable '{0}' implicitly has an '{1}' type. | ⏳ | [docs/7005/README.md](docs/7005/README.md) |
| 7006 | Parameter '{0}' implicitly has an '{1}' type. | ⏳ | [docs/7006/README.md](docs/7006/README.md) |
| 7008 | Member '{0}' implicitly has an '{1}' type. | ⏳ | [docs/7008/README.md](docs/7008/README.md) |
| 7009 | 'new' expression, whose target lacks a construct signature, implicitly has an 'any' type. | ⏳ | [docs/7009/README.md](docs/7009/README.md) |
| 7010 | '{0}', which lacks return-type annotation, implicitly has an '{1}' return type. | ⏳ | [docs/7010/README.md](docs/7010/README.md) |
| 7011 | Function expression, which lacks return-type annotation, implicitly has an '{0}' return type. | ⏳ | [docs/7011/README.md](docs/7011/README.md) |
| 7012 | This overload implicitly returns the type '{0}' because it lacks a return type annotation. | ⏳ | [docs/7012/README.md](docs/7012/README.md) |
| 7013 | Construct signature, which lacks return-type annotation, implicitly has an 'any' return type. | ⏳ | [docs/7013/README.md](docs/7013/README.md) |
| 7014 | Function type, which lacks return-type annotation, implicitly has an '{0}' return type. | ⏳ | [docs/7014/README.md](docs/7014/README.md) |
| 7015 | Element implicitly has an 'any' type because index expression is not of type 'number'. | ⏳ | [docs/7015/README.md](docs/7015/README.md) |
| 7016 | Could not find a declaration file for module '{0}'. '{1}' implicitly has an 'any' type. | ⏳ | [docs/7016/README.md](docs/7016/README.md) |
| 7017 | Element implicitly has an 'any' type because type '{0}' has no index signature. | ⏳ | [docs/7017/README.md](docs/7017/README.md) |
| 7018 | Object literal's property '{0}' implicitly has an '{1}' type. | ⏳ | [docs/7018/README.md](docs/7018/README.md) |
| 7019 | Rest parameter '{0}' implicitly has an 'any[]' type. | ⏳ | [docs/7019/README.md](docs/7019/README.md) |
| 7020 | Call signature, which lacks return-type annotation, implicitly has an 'any' return type. | ⏳ | [docs/7020/README.md](docs/7020/README.md) |
| 7022 | '{0}' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer. | ⏳ | [docs/7022/README.md](docs/7022/README.md) |
| 7023 | '{0}' implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions. | ⏳ | [docs/7023/README.md](docs/7023/README.md) |
| 7024 | Function implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions. | ⏳ | [docs/7024/README.md](docs/7024/README.md) |
| 7025 | Generator implicitly has yield type '{0}'. Consider supplying a return type annotation. | ⏳ | [docs/7025/README.md](docs/7025/README.md) |
| 7026 | JSX element implicitly has type 'any' because no interface 'JSX.{0}' exists. | ⏳ | [docs/7026/README.md](docs/7026/README.md) |
| 7027 | Unreachable code detected. | ⏳ | [docs/7027/README.md](docs/7027/README.md) |
| 7028 | Unused label. | ⏳ | [docs/7028/README.md](docs/7028/README.md) |
| 7029 | Fallthrough case in switch. | ⏳ | [docs/7029/README.md](docs/7029/README.md) |
| 7030 | Not all code paths return a value. | ⏳ | [docs/7030/README.md](docs/7030/README.md) |
| 7031 | Binding element '{0}' implicitly has an '{1}' type. | ⏳ | [docs/7031/README.md](docs/7031/README.md) |
| 7032 | Property '{0}' implicitly has type 'any', because its set accessor lacks a parameter type annotation. | ⏳ | [docs/7032/README.md](docs/7032/README.md) |
| 7033 | Property '{0}' implicitly has type 'any', because its get accessor lacks a return type annotation. | ⏳ | [docs/7033/README.md](docs/7033/README.md) |
| 7034 | Variable '{0}' implicitly has type '{1}' in some locations where its type cannot be determined. | ⏳ | [docs/7034/README.md](docs/7034/README.md) |
| 7035 | Try `npm i --save-dev @types/{1}` if it exists or add a new declaration (.d.ts) file containing `declare module '{0}';` | ⏳ | [docs/7035/README.md](docs/7035/README.md) |
| 7036 | Dynamic import's specifier must be of type 'string', but here has type '{0}'. | ⏳ | [docs/7036/README.md](docs/7036/README.md) |
| 7039 | Mapped object type implicitly has an 'any' template type. | ⏳ | [docs/7039/README.md](docs/7039/README.md) |
| 7040 | If the '{0}' package actually exposes this module, consider sending a pull request to amend 'https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/{1}' | ⏳ | [docs/7040/README.md](docs/7040/README.md) |
| 7041 | The containing arrow function captures the global value of 'this'. | ⏳ | [docs/7041/README.md](docs/7041/README.md) |
| 7042 | Module '{0}' was resolved to '{1}', but '--resolveJsonModule' is not used. | ⏳ | [docs/7042/README.md](docs/7042/README.md) |
| 7051 | Parameter has a name but no type. Did you mean '{0}: {1}'? | ⏳ | [docs/7051/README.md](docs/7051/README.md) |
| 7052 | Element implicitly has an 'any' type because type '{0}' has no index signature. Did you mean to call '{1}'? | ⏳ | [docs/7052/README.md](docs/7052/README.md) |
| 7053 | Element implicitly has an 'any' type because expression of type '{0}' can't be used to index type '{1}'. | ⏳ | [docs/7053/README.md](docs/7053/README.md) |
| 7054 | No index signature with a parameter of type '{0}' was found on type '{1}'. | ⏳ | [docs/7054/README.md](docs/7054/README.md) |
| 7055 | '{0}', which lacks return-type annotation, implicitly has an '{1}' yield type. | ⏳ | [docs/7055/README.md](docs/7055/README.md) |
| 7056 | The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed. | ⏳ | [docs/7056/README.md](docs/7056/README.md) |
| 7057 | 'yield' expression implicitly results in an 'any' type because its containing generator lacks a return-type annotation. | ⏳ | [docs/7057/README.md](docs/7057/README.md) |
| 7058 | If the '{0}' package actually exposes this module, try adding a new declaration (.d.ts) file containing `declare module '{1}';` | ⏳ | [docs/7058/README.md](docs/7058/README.md) |
| 7059 | This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead. | ⏳ | [docs/7059/README.md](docs/7059/README.md) |
| 7060 | This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma or explicit constraint. | ⏳ | [docs/7060/README.md](docs/7060/README.md) |
| 7061 | A mapped type may not declare properties or methods. | ⏳ | [docs/7061/README.md](docs/7061/README.md) |
| 8000 | You cannot rename this element. | ⏳ | [docs/8000/README.md](docs/8000/README.md) |
| 8001 | You cannot rename elements that are defined in the standard TypeScript library. | ⏳ | [docs/8001/README.md](docs/8001/README.md) |
| 8002 | 'import ... =' can only be used in TypeScript files. | ⏳ | [docs/8002/README.md](docs/8002/README.md) |
| 8003 | 'export =' can only be used in TypeScript files. | ⏳ | [docs/8003/README.md](docs/8003/README.md) |
| 8004 | Type parameter declarations can only be used in TypeScript files. | ⏳ | [docs/8004/README.md](docs/8004/README.md) |
| 8005 | 'implements' clauses can only be used in TypeScript files. | ⏳ | [docs/8005/README.md](docs/8005/README.md) |
| 8006 | '{0}' declarations can only be used in TypeScript files. | ⏳ | [docs/8006/README.md](docs/8006/README.md) |
| 8008 | Type aliases can only be used in TypeScript files. | ⏳ | [docs/8008/README.md](docs/8008/README.md) |
| 8009 | The '{0}' modifier can only be used in TypeScript files. | ⏳ | [docs/8009/README.md](docs/8009/README.md) |
| 8010 | Type annotations can only be used in TypeScript files. | ⏳ | [docs/8010/README.md](docs/8010/README.md) |
| 8011 | Type arguments can only be used in TypeScript files. | ⏳ | [docs/8011/README.md](docs/8011/README.md) |
| 8012 | Parameter modifiers can only be used in TypeScript files. | ⏳ | [docs/8012/README.md](docs/8012/README.md) |
| 8013 | Non-null assertions can only be used in TypeScript files. | ⏳ | [docs/8013/README.md](docs/8013/README.md) |
| 8016 | Type assertion expressions can only be used in TypeScript files. | ⏳ | [docs/8016/README.md](docs/8016/README.md) |
| 8017 | Signature declarations can only be used in TypeScript files. | ⏳ | [docs/8017/README.md](docs/8017/README.md) |
| 8020 | JSDoc types can only be used inside documentation comments. | ⏳ | [docs/8020/README.md](docs/8020/README.md) |
| 8021 | JSDoc '@typedef' tag should either have a type annotation or be followed by '@property' or '@member' tags. | ⏳ | [docs/8021/README.md](docs/8021/README.md) |
| 8022 | JSDoc '@{0}' is not attached to a class. | ⏳ | [docs/8022/README.md](docs/8022/README.md) |
| 8023 | JSDoc '@{0} {1}' does not match the 'extends {2}' clause. | ⏳ | [docs/8023/README.md](docs/8023/README.md) |
| 8024 | JSDoc '@param' tag has name '{0}', but there is no parameter with that name. | ⏳ | [docs/8024/README.md](docs/8024/README.md) |
| 8025 | Class declarations cannot have more than one '@augments' or '@extends' tag. | ⏳ | [docs/8025/README.md](docs/8025/README.md) |
| 8026 | Expected {0} type arguments; provide these with an '@extends' tag. | ⏳ | [docs/8026/README.md](docs/8026/README.md) |
| 8027 | Expected {0}-{1} type arguments; provide these with an '@extends' tag. | ⏳ | [docs/8027/README.md](docs/8027/README.md) |
| 8028 | JSDoc '...' may only appear in the last parameter of a signature. | ⏳ | [docs/8028/README.md](docs/8028/README.md) |
| 8029 | JSDoc '@param' tag has name '{0}', but there is no parameter with that name. It would match 'arguments' if it had an array type. | ⏳ | [docs/8029/README.md](docs/8029/README.md) |
| 8030 | The type of a function declaration must match the function's signature. | ⏳ | [docs/8030/README.md](docs/8030/README.md) |
| 8031 | You cannot rename a module via a global import. | ⏳ | [docs/8031/README.md](docs/8031/README.md) |
| 8032 | Qualified name '{0}' is not allowed without a leading '@param {object} {1}'. | ⏳ | [docs/8032/README.md](docs/8032/README.md) |
| 8033 | A JSDoc '@typedef' comment may not contain multiple '@type' tags. | ⏳ | [docs/8033/README.md](docs/8033/README.md) |
| 8034 | The tag was first specified here. | ⏳ | [docs/8034/README.md](docs/8034/README.md) |
| 8035 | You cannot rename elements that are defined in a 'node_modules' folder. | ⏳ | [docs/8035/README.md](docs/8035/README.md) |
| 8036 | You cannot rename elements that are defined in another 'node_modules' folder. | ⏳ | [docs/8036/README.md](docs/8036/README.md) |
| 8037 | Type satisfaction expressions can only be used in TypeScript files. | ⏳ | [docs/8037/README.md](docs/8037/README.md) |
| 8038 | Decorators may not appear after 'export' or 'export default' if they also appear before 'export'. | ⏳ | [docs/8038/README.md](docs/8038/README.md) |
| 8039 | A JSDoc '@template' tag may not follow a '@typedef', '@callback', or '@overload' tag | ⏳ | [docs/8039/README.md](docs/8039/README.md) |
| 9005 | Declaration emit for this file requires using private name '{0}'. An explicit type annotation may unblock declaration emit. | ⏳ | [docs/9005/README.md](docs/9005/README.md) |
| 9006 | Declaration emit for this file requires using private name '{0}' from module '{1}'. An explicit type annotation may unblock declaration emit. | ⏳ | [docs/9006/README.md](docs/9006/README.md) |
| 9007 | Function must have an explicit return type annotation with --isolatedDeclarations. | ⏳ | [docs/9007/README.md](docs/9007/README.md) |
| 9008 | Method must have an explicit return type annotation with --isolatedDeclarations. | ⏳ | [docs/9008/README.md](docs/9008/README.md) |
| 9009 | At least one accessor must have an explicit type annotation with --isolatedDeclarations. | ⏳ | [docs/9009/README.md](docs/9009/README.md) |
| 9010 | Variable must have an explicit type annotation with --isolatedDeclarations. | ⏳ | [docs/9010/README.md](docs/9010/README.md) |
| 9011 | Parameter must have an explicit type annotation with --isolatedDeclarations. | ⏳ | [docs/9011/README.md](docs/9011/README.md) |
| 9012 | Property must have an explicit type annotation with --isolatedDeclarations. | ⏳ | [docs/9012/README.md](docs/9012/README.md) |
| 9013 | Expression type can't be inferred with --isolatedDeclarations. | ⏳ | [docs/9013/README.md](docs/9013/README.md) |
| 9014 | Computed properties must be number or string literals, variables or dotted expressions with --isolatedDeclarations. | ⏳ | [docs/9014/README.md](docs/9014/README.md) |
| 9015 | Objects that contain spread assignments can't be inferred with --isolatedDeclarations. | ⏳ | [docs/9015/README.md](docs/9015/README.md) |
| 9016 | Objects that contain shorthand properties can't be inferred with --isolatedDeclarations. | ⏳ | [docs/9016/README.md](docs/9016/README.md) |
| 9017 | Only const arrays can be inferred with --isolatedDeclarations. | ⏳ | [docs/9017/README.md](docs/9017/README.md) |
| 9018 | Arrays with spread elements can't inferred with --isolatedDeclarations. | ⏳ | [docs/9018/README.md](docs/9018/README.md) |
| 9019 | Binding elements can't be exported directly with --isolatedDeclarations. | ⏳ | [docs/9019/README.md](docs/9019/README.md) |
| 9020 | Enum member initializers must be computable without references to external symbols with --isolatedDeclarations. | ⏳ | [docs/9020/README.md](docs/9020/README.md) |
| 9021 | Extends clause can't contain an expression with --isolatedDeclarations. | ⏳ | [docs/9021/README.md](docs/9021/README.md) |
| 9022 | Inference from class expressions is not supported with --isolatedDeclarations. | ⏳ | [docs/9022/README.md](docs/9022/README.md) |
| 9023 | Assigning properties to functions without declaring them is not supported with --isolatedDeclarations. Add an explicit declaration for the properties assigned to this function. | ⏳ | [docs/9023/README.md](docs/9023/README.md) |
| 9025 | Declaration emit for this parameter requires implicitly adding undefined to its type. This is not supported with --isolatedDeclarations. | ⏳ | [docs/9025/README.md](docs/9025/README.md) |
| 9026 | Declaration emit for this file requires preserving this import for augmentations. This is not supported with --isolatedDeclarations. | ⏳ | [docs/9026/README.md](docs/9026/README.md) |
| 9027 | Add a type annotation to the variable {0}. | ⏳ | [docs/9027/README.md](docs/9027/README.md) |
| 9028 | Add a type annotation to the parameter {0}. | ⏳ | [docs/9028/README.md](docs/9028/README.md) |
| 9029 | Add a type annotation to the property {0}. | ⏳ | [docs/9029/README.md](docs/9029/README.md) |
| 9030 | Add a return type to the function expression. | ⏳ | [docs/9030/README.md](docs/9030/README.md) |
| 9031 | Add a return type to the function declaration. | ⏳ | [docs/9031/README.md](docs/9031/README.md) |
| 9032 | Add a return type to the get accessor declaration. | ⏳ | [docs/9032/README.md](docs/9032/README.md) |
| 9033 | Add a type to parameter of the set accessor declaration. | ⏳ | [docs/9033/README.md](docs/9033/README.md) |
| 9034 | Add a return type to the method | ⏳ | [docs/9034/README.md](docs/9034/README.md) |
| 9035 | Add satisfies and a type assertion to this expression (satisfies T as T) to make the type explicit. | ⏳ | [docs/9035/README.md](docs/9035/README.md) |
| 9036 | Move the expression in default export to a variable and add a type annotation to it. | ⏳ | [docs/9036/README.md](docs/9036/README.md) |
| 9037 | Default exports can't be inferred with --isolatedDeclarations. | ⏳ | [docs/9037/README.md](docs/9037/README.md) |
| 9038 | Computed property names on class or object literals cannot be inferred with --isolatedDeclarations. | ⏳ | [docs/9038/README.md](docs/9038/README.md) |
| 9039 | Type containing private name '{0}' can't be used with --isolatedDeclarations. | ⏳ | [docs/9039/README.md](docs/9039/README.md) |
| 17000 | JSX attributes must only be assigned a non-empty 'expression'. | ⏳ | [docs/17000/README.md](docs/17000/README.md) |
| 17001 | JSX elements cannot have multiple attributes with the same name. | ⏳ | [docs/17001/README.md](docs/17001/README.md) |
| 17002 | Expected corresponding JSX closing tag for '{0}'. | ⏳ | [docs/17002/README.md](docs/17002/README.md) |
| 17004 | Cannot use JSX unless the '--jsx' flag is provided. | ⏳ | [docs/17004/README.md](docs/17004/README.md) |
| 17005 | A constructor cannot contain a 'super' call when its class extends 'null'. | ⏳ | [docs/17005/README.md](docs/17005/README.md) |
| 17006 | An unary expression with the '{0}' operator is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses. | ⏳ | [docs/17006/README.md](docs/17006/README.md) |
| 17007 | A type assertion expression is not allowed in the left-hand side of an exponentiation expression. Consider enclosing the expression in parentheses. | ⏳ | [docs/17007/README.md](docs/17007/README.md) |
| 17008 | JSX element '{0}' has no corresponding closing tag. | ⏳ | [docs/17008/README.md](docs/17008/README.md) |
| 17009 | 'super' must be called before accessing 'this' in the constructor of a derived class. | ⏳ | [docs/17009/README.md](docs/17009/README.md) |
| 17010 | Unknown type acquisition option '{0}'. | ⏳ | [docs/17010/README.md](docs/17010/README.md) |
| 17011 | 'super' must be called before accessing a property of 'super' in the constructor of a derived class. | ⏳ | [docs/17011/README.md](docs/17011/README.md) |
| 17012 | '{0}' is not a valid meta-property for keyword '{1}'. Did you mean '{2}'? | ⏳ | [docs/17012/README.md](docs/17012/README.md) |
| 17013 | Meta-property '{0}' is only allowed in the body of a function declaration, function expression, or constructor. | ⏳ | [docs/17013/README.md](docs/17013/README.md) |
| 17014 | JSX fragment has no corresponding closing tag. | ⏳ | [docs/17014/README.md](docs/17014/README.md) |
| 17015 | Expected corresponding closing tag for JSX fragment. | ⏳ | [docs/17015/README.md](docs/17015/README.md) |
| 17016 | The 'jsxFragmentFactory' compiler option must be provided to use JSX fragments with the 'jsxFactory' compiler option. | ⏳ | [docs/17016/README.md](docs/17016/README.md) |
| 17017 | An @jsxFrag pragma is required when using an @jsx pragma with JSX fragments. | ⏳ | [docs/17017/README.md](docs/17017/README.md) |
| 17018 | Unknown type acquisition option '{0}'. Did you mean '{1}'? | ⏳ | [docs/17018/README.md](docs/17018/README.md) |
| 17019 | '{0}' at the end of a type is not valid TypeScript syntax. Did you mean to write '{1}'? | ⏳ | [docs/17019/README.md](docs/17019/README.md) |
| 17020 | '{0}' at the start of a type is not valid TypeScript syntax. Did you mean to write '{1}'? | ⏳ | [docs/17020/README.md](docs/17020/README.md) |
| 17021 | Unicode escape sequence cannot appear here. | ⏳ | [docs/17021/README.md](docs/17021/README.md) |
| 18000 | Circularity detected while resolving configuration: {0} | ⏳ | [docs/18000/README.md](docs/18000/README.md) |
| 18002 | The 'files' list in config file '{0}' is empty. | ⏳ | [docs/18002/README.md](docs/18002/README.md) |
| 18003 | No inputs were found in config file '{0}'. Specified 'include' paths were '{1}' and 'exclude' paths were '{2}'. | ⏳ | [docs/18003/README.md](docs/18003/README.md) |
| 18004 | No value exists in scope for the shorthand property '{0}'. Either declare one or provide an initializer. | ⏳ | [docs/18004/README.md](docs/18004/README.md) |
| 18006 | Classes may not have a field named 'constructor'. | ⏳ | [docs/18006/README.md](docs/18006/README.md) |
| 18007 | JSX expressions may not use the comma operator. Did you mean to write an array? | ⏳ | [docs/18007/README.md](docs/18007/README.md) |
| 18009 | Private identifiers cannot be used as parameters. | ⏳ | [docs/18009/README.md](docs/18009/README.md) |
| 18010 | An accessibility modifier cannot be used with a private identifier. | ⏳ | [docs/18010/README.md](docs/18010/README.md) |
| 18011 | The operand of a 'delete' operator cannot be a private identifier. | ⏳ | [docs/18011/README.md](docs/18011/README.md) |
| 18012 | '#constructor' is a reserved word. | ⏳ | [docs/18012/README.md](docs/18012/README.md) |
| 18013 | Property '{0}' is not accessible outside class '{1}' because it has a private identifier. | ⏳ | [docs/18013/README.md](docs/18013/README.md) |
| 18014 | The property '{0}' cannot be accessed on type '{1}' within this class because it is shadowed by another private identifier with the same spelling. | ⏳ | [docs/18014/README.md](docs/18014/README.md) |
| 18015 | Property '{0}' in type '{1}' refers to a different member that cannot be accessed from within type '{2}'. | ⏳ | [docs/18015/README.md](docs/18015/README.md) |
| 18016 | Private identifiers are not allowed outside class bodies. | ⏳ | [docs/18016/README.md](docs/18016/README.md) |
| 18017 | The shadowing declaration of '{0}' is defined here | ⏳ | [docs/18017/README.md](docs/18017/README.md) |
| 18018 | The declaration of '{0}' that you probably intended to use is defined here | ⏳ | [docs/18018/README.md](docs/18018/README.md) |
| 18019 | '{0}' modifier cannot be used with a private identifier. | ⏳ | [docs/18019/README.md](docs/18019/README.md) |
| 18024 | An enum member cannot be named with a private identifier. | ⏳ | [docs/18024/README.md](docs/18024/README.md) |
| 18026 | '#!' can only be used at the start of a file. | ⏳ | [docs/18026/README.md](docs/18026/README.md) |
| 18027 | Compiler reserves name '{0}' when emitting private identifier downlevel. | ⏳ | [docs/18027/README.md](docs/18027/README.md) |
| 18028 | Private identifiers are only available when targeting ECMAScript 2015 and higher. | ⏳ | [docs/18028/README.md](docs/18028/README.md) |
| 18029 | Private identifiers are not allowed in variable declarations. | ⏳ | [docs/18029/README.md](docs/18029/README.md) |
| 18030 | An optional chain cannot contain private identifiers. | ⏳ | [docs/18030/README.md](docs/18030/README.md) |
| 18031 | The intersection '{0}' was reduced to 'never' because property '{1}' has conflicting types in some constituents. | ⏳ | [docs/18031/README.md](docs/18031/README.md) |
| 18032 | The intersection '{0}' was reduced to 'never' because property '{1}' exists in multiple constituents and is private in some. | ⏳ | [docs/18032/README.md](docs/18032/README.md) |
| 18033 | Type '{0}' is not assignable to type '{1}' as required for computed enum member values. | ⏳ | [docs/18033/README.md](docs/18033/README.md) |
| 18035 | Invalid value for 'jsxFragmentFactory'. '{0}' is not a valid identifier or qualified-name. | ⏳ | [docs/18035/README.md](docs/18035/README.md) |
| 18036 | Class decorators can't be used with static private identifier. Consider removing the experimental decorator. | ⏳ | [docs/18036/README.md](docs/18036/README.md) |
| 18037 | 'await' expression cannot be used inside a class static block. | ⏳ | [docs/18037/README.md](docs/18037/README.md) |
| 18038 | 'for await' loops cannot be used inside a class static block. | ⏳ | [docs/18038/README.md](docs/18038/README.md) |
| 18039 | Invalid use of '{0}'. It cannot be used inside a class static block. | ⏳ | [docs/18039/README.md](docs/18039/README.md) |
| 18041 | A 'return' statement cannot be used inside a class static block. | ⏳ | [docs/18041/README.md](docs/18041/README.md) |
| 18042 | '{0}' is a type and cannot be imported in JavaScript files. Use '{1}' in a JSDoc type annotation. | ⏳ | [docs/18042/README.md](docs/18042/README.md) |
| 18043 | Types cannot appear in export declarations in JavaScript files. | ⏳ | [docs/18043/README.md](docs/18043/README.md) |
| 18045 | Properties with the 'accessor' modifier are only available when targeting ECMAScript 2015 and higher. | ⏳ | [docs/18045/README.md](docs/18045/README.md) |
| 18046 | '{0}' is of type 'unknown'. | ⏳ | [docs/18046/README.md](docs/18046/README.md) |
| 18047 | '{0}' is possibly 'null'. | ⏳ | [docs/18047/README.md](docs/18047/README.md) |
| 18048 | '{0}' is possibly 'undefined'. | ⏳ | [docs/18048/README.md](docs/18048/README.md) |
| 18049 | '{0}' is possibly 'null' or 'undefined'. | ⏳ | [docs/18049/README.md](docs/18049/README.md) |
| 18050 | The value '{0}' cannot be used here. | ⏳ | [docs/18050/README.md](docs/18050/README.md) |
| 18051 | Compiler option '{0}' cannot be given an empty string. | ⏳ | [docs/18051/README.md](docs/18051/README.md) |
| 18053 | Its type '{0}' is not a valid JSX element type. | ⏳ | [docs/18053/README.md](docs/18053/README.md) |
| 18054 | 'await using' statements cannot be used inside a class static block. | ⏳ | [docs/18054/README.md](docs/18054/README.md) |
| 18055 | '{0}' has a string type, but must have syntactically recognizable string syntax when 'isolatedModules' is enabled. | ⏳ | [docs/18055/README.md](docs/18055/README.md) |
| 18056 | Enum member following a non-literal numeric member must have an initializer when 'isolatedModules' is enabled. | ⏳ | [docs/18056/README.md](docs/18056/README.md) |
| 18057 | String literal import and export names are not supported when the '--module' flag is set to 'es2015' or 'es2020'. | ⏳ | [docs/18057/README.md](docs/18057/README.md) |
| 18058 | Default imports are not allowed in a deferred import. | ⏳ | [docs/18058/README.md](docs/18058/README.md) |
| 18059 | Named imports are not allowed in a deferred import. | ⏳ | [docs/18059/README.md](docs/18059/README.md) |
| 18060 | Deferred imports are only supported when the '--module' flag is set to 'esnext' or 'preserve'. | ⏳ | [docs/18060/README.md](docs/18060/README.md) |
| 18061 | '{0}' is not a valid meta-property for keyword 'import'. Did you mean 'meta' or 'defer'? | ⏳ | [docs/18061/README.md](docs/18061/README.md) |
