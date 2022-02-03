import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
    description: String!
    image: String!
    alt: String!
    price: Int!
    category: String!
    available: Boolean!
  }

  type ProductList {
    category: String!
    products: [Product!]
  }

  type ProductName {
    name: String!
    available: Boolean!
  }

  type EmailSent {
    message: String!
  }

  input GetProductsQueryArgs {
    name: String!
    category: String!
  }

  input SendEmailArgs {
    name: String!
    email: String!
    type: String!
    product: String
    quantity: Int
    message: String
  }

  type Query {
    getProducts(query: GetProductsQueryArgs!): [ProductList!]
    getProductsNames: [ProductName!]
  }

  type Mutation {
    sendEmail(form: SendEmailArgs!): EmailSent!
  }
`
export default typeDefs
