import helper from '../../src/core/index'
const result = helper.parse(`docs/18057/index.ts:1:10 - error TS18057: String literal import and export names are not supported when the '--module' flag is set to 'es2015' or 'es2020'.

1 import { "myFunction" as func } from './module'`)
console.log(result)
