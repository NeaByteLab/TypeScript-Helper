import helper from '../../src/core/index'
const result = helper.parse(`docs/18058/index.ts:1:8 - error TS18058: Default imports are not allowed in a deferred import.

1 import defer MyDefault from './module'`)
console.log(result)
