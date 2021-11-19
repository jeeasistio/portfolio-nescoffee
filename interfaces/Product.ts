export default interface Product {
  name: string
  description: string
  image: string
  alt: string
  price: number
  category: Categories
  available: boolean
}

export type Categories = 'Coffee' | 'Tea'
