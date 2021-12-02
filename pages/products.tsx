import ProductList from '../Components/ProductList'
import Layout from '../Components/UtilityComponents/Layout'
import ProductSearch from '../Components/ProductSearch'
import { useGetProductsQuery } from '../graphql/generatedTypes'

const Products = () => {
  const { data } = useGetProductsQuery()

  return (
    <Layout>
      <ProductSearch />
      {data?.getProducts?.map((cat, index) => (
        <ProductList
          key={index}
          category={cat.category}
          products={cat.products}
        />
      ))}
    </Layout>
  )
}

export default Products
