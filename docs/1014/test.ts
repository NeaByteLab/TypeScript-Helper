import helper from '../../src/core/index'
const result = helper.parse(`docs/1014/index.ts:2:35 - error TS1014: A rest parameter must be last in a parameter list.

2 function greet(firstName: string, ...names: string[], lastName: string) {`)
console.log(result)