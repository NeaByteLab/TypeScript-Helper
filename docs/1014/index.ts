// Example 1: Rest parameter not last in function
function greet(firstName: string, ...names: string[], lastName: string) {
  return `Hello ${firstName} ${names.join(' ')} ${lastName}`
}

// Example 2: Rest parameter not last in arrow function
const greetArrow = (firstName: string, ...names: string[], lastName: string) => {
  return `Hello ${firstName} ${names.join(' ')} ${lastName}`
}

// Example 3: Rest parameter not last in method
class Greeter {
  greet(firstName: string, ...names: string[], lastName: string) {
    return `Hello ${firstName} ${names.join(' ')} ${lastName}`
  }
}

// Example 4: Rest parameter not last with optional parameter
function processData(data: string, ...items: string[], optional?: boolean) {
  return { data, items, optional }
}

// Example 5: Rest parameter not last with default parameter
function calculateSum(...numbers: number[], multiplier: number = 1) {
  return numbers.reduce((sum, num) => sum + num, 0) * multiplier
}

// Example 6: Rest parameter not last in interface method
interface Processor {
  process(input: string, ...args: string[], output: string): string
}

// Example 7: Rest parameter not last in type definition
type Handler = (event: string, ...data: any[], callback: Function) => void

// Example 8: Rest parameter not last in generic function
function genericFunction<T>(first: T, ...rest: T[], last: T): T[] {
  return [first, ...rest, last]
}