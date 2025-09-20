import helper from '../../src/core/index'
const result = helper.parse(`docs/1040/index.ts:2:3 - error TS1040: 'async' modifier cannot be used in an ambient context.

2   async function helper(): Promise<void>`)
console.log(result)
