class CustomPromise {
  constructor(executor: any) {}
}

async function testAsync(): CustomPromise {
  return new CustomPromise(() => {})
}
