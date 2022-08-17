import readRegistry from '../read.mjs'
import writeRegistry from '../write.mjs'

/**
 * addTask
 * adds a task (subsumed in a todo object) to the task registry
 *
 * @param object todo
 * @returns status
 */
const addTask = async ({ name, duration }) => {
  const stored = await readRegistry()

  const ssize = stored.length

  const id = (ssize === 0 ? 0 : stored[ssize - 1]?.id) + 1

  return writeRegistry([
    ...stored,
    ...[
      {
        id,
        name,
        duration,
        percentDone: 0,
        ...(id === 1 ? { startDate: new Date().toISOString() } : {}),
      },
    ],
  ])
}

export default addTask
