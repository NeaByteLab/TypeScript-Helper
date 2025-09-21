import helper from '../../src/core/index'
const result = helper.parse(`docs/1052/index.ts:4:7 - error TS1052: A 'set' accessor parameter cannot have an initializer.

4   set value(value: string = 'default') {`)
console.log(result)
