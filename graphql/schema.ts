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

  input GetProductsQueryArgs {
    name: String!
    category: String!
  }

  type Query {
    getProducts(query: GetProductsQueryArgs!): [ProductList!]
    getProductsNames: [ProductName!]
  }
`
export default typeDefs
