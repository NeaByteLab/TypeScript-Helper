class TestClass {
  private _value: string = ''
  
  set value() {
    this._value = 'test'
  }
  
  get value(): string {
    return this._value
  }
}
