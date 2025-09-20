import helper from '../../src/core/index'
const result = helper.parse(`docs/1011/index.ts:3:19 - error TS1011: An element access expression should take an argument.

3 const value = arr[]`)
console.log(result)