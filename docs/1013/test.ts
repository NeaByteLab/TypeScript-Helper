import helper from '../../src/core/index'
const result = helper.parse(`docs/1013/index.ts:2:24 - error TS1013: A rest parameter or binding pattern may not have a trailing comma.

2 function greet(...names,) {`)
console.log(result)