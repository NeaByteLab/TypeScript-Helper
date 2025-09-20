// Example 1: Optional parameter with initializer
function greet(name?: string = "Guest") {
  console.log(`Hello, ${name}!`)
}

// Example 2: Optional parameter with initializer in arrow function
const greetArrow = (name?: string = "Guest") => {
  console.log(`Hello, ${name}!`)
}

// Example 3: Optional parameter with initializer in method
class Greeter {
  greet(name?: string = "Guest") {
    console.log(`Hello, ${name}!`)
  }
}

// Example 4: Optional parameter with initializer in generic function
function genericFunction<T>(value?: T = null): T | null {
  return value
}

// Example 5: Optional parameter with initializer in callback
function withCallback(callback?: (value: string) => void = (v) => console.log(v)) {
  callback("test")
}