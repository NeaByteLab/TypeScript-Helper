import fs from 'node:fs'
import { join } from 'node:path'
import type { ErrorData } from '@interfaces/index'

/**
 * Load all data from the dataset folder
 * @description Reads all JSON files from the dataset directory and returns them as a sorted array of ErrorData objects
 * @returns Array of ErrorData objects sorted by error code
 * @throws {Error} When dataset directory cannot be read or JSON files cannot be parsed
 */
export function loadAllData(): ErrorData[] {
  try {
    const datasetDir: string = join(process.cwd(), 'src', 'dataset')
    const listFiles: string[] = fs.readdirSync(datasetDir)
    const jsonFiles: string[] = listFiles.filter((file: string) => file.endsWith('.json'))
    const allData: ErrorData[] = []
    for (const file of jsonFiles) {
      try {
        const filePath: string = join(datasetDir, file)
        const fileContent: string = fs.readFileSync(filePath, 'utf-8')
        const errorData: ErrorData = JSON.parse(fileContent) as ErrorData
        allData.push(errorData)
      } catch (error: unknown) {
        throw new Error(`Failed to load ${file}: ${String(error)}`)
      }
    }
    return allData.sort((a: ErrorData, b: ErrorData) => a.code - b.code)
  } catch (error: unknown) {
    throw new Error(`Failed to load dataset: ${String(error)}`)
  }
}
