import helper from '../../src/core/index'
const result = helper.parse(`docs/1019/index.ts:2:7 - error TS1019: An index signature parameter cannot have a question mark.

2   [key?: string]: any`)
console.log(result)
