import helper from '../../src/core/index'
const result = helper.parse(`docs/1053/index.ts:4:13 - error TS1053: A 'set' accessor cannot have rest parameter.

4   set value(...args: string[]) {`)
console.log(result)
