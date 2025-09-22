import helper from '../../src/core/index'
const result = helper.parse(`docs/18048/index.ts:6:15 - error TS18048: 'value' is possibly 'undefined'.

6   console.log(value.length)`)
console.log(result)
