class AsyncDisposableResource implements AsyncDisposable {
  async [Symbol.asyncDispose]() {
    console.log('Disposing resource')
  }
}

class MyClass {
  static {
    await using resource = new AsyncDisposableResource()
  }
}
