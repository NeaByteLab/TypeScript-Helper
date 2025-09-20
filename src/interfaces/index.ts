/**
 * Interface for error metadata information.
 * @description Defines the structure for error metadata including version and modification details.
 */
export interface ErrorMeta {
  /** The version of the error data */
  version: string
  /** The last modified timestamp of the error data */
  lastModified: string
}

/**
 * Interface for TypeScript error data structure.
 * @description Defines the complete structure for TypeScript error information.
 */
export interface ErrorData {
  /** The unique error code number */
  code: number
  /** The error message identifier */
  message: string
  /** The regular expression pattern for error detection */
  regex: string
  /** The suggested fix or solution for the error */
  suggestion: string
  /** Array of example cases showing base and fixed code with descriptions */
  example: {
    /** The original problematic code example */
    base: string
    /** The corrected code example */
    fixed: string
    /** Description explaining the fix */
    description: string
  }[]
}

/**
 * Interface for error result structure.
 * @description Defines the structure for error result including regex, suggestion, and example validation status.
 */
export interface ErrorResult {
  /** The regular expression pattern for error detection */
  regex?: string
  /** The suggested fix or solution for the error */
  suggestion?: string
  /** The example cases showing base and fixed code with descriptions */
  example?: string
}
