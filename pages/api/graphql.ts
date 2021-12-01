import { ApolloServer } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import typeDefs from './../../graphql/schema'
import resolvers from './../../graphql/resolvers'
import { NextApiRequest, NextApiResponse } from 'next'
import { connection, connect } from 'mongoose'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})

export const config = {
  api: {
    bodyParser: false
  }
}

const serverStart = apolloServer.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (connection.readyState >= 1 === false) {
    await connect(process.env.MONGO_URI)
  }
  await serverStart
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}
