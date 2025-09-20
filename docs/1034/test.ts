import helper from '../../src/core/index'
const result = helper.parse(`docs/1034/index.ts:4:3 - error TS1034: 'super' must be followed by an argument list or member access.

4   super`)
console.log(result)
