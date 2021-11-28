import { Box, Grid, Typography } from '@mui/material'
import ProductCard from './ProductCard'
import { SxProps } from '@mui/system'
import { ProductList } from '../graphql/generatedTypes'

interface Props extends ProductList {}

const root: SxProps = {
  my: 4,
  mb: 12
}

const categoryCtn: SxProps = {
  width: { xs: 0.5, sm: 0.4, md: 0.3, lg: 0.2, xl: 0.1 },
  textAlign: { sm: 'right' },
  backgroundColor: 'secondary.main',
  color: 'secondary.contrastText',
  p: 2,
  mb: 3
}

const gridCtn: SxProps = {
  gap: 2,
  p: 1,
  justifyContent: 'center'
}

const ProductList = ({ category, products }: Props) => {
  return (
    <Box sx={root}>
      <Box sx={categoryCtn}>
        <Typography variant="h5">{category}</Typography>
      </Box>
      <Grid sx={gridCtn} container>
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Grid>
    </Box>
  )
}

export default ProductList
