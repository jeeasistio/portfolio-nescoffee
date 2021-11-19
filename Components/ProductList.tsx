import { Box, Grid, Typography } from '@mui/material'
import Product, { Categories } from '../interfaces/Product'
import ProductCard from './ProductCard'
import { SxProps } from '@mui/system'

interface Props {
  products: Product[]
  category: Categories
}

const root: SxProps = {}

const categoryCtn: SxProps = {
  width: { xs: 0.4, sm: 0.4, md: 0.3 },
  textAlign: { sm: 'right' },
  backgroundColor: 'secondary.main',
  color: 'secondary.contrastText',
  p: 1,
  mb: 3
}

const ProductList = ({ category, products }: Props) => {
  return (
    <Box sx={root}>
      <Box sx={categoryCtn}>
        <Typography variant="h5">{category}</Typography>
      </Box>
      <Grid>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Grid>
    </Box>
  )
}

export default ProductList
