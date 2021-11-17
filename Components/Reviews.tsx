import { Box, Grid, Typography } from '@mui/material'
import { SxProps } from '@mui/system'
import Image from 'next/image'

const root: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  my: 4,
  p: 1
}

const smileCtn: SxProps = {
  backgroundColor: 'secondary.main',
  color: 'common.white',
  p: 4
}

const review1: SxProps = {
  position: 'relative',
  width: '100%'
}

const review1Text: SxProps = {
  position: 'absolute',
  top: 20,
  left: 0,
  backgroundColor: 'primary.main',
  color: 'primary.contrastText',
  width: '70%',
  zIndex: 1,
  p: 2,
  boxShadow: 1
}

const Reviews = () => {
  return (
    <Grid container sx={root}>
      <Grid item xs={12} sx={smileCtn}>
        <Typography variant="h4">smile.</Typography>
        <Typography variant="h4">breathe.</Typography>
        <Typography variant="h4" paragraph>
          and go slowly.
        </Typography>
        <Typography>- thich nhat hanh</Typography>
      </Grid>

      <Grid item xs={12} lg={4} sx={review1}>
        <Box sx={{ width: '100%', height: 500 }}></Box>
        <Box sx={review1Text}>
          <Typography>
            “ Aliquam ac purus tortor. Mauris eleifend lectus nulla, egestas
            tincidunt dolor consequat. “
          </Typography>
        </Box>
        <Image
          src="https://i.ibb.co/Cm1PD1B/review-coffee-small.jpg"
          alt="review-coffee-small"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
        />
      </Grid>

      <Grid item xs={12} lg={4} sx={review1}>
        <Box sx={{ width: '100%', height: 500 }}></Box>
        <Box sx={review1Text}>
          <Typography>
            “ Aliquam ac purus tortor. Mauris eleifend lectus nulla, egestas
            tincidunt dolor consequat. “
          </Typography>
        </Box>
        <Image
          src="https://i.ibb.co/QvcxNS6/review-coffee-small-1.jpg"
          alt="review-coffee-small-1"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
        />
      </Grid>
    </Grid>
  )
}

export default Reviews
