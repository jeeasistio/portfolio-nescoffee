import { GetProductsQueryArgs } from '../graphql/generatedTypes'
import Product from './Product'

export const getProducts = (query: GetProductsQueryArgs) => {
  return Product.aggregate([
    { $match: { name: query.name || /.*/, category: query.category || /.*/ } },
    { $group: { _id: '$category', products: { $push: '$$ROOT' } } },
    { $project: { _id: 0, products: 1, category: '$_id' } },
    { $sort: { category: 1, name: 1 } }
  ])
}
