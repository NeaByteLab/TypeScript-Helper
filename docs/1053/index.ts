class TestClass {
  private _value: string = ''
  
  set value(...args: string[]) {
    this._value = args.join('')
  }
  
  get value(): string {
    return this._value
  }
}
