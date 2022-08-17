import typeDefs from './src/graphql/schema.mjs'
import resolvers from './src/graphql/resolvers.mjs'
import { ApolloServer } from 'apollo-server'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(4000).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
