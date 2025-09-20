import helper from '../../src/core/index'
const result = helper.parse(`docs/1028/index.ts:2:10 - error TS1028: Accessibility modifier already seen.

2   public public method() {`)
console.log(result)
