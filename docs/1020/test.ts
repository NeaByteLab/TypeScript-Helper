import helper from '../../src/core/index'
const result = helper.parse(`docs/1020/index.ts:2:4 - error TS1020: An index signature parameter cannot have an initializer.

2   [key: string = 'default']: any`)
console.log(result)
