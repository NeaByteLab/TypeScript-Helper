import helper from '../../src/core/index'
const result = helper.parse(`docs/18054/index.ts:9:5 - error TS18054: 'await using' statements cannot be used inside a class static block.

9     await using resource = new AsyncDisposableResource()`)
console.log(result)
