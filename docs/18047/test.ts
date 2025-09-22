import helper from '../../src/core/index'
const result = helper.parse(`docs/18047/index.ts:2:15 - error TS18047: 'value' is possibly 'null'.

2   console.log(value.length)`)
console.log(result)
