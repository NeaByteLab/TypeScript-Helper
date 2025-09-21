// Example 1: Rest parameter with trailing comma
function greet(...names,) {
  return `Hello ${names.join(', ')}`
}

// Example 2: Rest parameter in arrow function with trailing comma
const greetArrow = (...names,) => {
  return `Hello ${names.join(', ')}`
}