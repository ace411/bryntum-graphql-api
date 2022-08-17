import readRegistry from '../read.mjs'

/**
 * getTasks
 * retrieves task registry contents
 *
 * @returns tasks
 */
const getTasks = async () => readRegistry()

export default getTasks
