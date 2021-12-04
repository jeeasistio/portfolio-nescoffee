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

  input GetProductsQueryArgs {
    name: String!
    category: String!
  }

  type Query {
    getProducts(query: GetProductsQueryArgs!): [ProductList!]
  }
`
export default typeDefs
