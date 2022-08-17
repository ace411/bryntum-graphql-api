import { UserInputError } from 'apollo-server'
import getDependencies from '../registry/dependencies/get.mjs'
import addTask from '../registry/tasks/add.mjs'
import getTasks from '../registry/tasks/get.mjs'
import updateTask from '../registry/tasks/update.mjs'

/**
 * GraphQL resolvers
 */
const resolvers = {
  Query: {
    tasks: async () => await getTasks(),
    dependencies: async () => await getDependencies(),
  },
  Mutation: {
    addTask: async (_, args) => {
      const { name, duration } = args

      if (typeof name === 'undefined' || typeof duration === 'undefined') {
        throw new UserInputError('Invalid input(s)')
      }

      return await addTask({ name, duration })
    },
    updateTask: async (_, args) => {
      const { name, duration, id, percentDone } = args

      if (
        typeof name === 'undefined' ||
        typeof duration === 'undefined' ||
        typeof id === 'undefined' ||
        typeof percentDone === 'undefined'
      ) {
        throw new UserInputError('Invalid input(s)')
      }

      return await updateTask(id, { name, duration, percentDone })
    },
  },
}

export default resolvers
