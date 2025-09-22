import helper from '../../src/core/index'
const result = helper.parse(`docs/18060/index.ts:1:8 - error TS18060: Deferred imports are only supported when the '--module' flag is set to 'esnext' or 'preserve'.

1 import defer * as MyModule from './module'`)
console.log(result)
