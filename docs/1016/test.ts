import helper from '../../src/core/index'
const result = helper.parse(`docs/1016/index.ts:1:59 - error TS1016: A required parameter cannot follow an optional parameter.

1 function createUser(firstName: string, lastName?: string, age: number) {`)
console.log(result)
