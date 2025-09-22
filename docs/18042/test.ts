import helper from '../../src/core/index'
const result = helper.parse(`docs/18042/index.js:1:10 - error TS18042: 'MyType' is a type and cannot be imported in JavaScript files. Use 'import("./types").MyType' in a JSDoc type annotation.

1 import { MyType } from './types'`)
console.log(result)
