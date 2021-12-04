import { getProducts } from '../models/mongoDbQueries'
import { Resolvers } from './generatedTypes'

const resolvers: Resolvers = {
  Query: {
    getProducts(_parent, args) {
      return getProducts(args.query).then((productList) => productList)
    }
  }
}

export default resolvers
