import fs from 'fs/promises'
import { TODOS } from '../constants.mjs'

/**
 * readRegistry
 * retrieves contents of a task (todos) registry
 *
 * @returns contents
 */
const readRegistry = async () => {
  try {
    const contents = await fs.readFile(TODOS)

    return JSON.parse(contents)
  } catch (e) {
    return []
  }
}

export default readRegistry
