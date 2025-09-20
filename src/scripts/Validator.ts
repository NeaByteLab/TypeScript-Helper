import fs from 'node:fs/promises'
import { join } from 'node:path'
import type { ErrorData, ErrorResult } from '@interfaces/index'

/**
 * Validates error data and checks for missing or incomplete information.
 * @description Checks each error data item for completeness and creates validation results for missing or placeholder data.
 * @param data - Array of ErrorData objects to validate
 * @returns Promise resolving to a record mapping error codes to validation results
 */
export async function validateData(data: ErrorData[]): Promise<Record<number, ErrorResult>> {
  const callback: string = 'Need to check and fix the data'
  const result: Record<number, ErrorResult> = {}
  for (const item of data) {
    const filePath = join(process.cwd(), 'src', 'dataset', `${item.code}.json`)
    const isExists = await isFileExists(filePath)
    if (isExists) {
      const fileContent = await fs.readFile(filePath, 'utf-8')
      const fileData = JSON.parse(fileContent)
      if (!result[item.code]) {
        result[item.code] = {}
      }
      if (isRegexEmpty(fileData.regexFind.toString())) {
        result[item.code]!.regexFind = callback
      }
      if (isRegexEmpty(fileData.regexReplace.toString())) {
        result[item.code]!.regexReplace = callback
      }
      if (isSuggestionEmpty(fileData.suggestion)) {
        result[item.code]!.suggestion = callback
      }
      if (isExampleEmpty(fileData.example)) {
        result[item.code]!.example = callback
      }
    } else {
      await fs.writeFile(filePath, JSON.stringify(item, null, 2))
    }
  }
  return result
}

/**
 * Checks if a file exists at the specified path.
 * @description Uses file system access to determine if a file exists at the given path.
 * @param filePath - The file path to check
 * @returns Promise resolving to true if file exists, false otherwise
 */
async function isFileExists(filePath: string): Promise<boolean> {
  return fs
    .access(filePath)
    .then(() => true)
    .catch(() => false)
}

/**
 * Checks if a regex pattern is empty or placeholder.
 * @description Determines if the provided regex string contains only placeholder values by checking against the default placeholder pattern.
 * @param regex - The regex string to validate
 * @returns True if regex is empty or placeholder, false otherwise
 */
function isRegexEmpty(regex: string): boolean {
  return regex === '/N\/A/g'
}

/**
 * Checks if a suggestion is empty or placeholder.
 * @description Determines if the provided suggestion string contains only placeholder values.
 * @param suggestion - The suggestion string to validate
 * @returns True if suggestion is empty or placeholder, false otherwise
 */
function isSuggestionEmpty(suggestion: string): boolean {
  return suggestion === 'N/A'
}

/**
 * Checks if example data is empty or placeholder.
 * @description Determines if all example objects contain only placeholder values.
 * @param example - Array of example objects to validate
 * @returns True if all examples are empty or placeholder, false otherwise
 */
function isExampleEmpty(example: { base: string; fixed: string; description: string }[]): boolean {
  return example.every(
    item => item.base === 'N/A' && item.fixed === 'N/A' && item.description === 'N/A'
  )
}
