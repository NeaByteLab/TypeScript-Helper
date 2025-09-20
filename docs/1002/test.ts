import helper from '../../src/core/index'
const result = helper.parse(`docs/1002/index.ts:1:30 - error TS1002: Unterminated string literal.

1 const message = "Hello world;`)
console.log(result)