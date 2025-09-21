class TestClass {
  private _value: string = ''
  
  get value(param: string): string {
    return this._value + param
  }
  
  set value(newValue: string) {
    this._value = newValue
  }
}
