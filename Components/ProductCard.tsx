import Product from '../interfaces/Product'
import { Box, Grid, Typography } from '@mui/material'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <Grid>
      <Box></Box>
      <Box>
        <Typography>{product.name}</Typography>
      </Box>
    </Grid>
  )
}

export default ProductCard
