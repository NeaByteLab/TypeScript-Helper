import helper from '../../src/core/index'
const result = helper.parse(`docs/18045/index.ts:2:12 - error TS18045: Properties with the 'accessor' modifier are only available when targeting ECMAScript 2015 and higher.

2   accessor value: string = 'test'`)
console.log(result)
