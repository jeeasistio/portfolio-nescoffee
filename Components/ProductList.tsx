import ProductCard from './ProductCard'
import { SxProps } from '@mui/system'
import { ProductList } from '../graphql/generatedTypes'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { m } from 'framer-motion'
import { fadeFromLeft } from '../animations/fadeFromLeft'

interface Props extends ProductList {}

const sx: SxProps = {
  root: {
    my: 4,
    mb: 8
  },
  categoryCtn: {
    width: { xs: 0.5, sm: 0.4, md: 0.3, lg: 0.2, xl: 0.1 },
    textAlign: { sm: 'right' },
    backgroundColor: 'secondary.main',
    color: 'secondary.contrastText',
    p: 2,
    mb: 3
  },
  gridCtn: {
    gap: 2,
    p: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  }
}

const ProductList = ({ category, products }: Props) => {
  return (
    <Box sx={sx.root}>
      <Box
        sx={sx.categoryCtn}
        component={m.div}
        variants={fadeFromLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Typography variant="h4">{category}</Typography>
      </Box>
      <Grid sx={sx.gridCtn} container>
        {products?.map((product, index) => (
          <ProductCard key={index} index={index} product={product} />
        ))}
      </Grid>
    </Box>
  )
}

export default ProductList
