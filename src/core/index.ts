import { loadAllData } from '@core/Utils'
import type { ErrorData } from '@interfaces/index'

/**
 * TypeScriptHelper class
 * @description Parses TypeScript compilation errors and provides suggestions with code corrections
 */
class TypeScriptHelper {
  /** The singleton instance of TypeScriptHelper */
  private static instance: TypeScriptHelper | null = null
  /** The cached data of TypeScriptHelper */
  private static cachedData: ErrorData[] = []

  /**
   * Private constructor to prevent direct instantiation
   * @description Enforces singleton pattern by preventing external instantiation
   */
  private constructor() {
    // Singleton constructor to prevent direct instantiation
  }

  /**
   * Get the singleton instance of TypeScriptHelper
   * @description Returns the singleton instance, creating it if it doesn't exist
   * @returns The singleton TypeScriptHelper instance
   */
  public static getInstance(): TypeScriptHelper {
    TypeScriptHelper.instance ??= new TypeScriptHelper()
    return TypeScriptHelper.instance
  }

  /**
   * Parse TypeScript error and return suggestions
   * @description Parses TypeScript error strings and returns error data with suggestions and code corrections
   * @param errorStr The TypeScript error string to parse (format: file:line:column - error TS[CODE]: [MESSAGE])
   * @returns ErrorData object containing error information and suggestions
   * @throws {Error} When error string format is invalid or error code is not found
   */
  public static parse(errorStr: string): ErrorData {
    if (!errorStr || typeof errorStr !== 'string') {
      throw new Error('Format string is required, but got undefined or null')
    }
    const tsRegexFormat1: RegExp = /^[^(]+\(\d+,\d+\):\s+error\s+TS\d+:\s+.+/
    const tsRegexFormat2: RegExp = /^[^:]+:\d+:\d+\s+-\s+error\s+TS\d+:\s+.+/
    if (!tsRegexFormat1.test(errorStr.trim()) && !tsRegexFormat2.test(errorStr.trim())) {
      throw new Error(
        'Invalid TypeScript error format. Expected either:\n[FILE]([LINE],[COLUMN]): error TS[CODE]: [MESSAGE]\nor\n[FILE]:[LINE]:[COLUMN] - error TS[CODE]: [MESSAGE]'
      )
    }
    if (TypeScriptHelper.cachedData.length === 0) {
      try {
        TypeScriptHelper.cachedData = (loadAllData as () => ErrorData[])()
      } catch (error: unknown) {
        throw new Error(`Failed to load error data, ${String(error)}`)
      }
    }
    const errorCodeRegex: RegExp = /error TS(\d+):/
    const errorCodeMatch: RegExpExecArray | null = errorCodeRegex.exec(errorStr)
    if (!errorCodeMatch) {
      throw new Error('Failed to extract error code from error string')
    }
    const errorCode: number = parseInt(errorCodeMatch[1] as string, 10)
    const errorData: ErrorData | undefined = TypeScriptHelper.cachedData.find(
      (data: ErrorData) => data.code === errorCode
    )
    if (errorData) {
      const codeMatch: RegExpExecArray | null = /\n(\d+\s+.*)/.exec(errorStr)
      const codeProblematic: string = codeMatch ? (codeMatch[1] as string).trim() : ''
      if (codeProblematic) {
        const codeRegex: RegExp = new RegExp(errorData.regexFind.replace(/(^\/)|(\/$)/g, ''))
        const codeCorrected: string = codeProblematic.replace(codeRegex, errorData.regexReplace)
        return {
          ...errorData,
          suggestion: `${errorData.suggestion}\n\n${codeCorrected}`
        }
      } else {
        return errorData
      }
    }
    throw new Error(`No error data found for code ${errorCode}`)
  }
}

/**
 * Export the singleton instance of TypeScriptHelper
 * @description Default export of the TypeScriptHelper class
 */
export default TypeScriptHelper
