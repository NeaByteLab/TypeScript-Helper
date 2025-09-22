// Error: Named imports are not allowed in a deferred import
// This requires tsconfig.json with module: "esnext" or "preserve"

// Error: Named imports are not allowed in a deferred import
import defer { myFunction, myVariable } from './module'

// Error: Named imports are not allowed in a deferred import
import defer { myFunction as func } from './module'
