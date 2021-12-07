import Layout from '../Components/UtilityComponents/Layout'
import ProductSearch from '../Components/ProductSearch'
import ProductList from '../Components/ProductList'
import {
  useGetProductsQuery,
  ProductList as IProductList,
  GetProductsQueryArgs
} from '../graphql/generatedTypes'
import { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import LoadingLine from '../Components/LoadingLine'
import ErrorMessage from '../Components/ErrorMessage'
import { GetStaticProps } from 'next'
import { getProducts } from '../models/mongoDbQueries'
import { connection, connect } from 'mongoose'

const Products = () => {
  const [query, setQuery] = useState<GetProductsQueryArgs>({
    name: '',
    category: 'All'
  })
  const [vars, setVars] = useState(query)
  const [allProducts, setAllProducts] = useState<
    IProductList[] | undefined | null
  >([])

  const { loading, error } = useGetProductsQuery({
    variables: { query: vars },
    onCompleted(data) {
      setAllProducts(data.getProducts)
    },
    fetchPolicy: 'cache-and-network'
  })

  const handleName = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setQuery((prev) => ({ ...prev, name: e.target.value }))
  }

  const handleCategory = (e: SelectChangeEvent<string>) => {
    setQuery((prev) => ({ ...prev, category: e.target.value }))
  }

  const handleSearch = () => {
    setVars(query)
  }

  return (
    <Layout>
      <ProductSearch
        query={query}
        handleName={handleName}
        handleCategory={handleCategory}
        handleSearch={handleSearch}
      />

      {error && <ErrorMessage />}

      {loading && <LoadingLine />}

      {allProducts?.map((cat, index) => (
        <ProductList
          key={index}
          category={cat.category}
          products={cat.products}
        />
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const productList = await getProducts({ name: '', category: 'All' })

  if (connection.readyState < 1) {
    await connect(process.env.MONGO_URI)
  }

  return {
    props: { productList: JSON.stringify(productList) },
    revalidate: 10
  }
}

export default Products
