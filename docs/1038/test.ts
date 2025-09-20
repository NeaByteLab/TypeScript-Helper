import helper from '../../src/core/index'
const result = helper.parse(`docs/1038/index.ts:2:3 - error TS1038: A 'declare' modifier cannot be used in an already ambient context.

2   declare const value = 42`)
console.log(result)
