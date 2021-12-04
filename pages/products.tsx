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
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

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

      {error && (
        <Box>
          <Typography>Something went wrong</Typography>
        </Box>
      )}

      {loading && (
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Loading...
          </Typography>
        </Box>
      )}

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

export default Products
