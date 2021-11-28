import Product from './Product'

export const getProducts = () => {
  return Product.aggregate([
    { $group: { _id: '$category', products: { $push: '$$ROOT' } } },
    { $project: { _id: 0, products: 1, category: '$_id' } }
  ])
}
