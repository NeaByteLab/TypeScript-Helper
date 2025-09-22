import helper from '../../src/core/index'
const result = helper.parse(`docs/18059/index.ts:5:8 - error TS18059: Named imports are not allowed in a deferred import.

5 import defer { myFunction, myVariable } from './module'`)
console.log(result)
