import helper from '../../src/core/index'
const result = helper.parse(`docs/1006/index.ts(1,22): error TS1006: A file cannot have a reference to itself.

1 /// <reference path="./index.ts" />`)
console.log(result)
