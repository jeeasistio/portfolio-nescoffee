import { gql } from 'apollo-server-micro'

export const GET_PRODUCTS = gql`
  query GetProducts($query: GetProductsQueryArgs!) {
    getProducts(query: $query) {
      category
      products {
        _id
        name
        description
        image
        alt
        price
        category
        available
      }
    }
  }
`