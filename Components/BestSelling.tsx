import { SxProps } from '@mui/system'
import BestSellingProduct from './BestSellingProduct'
import { motion } from 'framer-motion'
import { bestSellingVariant } from '../animations/bestSelling'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

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

const sx: SxProps = {
  root: {
    my: 12
  },
  bestSellingCtn: {
    width: { xs: 0.5, sm: 0.4, md: 0.3, lg: 0.2, xl: 0.1 },
    textAlign: { sm: 'right' },
    backgroundColor: 'secondary.main',
    color: 'secondary.contrastText',
    p: 2,
    mb: 3,
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-evenly',
    p: 1,
    gap: 1
  }
}

const BestSelling = () => {
  return (
    <Box sx={sx.root}>
      <motion.div
        variants={bestSellingVariant}
        initial="hidden"
        whileInView="show"
      >
        <Box sx={sx.bestSellingCtn}>
          <Typography variant="h5">Best Selling</Typography>
        </Box>
      </motion.div>

      <Grid container sx={sx.grid}>
        {bestSellers.map((product, index) => (
          <BestSellingProduct key={index} product={product} />
        ))}
      </Grid>
    </Box>
  )
}

export default BestSelling
