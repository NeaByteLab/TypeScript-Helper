import helper from '../../src/core/index'
const result = helper.parse(`docs/18049/index.ts:2:15 - error TS18049: 'value' is possibly 'null' or 'undefined'.

2   console.log(value.length)`)
console.log(result)
