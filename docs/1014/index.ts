// Example 1: Rest parameter not last in function
function greet(firstName: string, ...names: string[], lastName: string) {
  return `Hello ${firstName} ${names.join(' ')} ${lastName}`
}

// Example 2: Rest parameter not last in arrow function
const greetArrow = (firstName: string, ...names: string[], lastName: string) => {
  return `Hello ${firstName} ${names.join(' ')} ${lastName}`
}