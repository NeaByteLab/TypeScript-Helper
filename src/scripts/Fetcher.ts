import { get } from 'node:https'
import type { ErrorData } from '@interfaces/index'

/**
 * Fetches TypeScript error data from the official repository.
 * @description Retrieves diagnostic messages from the TypeScript compiler repository and filters for error messages only.
 * @returns Promise resolving to an array of ErrorData objects containing error codes, messages, and metadata
 * @throws {Error} When no error data is found or when parsing individual messages fails
 */
export async function getErrorData(): Promise<ErrorData[]> {
  try {
    const repoUrl = 'https://raw.githubusercontent.com/microsoft/TypeScript'
    const pathUrl = `${repoUrl}/refs/heads/main/src/compiler/diagnosticMessages.json`
    const response = await new Promise<any>((resolve, reject) => {
      get(pathUrl, res => {
        let data = ''
        res.on('data', chunk => (data += chunk))
        res.on('end', () => {
          try {
            const jsonData = JSON.parse(data)
            resolve({ data: jsonData })
          } catch (error) {
            reject(error)
          }
        })
      }).on('error', reject)
    })
    if (Object.keys(response.data).length === 0) {
      throw new Error('No error data found, please check the repository URL')
    }
    const tempData: ErrorData[] = []
    const filterData = Object.entries(response.data)
      .filter(([, value]) => (value as unknown as { category: string }).category === 'Error')
      .reduce(
        (acc, [key, value]) => {
          acc[key] = value
          return acc
        },
        {} as unknown as Record<string, unknown>
      )
    for (const message of Object.keys(filterData)) {
      try {
        const details = response.data[message]
        const error: ErrorData = {
          code: details.code,
          message: message,
          regexFind: '/N\/A/g',
          regexReplace: 'N/A',
          suggestion: 'N/A',
          example: [
            {
              base: 'N/A',
              fixed: 'N/A',
              description: 'N/A'
            }
          ]
        }
        tempData.push(error)
      } catch (error) {
        throw new Error(`Error parsing message: ${message}, error: ${error}`)
      }
    }
    return tempData
  } catch (error) {
    throw error
  }
}
