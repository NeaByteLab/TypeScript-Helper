import helper from '../../src/core/index'
const result = helper.parse(`docs/1021/index.ts:2:3 - error TS1021: An index signature must have a type annotation.

2   [key: string]`)
console.log(result)
