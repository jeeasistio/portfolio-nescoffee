import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import { SxProps } from '@mui/system'
import Image from 'next/image'
import { fadeFromBottom } from '../animations/fadeFromBottom'
import { Product } from '../graphql/generatedTypes'
import StyledButton from './StyledComponents/StyledButton'
import { m } from 'framer-motion'

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
          <Skeleton width={75} height={100} />
        </Box>
        <Box sx={sx.textCtn}>
          <Typography variant="h6">
            <Skeleton />
          </Typography>
          <Typography sx={sx.description} paragraph>
            <Skeleton />
          </Typography>
          <Box sx={sx.textActions}>
            <StyledButton variant="contained" color="secondary" size="small">
              <Skeleton />
            </StyledButton>
            <Typography variant="h5">
              <Skeleton />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}

export default ProductCard
