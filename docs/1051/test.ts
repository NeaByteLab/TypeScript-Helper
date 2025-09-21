import helper from '../../src/core/index'
const result = helper.parse(`docs/1051/index.ts:4:18 - error TS1051: A 'set' accessor cannot have an optional parameter.

4   set value(value?: string) {`)
console.log(result)
