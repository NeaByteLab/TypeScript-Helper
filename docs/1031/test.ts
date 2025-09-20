import helper from '../../src/core/index'
const result = helper.parse(`docs/1031/index.ts:2:3 - error TS1031: 'export' modifier cannot appear on class elements of this kind.

2   export method() {`)
console.log(result)
