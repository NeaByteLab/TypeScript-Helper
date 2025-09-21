import helper from '../../src/core/index'
const result = helper.parse(`docs/1058/index.ts:7:16 - error TS1058: The return type of an async function must either be a valid promise or must not contain a callable 'then' member.

7 async function testAsync(): NotAPromise {`)
console.log(result)
