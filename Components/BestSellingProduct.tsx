import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'
import { SxProps } from '@mui/system'

interface Product {
  image: {
    src: string
    alt: string
  }
  name: string
  description: string
}

interface Props {
  product: Product
}

const innerCtn: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'primary.main',
  borderRadius: 0,
  border: 4,
  boxShadow: 1
}

const textCtn: SxProps = { p: 1, width: 1 }

const imageCtn: SxProps = { position: 'relative', width: 1, p: 0.3 }

const description: SxProps = { fontSize: 'small', fontWeight: 'medium' }

const BestSellingProduct = ({ product }: Props) => {
  return (
    <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
      <Box sx={innerCtn}>
        <Box sx={imageCtn}>
          <Image
            src={product.image.src}
            alt={product.image.alt}
            layout="responsive"
            width="80%"
            height="100%"
          />
        </Box>
        <Box sx={textCtn}>
          <Typography variant="h4" paragraph>
            {product.name}
          </Typography>
          <Typography sx={description}>{product.description}</Typography>
        </Box>
      </Box>
    </Grid>
  )
}

export default BestSellingProduct
