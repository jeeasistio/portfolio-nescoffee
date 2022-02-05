import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import Image from 'next/image'
import { fadeFromBottom } from '../animations/fadeFromBottom'
import { Product } from '../graphql/generatedTypes'
import StyledButton from './StyledComponents/StyledButton'
import { m } from 'framer-motion'
import useContact from '../hooks/useContact'
import { useRouter } from 'next/router'

const sx: SxProps = {
  innerCtn: {
    backgroundColor: 'primary.main',
    color: 'secondary.main',
    border: 4,
    boxShadow: 1
  },
  imageCtn: {
    p: 0.5
  },
  image: {
    boxShadow:
      'inset 0px 7px 8px -4px rgba(0,0,0,0.2),inset 0px 12px 17px 2px rgba(0,0,0,0.14),inset 0px 5px 22px 4px rgba(0,0,0,0.12)'
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
    color: 'secondary.light',
    height: 100,
    overflow: 'hidden'
  }
}

interface Props {
  product: Product
  index: number
}

const ProductCard = ({ product, index }: Props) => {
  const { handleProductOrder } = useContact()
  const router = useRouter()

  const handleClick = () => {
    handleProductOrder(product.name)
    router.push('/contacts')
  }

  return (
    <Grid item xs={5.5} sm={4} md={3} lg={2}>
      <Box
        sx={sx.innerCtn}
        custom={index}
        component={m.div}
        variants={fadeFromBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Box sx={sx.imageCtn}>
          <Image
            src={product.image}
            alt={product.alt}
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
            <StyledButton
              variant="contained"
              color="secondary"
              size="small"
              onClick={handleClick}
            >
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
