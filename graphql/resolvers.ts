import sendEmail from '../lib/sendEmail'
import { getProducts, getProductsNames } from '../models/mongoDbQueries'
import { Resolvers } from './generatedTypes'

const resolvers: Resolvers = {
  Query: {
    async getProducts(_parent, args) {
      const products = await getProducts(args.query)
      return products
    },
    async getProductsNames() {
      const productName = await getProductsNames()
      return productName
    }
  },
  Mutation: {
    async sendEmail(_parent, args) {
      const sentEmail = await sendEmail(args.form)
      return sentEmail
    }
  }
}

export default resolvers
