import helper from '../../src/core/index'
const result = helper.parse(`docs/1005/index.ts:6:11 - error TS1005: ',' expected.

6 let count number = 5`)
console.log(result)