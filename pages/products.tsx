import Layout from '../Components/UtilityComponents/Layout'
import ProductSearch from '../Components/ProductSearch'
import { useGetProductsQuery } from '../graphql/generatedTypes'
import { lazy, Suspense, useState } from 'react'
import ProductCardSkeleton from '../Components/ProductCardSkeleton'

const ProductList = lazy(() => import('../Components/ProductList'))

const Products = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')

  const { data } = useGetProductsQuery({
    variables: { query: { name, category } }
  })

  return (
    <Layout>
      <ProductSearch />
      <Suspense fallback={<ProductCardSkeleton />}>
        {data?.getProducts?.map((cat, index) => (
          <ProductList
            key={index}
            category={cat.category}
            products={cat.products}
          />
        ))}
      </Suspense>
    </Layout>
  )
}

export default Products
