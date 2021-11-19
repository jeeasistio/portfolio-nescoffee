import ProductList from '../Components/ProductList'
import Layout from '../Components/UtilityComponents/Layout'
import ProductSearch from './../Components/ProductSearch'
import Product, { Categories } from './../interfaces/Product'

interface ProductListing {
  category: Categories
  products: Product[]
}

const mockCoffeeProducts = Array(8).fill({
  name: 'Coffee',
  description:
    'Etiam ultrices lacus odio, congue semper lorem congue quis. Pellentesque.',
  image: 'https://i.ibb.co/x1nHqbK/product-coffee-small.jpg',
  alt: 'coffee-background-small-2-edited',
  price: 99,
  category: 'Coffee',
  available: true
})

const mockTeaProducts = Array(8).fill({
  name: 'Tea',
  description:
    'Etiam ultrices lacus odio, congue semper lorem congue quis. Pellentesque.',
  image: 'https://i.ibb.co/x1nHqbK/product-coffee-small.jpg',
  alt: 'coffee-background-small-2-edited',
  price: 99,
  category: 'Tea',
  available: true
})

const allProducts: ProductListing[] = [
  {
    category: 'Coffee',
    products: mockCoffeeProducts
  },
  {
    category: 'Tea',
    products: mockTeaProducts
  }
]

const products = () => {
  return (
    <Layout>
      <ProductSearch />
      {allProducts.map((cat, index) => (
        <ProductList
          key={index}
          category={cat.category}
          products={cat.products}
        />
      ))}
    </Layout>
  )
}

export default products
