import helper from '../../src/core/index'
const result = helper.parse(`docs/18041/index.ts:3:5 - error TS18041: A 'return' statement cannot be used inside a class static block.

3     return "This will cause TS18041"`)
console.log(result)