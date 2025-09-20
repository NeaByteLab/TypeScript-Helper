import helper from '../../src/core/index'
const result = helper.parse(`docs/1017/index.ts:2:4 - error TS1017: An index signature cannot have a rest parameter.

2   [...rest: any]: any`)
console.log(result)
