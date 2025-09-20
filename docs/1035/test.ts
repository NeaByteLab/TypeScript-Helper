import helper from '../../src/core/index'
const result = helper.parse(`docs/1035/index.ts:1:8 - error TS1035: Only ambient modules can use quoted names.

1 module "my-module" {`)
console.log(result)
