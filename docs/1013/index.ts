// Example 1: Rest parameter with trailing comma
function greet(...names,) {
  return `Hello ${names.join(', ')}`
}

// Example 2: Rest parameter in arrow function with trailing comma
const greetArrow = (...names,) => {
  return `Hello ${names.join(', ')}`
}

// Example 3: Rest parameter in method with trailing comma
class Greeter {
  greet(...names,) {
    return `Hello ${names.join(', ')}`
  }
}

// Example 4: Destructuring with rest parameter and trailing comma
const [first, ...rest,] = [1, 2, 3, 4, 5]

// Example 5: Object destructuring with rest and trailing comma
const { name: userName, ...others, } = { name: 'John', age: 30, city: 'NYC' }

// Example 6: Function parameter destructuring with rest and trailing comma
function processUser({ name, ...rest, }: { name: string, age: number, city: string }) {
  return { name, rest }
}

// Example 7: Array destructuring with rest and trailing comma
function getFirstAndRest([first, ...rest,]: number[]) {
  return { first, rest }
}

// Example 8: Nested destructuring with rest and trailing comma
function processNested({ user: { name, ...userRest, }, ...configRest, }: any) {
  return { name, userRest, configRest }
}