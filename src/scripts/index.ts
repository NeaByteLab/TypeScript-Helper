import { getErrorData } from '@scripts/Fetcher'
import { validateData } from '@scripts/Validator'

/**
 * Executes the error data fetching and validation process.
 * @description Fetches error data from the repository and validates the existing dataset files.
 */
;(async () => {
  try {
    const data = await getErrorData()
    const result = await validateData(data)
    console.log({ result })
  } catch (error) {
    console.error(error)
  }
})()
