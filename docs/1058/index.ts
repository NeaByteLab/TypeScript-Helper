class NotAPromise {
  then() {
    return this
  }
}

async function testAsync(): NotAPromise {
  return new NotAPromise()
}
