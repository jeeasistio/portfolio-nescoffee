import { SxProps } from '@mui/system'
import BestSellingProduct from './BestSellingProduct'
import { m } from 'framer-motion'
import { fadeFromLeft } from '../animations/fadeFromLeft'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const bestSellers = [
  {
    image: {
      src: '/chocoffee_shake.jpg',
      alt: 'chocoffee-shake'
    },
    name: 'Chocoffee Shake',
    description:
      'Rich and creamy coffee, filled with chocolate syrup topped with sundae.'
  },
  {
    image: {
      src: '/frappuccino.jpg',
      alt: 'frappuccino'
    },
    name: 'Frappuccino',
    description:
      'Coffee blended with ice and chocolate topped with sweet whipped cream.'
  },
  {
    image: {
      src: '/iced_chocoffee.jpg',
      alt: 'iced_chocoffee'
    },
    name: 'Iced Chocoffee',
    description: 'Espresso blended with a bit milk and chocolate flavoring.'
  }
]

const sx: SxProps = {
  root: {
    my: 12
  },
  bestSellingCtn: {
    width: { xs: 0.6, sm: 0.4, md: 0.3, lg: 0.2, xl: 0.1 },
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
      <Box
        sx={sx.bestSellingCtn}
        component={m.div}
        variants={fadeFromLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Typography variant="h4">Best Selling</Typography>
      </Box>

      <Grid container sx={sx.grid}>
        {bestSellers.map((product, index) => (
          <BestSellingProduct key={index} product={product} />
        ))}
      </Grid>
    </Box>
  )
}

export default BestSelling
