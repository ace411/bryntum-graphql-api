import readRegistry from '../read.mjs'
import writeRegistry from '../write.mjs'

/**
 * updateTask
 * updates specified task
 *
 * @param number id
 * @param object todo
 * @returns status
 */
const updateTask = async (id, { name, duration, percentDone = 0 }) => {
  let record = {}
  const records = (await readRegistry()).reduce((acc, entry) => {
    if (entry.id !== id) {
      return [...acc, ...[entry]]
    }
    record = { ...record, ...entry }

    return acc
  }, [])

  const { startDate, durationUnit } = record

  return typeof record.id !== 'undefined'
    ? await writeRegistry([
        ...records,
        ...[
          {
            id,
            name,
            duration,
            percentDone,
            durationUnit,
            ...(typeof startDate !== 'undefined' ? { startDate } : {}),
          },
        ],
      ])
    : false
}

export default updateTask
