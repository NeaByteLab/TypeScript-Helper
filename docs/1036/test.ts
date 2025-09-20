import helper from '../../src/core/index'
const result = helper.parse(`docs/1036/index.ts:3:3 - error TS1036: Statements are not allowed in ambient contexts.

3   console.log(value)`)
console.log(result)
