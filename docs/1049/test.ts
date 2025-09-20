import helper from '../../src/core/index'
const result = helper.parse(`docs/1049/index.ts:4:7 - error TS1049: A 'set' accessor must have exactly one parameter.

4   set value() {`)
console.log(result)
