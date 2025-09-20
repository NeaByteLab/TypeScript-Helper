import helper from '../../src/core/index'
const result = helper.parse(`docs/1044/index.ts:2:3 - error TS1044: 'public' modifier cannot appear on a module or namespace element.

2   public const value = 42`)
console.log(result)
