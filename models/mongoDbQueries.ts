import { GetProductsQueryArgs } from '../graphql/generatedTypes'
import Product from './Product'

export const getProducts = async (query: GetProductsQueryArgs) => {
  const nameRegex = new RegExp(`.*${query.name}.*`)
  const nameString = query.name === '' ? /.*/ : nameRegex
  const categoryString = query.category === 'All' ? /.*/ : query.category

  const products = await Product.aggregate([
    { $match: { name: nameString, category: categoryString } },
    { $group: { _id: '$category', products: { $push: '$$ROOT' } } },
    { $project: { _id: 0, products: 1, category: '$_id' } },
    { $sort: { category: 1, name: 1 } }
  ])

  return products
}

export const getProductsNames = async () => {
  const productNames = await Product.aggregate([
    { $project: { name: 1, available: 1 } }
  ])

  return productNames
}
