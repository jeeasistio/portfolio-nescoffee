import { Box, Grid, Typography } from '@mui/material'
import { SxProps } from '@mui/system'
import Image from 'next/image'
import { Product } from '../graphql/generatedTypes'
import StyledButton from './StyledComponents/StyledButton'

const innerCtn = {
  backgroundColor: 'primary.main',
  color: 'secondary.main',
  border: 4,
  boxShadow: 1
}

const imageCtn: SxProps = {
  p: 0.2
}

const textCtn: SxProps = {
  p: 1
}

const textActions: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const description: SxProps = {
  color: 'secondary.light'
}

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <Grid item xs={5.5 as 5} sm={4} md={3} lg={2}>
      <Box sx={innerCtn}>
        <Box sx={imageCtn}>
          <Image
            src="https://i.ibb.co/x1nHqbK/product-coffee-small.jpg"
            alt="product-coffee-small"
            layout="responsive"
            priority
            width={75}
            height={100}
          />
        </Box>
        <Box sx={textCtn}>
          <Typography variant="h6">{product.name}</Typography>
          <Typography sx={description} variant="body2" paragraph>
            {product.description}
          </Typography>
          <Box sx={textActions}>
            <StyledButton variant="contained" color="secondary" size="small">
              Order
            </StyledButton>
            <Typography variant="h5">₱{product.price}</Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default ProductCard
