import helper from '../../src/core/index'
const result = helper.parse(`docs/1030/index.ts:2:12 - error TS1030: 'readonly' modifier already seen.

2   readonly readonly property = 'test'`)
console.log(result)
