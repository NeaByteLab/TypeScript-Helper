import helper from '../../src/core/index'
const result = helper.parse(`docs/1025/index.ts:2:15 - error TS1025: An index signature cannot have a trailing comma.

2   [key: string,]: any`)
console.log(result)
