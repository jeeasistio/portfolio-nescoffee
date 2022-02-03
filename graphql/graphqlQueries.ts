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

export const GET_PRODUCTS_NAMES = gql`
  query GetProductsNames {
    getProductsNames {
      name
      available
    }
  }
`

export const SEND_EMAIL = gql`
  mutation SendEmail($form: SendEmailArgs!) {
    sendEmail(form: $form) {
      message
    }
  }
`
