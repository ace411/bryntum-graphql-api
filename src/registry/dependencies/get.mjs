import readRegistry from '../read.mjs'

/**
 * getDependencies
 * transforms task registry contents into array that signals task chronology
 *
 * @returns dependencies
 */
const getDependencies = async () => {
  const data = await readRegistry()

  return data.reduce((acc, entry) => {
    const { id } = entry
    const fromTask = id
    const toTask = id + 1

    return [
      ...acc,
      ...[
        {
          id,
          fromTask,
          toTask,
        },
      ],
    ]
  }, [])
}

export default getDependencies
