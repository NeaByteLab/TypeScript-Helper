import helper from '../../src/core/index'
const result = helper.parse(`docs/1024/index.ts:2:3 - error TS1024: 'readonly' modifier can only appear on a property declaration or index signature.

2   readonly method() {`)
console.log(result)
