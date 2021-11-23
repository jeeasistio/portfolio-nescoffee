import { model, Schema } from 'mongoose'
import Product, { categories } from './../interfaces/Product'

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  alt: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true, enum: categories },
  available: { type: Boolean, required: true }
})

export default model<Product>('Product', productSchema)
