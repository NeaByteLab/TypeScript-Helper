import helper from '../../src/core/index'
const result = helper.parse(`docs/1047/index.ts:1:34 - error TS1047: A rest parameter cannot be optional.

1 function testOptionalRest(...args?: string[]) {`)
console.log(result)
