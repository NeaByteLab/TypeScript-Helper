import helper from '../../src/core/index'
const result = helper.parse(`docs/1039/index.ts:2:25 - error TS1039: Initializers are not allowed in ambient contexts.

2   const value: number = 42`)
console.log(result)
