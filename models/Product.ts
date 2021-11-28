import { model, models, Schema } from 'mongoose'
import Product from './../interfaces/Product'

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  alt: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  available: { type: Boolean, required: true }
})

export default models.Product || model<Product>('Product', productSchema)
