// Example 1: Empty array access
const arr = [1, 2, 3, 4, 5]
const value = arr[]

// Example 2: Empty object property access
const obj = { name: 'John', age: 30 }
const prop = obj[]

// Example 3: Empty bracket notation on string
const str = 'Hello World'
const char = str[]

// Example 4: Empty bracket notation on function call result
function getArray() {
  return [1, 2, 3]
}
const result = getArray()[]

// Example 5: Empty bracket notation on variable
let numbers = [10, 20, 30]
let item = numbers[]

// Example 6: Empty bracket notation in expression
const sum = (arr[0] + arr[1] + arr[])

// Example 7: Empty bracket notation in function parameter
function processItem(item: any) {
  return item[]
}

// Example 8: Empty bracket notation in return statement
function getFirstItem(arr: number[]) {
  return arr[]
}