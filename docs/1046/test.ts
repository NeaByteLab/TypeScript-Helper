import helper from '../../src/core/index'
const result = helper.parse(`docs/1046/declarations.d.ts:1:1 - error TS1046: Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier.

1 const globalValue = 42`)
console.log(result)
