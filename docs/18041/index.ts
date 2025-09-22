class MyClass {
  static {
    return "This will cause TS18041"
  }
  
  static {
    if (true) {
      return 42
    }
  }
}
