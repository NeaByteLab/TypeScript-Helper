class TestClass {
  private _value: string = ''
  
  set value(value: string = 'default') {
    this._value = value
  }
  
  get value(): string {
    return this._value
  }
}
