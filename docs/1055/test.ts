import helper from '../../src/core/index'
const result = helper.parse(`docs/1055/index.ts:5:29 - error TS1055: Type 'typeof CustomPromise' is not a valid async function return type in ES5 because it does not refer to a Promise-compatible constructor value.
  Types of construct signatures are incompatible.
    Type 'new (executor: any) => CustomPromise' is not assignable to type 'new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) => PromiseLike<T>'.
      Property 'then' is missing in type 'CustomPromise' but required in type 'PromiseLike<T>'.

5 async function testAsync(): CustomPromise {`)
console.log(result)
