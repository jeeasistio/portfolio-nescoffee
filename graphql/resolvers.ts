import { getProducts } from '../models/mongoDbQueries'
import { Resolvers } from './generatedTypes'

const resolvers: Resolvers = {
  Query: {
    getProducts() {
      return getProducts().then((productList) => productList)
    }
  }
}

export default resolvers
