import Layout from '../Components/UtilityComponents/Layout'
import ProductSearch from '../Components/ProductSearch'
import ProductList from '../Components/ProductList'
import {
  ProductList as IProductList,
  GetProductsQueryArgs,
  useGetProductsLazyQuery
} from '../graphql/generatedTypes'
import { useState } from 'react'
import { SelectChangeEvent } from '@mui/material/Select'
import LoadingLine from '../Components/LoadingLine'
import ErrorMessage from '../Components/ErrorMessage'
import { GetStaticProps } from 'next'
import { getProducts } from '../models/mongoDbQueries'
import { connection, connect } from 'mongoose'
import Head from 'next/head'

interface Props {
  productList: string
}

const Products = ({ productList }: Props) => {
  const [query, setQuery] = useState<GetProductsQueryArgs>({
    name: '',
    category: 'All'
  })
  const [vars, setVars] = useState(query)
  const [allProducts, setAllProducts] = useState<
    IProductList[] | undefined | null
  >(JSON.parse(productList))

  const [getProducts, { loading, error }] = useGetProductsLazyQuery({
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

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setVars(query)
    getProducts()
  }

  return (
    <Layout>
      <Head>
        <title>Products</title>
      </Head>

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
  if (connection.readyState < 1) {
    await connect(process.env.MONGO_URI)
  }

  const productList = await getProducts({ name: '', category: 'All' })

  return {
    props: { productList: JSON.stringify(productList) },
    revalidate: 10
  }
}

export default Products
