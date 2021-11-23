export default interface Product {
  name: string
  description: string
  image: string
  alt: string
  price: number
  category: Categories
  available: boolean
}

export const categories = ['Coffee', 'Tea'] as const

export type Categories = typeof categories[number]
