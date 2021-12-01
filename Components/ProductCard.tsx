import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import Image from 'next/image'
import { Product } from '../graphql/generatedTypes'
import StyledButton from './StyledComponents/StyledButton'

const sx: SxProps = {
  innerCtn: {
    backgroundColor: 'primary.main',
    color: 'secondary.main',
    border: 4,
    boxShadow: 1
  },
  imageCtn: {
    p: 0.2
  },
  textCtn: {
    p: 1
  },
  textActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  description: {
    color: 'secondary.light'
  }
}

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <Grid item xs={5.5} sm={4} md={3} lg={2}>
      <Box sx={sx.innerCtn}>
        <Box sx={sx.imageCtn}>
          <Image
            src="https://i.ibb.co/x1nHqbK/product-coffee-small.jpg"
            alt="product-coffee-small"
            layout="responsive"
            priority
            width={75}
            height={100}
          />
        </Box>
        <Box sx={sx.textCtn}>
          <Typography variant="h6">{product.name}</Typography>
          <Typography sx={sx.description} paragraph>
            {product.description}
          </Typography>
          <Box sx={sx.textActions}>
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
