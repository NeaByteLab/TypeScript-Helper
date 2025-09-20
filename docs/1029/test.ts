import helper from '../../src/core/index'
const result = helper.parse(`docs/1029/index.ts:2:10 - error TS1029: 'public' modifier must precede 'static' modifier.

2   static public method() {`)
console.log(result)
