import helper from '../../src/core/index'
const result = helper.parse(`docs/1003/index.ts:1:10 - error TS1003: Identifier expected.

1 function = () => {};`)
console.log(result)