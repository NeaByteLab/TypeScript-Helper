class TestClass {
  private _value: string = ''
  
  set value(value?: string) {
    this._value = value || 'default'
  }
  
  get value(): string {
    return this._value
  }
}
