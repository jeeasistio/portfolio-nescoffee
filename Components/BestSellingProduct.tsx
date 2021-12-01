import Image from 'next/image'
import { SxProps } from '@mui/system'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import {
  bestSellingProductsVariant,
  imageVariant
} from '../animations/bestSellingProducts'
import { motion, useAnimation } from 'framer-motion'

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

const sx: SxProps = {
  innerCtn: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'primary.main',
    borderRadius: 0,
    border: 4,
    boxShadow: 1,
    p: 0.2,
    overflow: 'hidden',
    position: 'relative'
  },
  textCtn: { p: 1, width: 1 },
  imageCtn: { position: 'relative', width: 1, overflow: 'hidden' },
  description: {
    fontSize: 'small',
    fontWeight: 'medium'
  },
  orderNow: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'secondary.main',
    color: 'common.white',
    display: 'flex',
    width: 0.5,
    height: 1
  }
}

const BestSellingProduct = ({ product }: Props) => {
  const orderNowControls = useAnimation()
  const imageControls = useAnimation()

  const handleHover = () => {
    orderNowControls.start('show')
    imageControls.start('big')
  }

  const handleNotHover = () => {
    orderNowControls.start('hidden')
    imageControls.start('normal')
  }

  return (
    <Grid item xs={12} sm={8} md={5} lg={3.9}>
      <Box
        sx={sx.innerCtn}
        component={motion.div}
        onHoverStart={handleHover}
        onHoverEnd={handleNotHover}
      >
        <Box sx={sx.imageCtn}>
          <motion.div
            variants={imageVariant}
            animate={imageControls}
            initial="normal"
          >
            <Image
              src={product.image.src}
              alt={product.image.alt}
              layout="responsive"
              width="80%"
              height="100%"
            />
          </motion.div>
        </Box>
        <Box sx={sx.textCtn}>
          <Typography variant="h4" paragraph>
            {product.name}
          </Typography>
          <Typography sx={sx.description}>{product.description}</Typography>

          <Box
            sx={sx.orderNow}
            component={motion.div}
            variants={bestSellingProductsVariant}
            animate={orderNowControls}
            initial="hidden"
          >
            <CardActionArea>
              <Typography variant="h5" paragraph>
                Order Now!
              </Typography>
              <ArrowForwardIcon fontSize="large" />
            </CardActionArea>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default BestSellingProduct
