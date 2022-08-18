import { gql } from 'apollo-server'

/**
 * GraphQL type definitions
 */
const typeDefs = gql`
  type Task {
    startDate: String
    durationUnit: String
    percentDone: Int
    duration: Int
    name: String
    id: Int
  }

  type Dependency {
    id: Int
    fromTask: Int
    toTask: Int
  }

  type Query {
    tasks: [Task]
    dependencies: [Dependency]
  }

  type Mutation {
    addTask(name: String, duration: Int): Boolean
    updateTask(id: Int, name: String, duration: Int, percentDone: Int): Boolean
  }
`

export default typeDefs
