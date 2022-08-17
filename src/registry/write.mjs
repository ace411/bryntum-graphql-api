import fs from 'fs/promises'
import { TODOS, TEMP } from '../constants.mjs'

/**
 * writeRegistry
 * writes arbitrary object contents to a tasks registry
 * (places contents in a non-Git-tracked directory)
 *
 * @param object contents
 * @returns status
 */
const writeRegistry = async (contents) => {
  try {
    await fs.mkdir(TEMP, { recursive: true })

    await fs.writeFile(TODOS, JSON.stringify(contents))

    return true
  } catch (e) {
    return false
  }
}

export default writeRegistry
