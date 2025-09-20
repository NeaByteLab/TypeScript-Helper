import helper from '../../src/core/index'
const result = helper.parse(`docs/1010/index.ts:1:40 - error TS1010: '*/' expected.

1 /* console.log('This is commented out')`)
console.log(result)