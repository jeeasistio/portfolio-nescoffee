import { ApolloServer } from 'apollo-server-micro'
import typeDefs from './../../graphql/schema'
import resolvers from './../../graphql/resolvers'
import { NextApiRequest, NextApiResponse } from 'next'

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await apolloServer.start()
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}
