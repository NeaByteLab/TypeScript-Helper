import helper from '../../src/core/index'
const result = helper.parse(`docs/1042/index.ts:2:3 - error TS1042: 'async' modifier cannot be used here.

2   async property = 'value'`)
console.log(result)
