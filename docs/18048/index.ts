// Error: 'value' is possibly 'undefined'
// This requires strict null checks to be enabled

function processValue(value?: string) {
  // Error: 'value' is possibly 'undefined'
  console.log(value.length)
  
  // Error: 'value' is possibly 'undefined'
  const upper = value.toUpperCase()
  
  // Error: 'value' is possibly 'undefined'
  return value.trim()
}
