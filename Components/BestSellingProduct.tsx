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
import { m, useAnimation } from 'framer-motion'

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
  borderFix: {
    p: 0.5,
    backgroundColor: 'secondary.main'
  },
  innerCtn: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'primary.main',
    borderRadius: 0,
    boxShadow: 1,
    p: 0.5,
    overflow: 'hidden',
    position: 'relative'
  },
  textCtn: { p: 1, width: 1 },
  imageCtn: { position: 'relative', width: 1, overflow: 'hidden' },
  description: {
    fontWeight: 'medium',
    color: 'secondary.light'
  },
  orderNow: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'secondary.main',
    color: 'common.white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
      <Box sx={sx.borderFix}>
        <CardActionArea>
          <Box
            sx={sx.innerCtn}
            component={m.div}
            onHoverStart={handleHover}
            onHoverEnd={handleNotHover}
          >
            <Box sx={sx.imageCtn}>
              <m.div
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
              </m.div>
            </Box>
            <Box sx={sx.textCtn}>
              <Typography variant="h4" paragraph>
                {product.name}
              </Typography>
              <Typography variant="subtitle1" sx={sx.description}>
                {product.description}
              </Typography>

              <Box
                sx={sx.orderNow}
                component={m.div}
                variants={bestSellingProductsVariant}
                animate={orderNowControls}
                initial="hidden"
              >
                <Typography variant="h5" paragraph>
                  Order Now!
                </Typography>
                <ArrowForwardIcon fontSize="large" />
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Box>
    </Grid>
  )
}

export default BestSellingProduct
