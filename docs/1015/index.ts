// Example 1: Optional parameter with initializer
function greet(name?: string = "Guest") {
  console.log(`Hello, ${name}!`)
}

// Example 2: Optional parameter with initializer in arrow function
const greetArrow = (name?: string = "Guest") => {
  console.log(`Hello, ${name}!`)
}