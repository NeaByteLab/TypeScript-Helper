import helper from '../../src/core/index'
const result = helper.parse(`docs/1015/index.ts:2:16 - error TS1015: Parameter cannot have question mark and initializer.

2 function greet(name?: string = "Guest") {`)
console.log(result)
