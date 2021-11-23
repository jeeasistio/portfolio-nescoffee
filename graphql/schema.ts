import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    alt: String!
    price: Int!
    category: String!
    available: Boolean!
  }

  type Query {
    getProducts(category: String): Product
  }
`
export default typeDefs
