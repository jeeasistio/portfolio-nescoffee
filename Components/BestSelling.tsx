import { Box, Typography, Grid } from '@mui/material'
import { SxProps } from '@mui/system'
import BestSellingProduct from './BestSellingProduct'

const bestSellers = [
  {
    image: {
      src: 'https://i.ibb.co/x1nHqbK/product-coffee-small.jpg',
      alt: 'product-coffee-small'
    },
    name: 'Coffee',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam atmattis velit.'
  },
  {
    image: {
      src: 'https://i.ibb.co/x1nHqbK/product-coffee-small.jpg',
      alt: 'product-coffee-small'
    },
    name: 'Coffee',
    description:
      'Curabitur eleifend finibus quam et maximus. Sed ac nisi in libero elementum.'
  },
  {
    image: {
      src: 'https://i.ibb.co/x1nHqbK/product-coffee-small.jpg',
      alt: 'product-coffee-small'
    },
    name: 'Coffee',
    description:
      'Aliquam varius sapien id aliquet lobortis. Etiam ultrices urna nisl.'
  }
]

const root: SxProps = {
  my: 4
}

const bestSellingCtn: SxProps = {
  width: { xs: 0.6, sm: 0.4, md: 0.3 },
  textAlign: { sm: 'right' },
  backgroundColor: 'secondary.main',
  color: 'secondary.contrastText',
  p: 2,
  mb: 3
}

const grid: SxProps = {
  display: 'flex',
  justifyContent: 'space-evenly',
  p: 1,
  gap: 2
}

const BestSelling = () => {
  return (
    <Box sx={root}>
      <Box sx={bestSellingCtn}>
        <Typography variant="h5">Best Selling</Typography>
      </Box>

      <Grid container sx={grid}>
        {bestSellers.map((product, index) => (
          <BestSellingProduct key={index} product={product} />
        ))}
      </Grid>
    </Box>
  )
}

export default BestSelling
