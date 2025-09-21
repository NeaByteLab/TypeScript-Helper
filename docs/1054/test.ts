import helper from '../../src/core/index'
const result = helper.parse(`docs/1054/index.ts:4:7 - error TS1054: A 'get' accessor cannot have parameters.

4   get value(param: string): string {`)
console.log(result)
