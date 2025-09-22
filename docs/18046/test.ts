import helper from '../../src/core/index'
const result = helper.parse(`docs/18046/index.ts:2:15 - error TS18046: 'value' is of type 'unknown'.

2   console.log(value.length)`)
console.log(result)
