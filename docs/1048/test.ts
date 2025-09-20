import helper from '../../src/core/index'
const result = helper.parse(`docs/1048/index.ts:1:33 - error TS1048: A rest parameter cannot have an initializer.

1 function testRestInitializer(...args: string[] = ['default']) {`)
console.log(result)
