import { Box, Grid, Typography } from '@mui/material'
import { SxProps } from '@mui/system'
import Image from 'next/image'

const root: SxProps = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'space-around',
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
  width: '100%',
  alignSelf: 'flex-end'
}

const review1ImageCtn: SxProps = {
  position: 'relative',
  width: '100%',
  height: 500
}

const review1Text: SxProps = {
  position: 'absolute',
  top: '5%',
  left: { xs: '-20%', sm: '-50%', md: '-40%' },
  right: { xs: '70%', md: '80%' },
  backgroundColor: 'primary.main',
  color: 'primary.contrastText',
  zIndex: 1,
  p: 2,
  boxShadow: 1
}

const review2: SxProps = {
  position: 'relative',
  width: '100%',
  alignSelf: 'flex-start'
}

const review2ImageCtn: SxProps = {
  position: 'relative',
  width: '100%',
  height: 400
}

const review2Text: SxProps = {
  position: 'absolute',
  bottom: { xs: '-5%' },
  right: '-20%',
  left: '70%',
  backgroundColor: 'primary.main',
  color: 'primary.contrastText',
  zIndex: 1,
  p: 2,
  boxShadow: 1
}

// TODO: Reviews xl breakpoint

const Reviews = () => {
  return (
    <Grid container sx={root}>
      <Grid item xs={12} md={4} sx={smileCtn}>
        <Typography variant="h4">smile.</Typography>
        <Typography variant="h4">breathe.</Typography>
        <Typography variant="h4" paragraph>
          and go slowly.
        </Typography>
        <Typography>- thich nhat hanh</Typography>
      </Grid>

      <Grid item xs={10} sm={8} md={4} sx={review1}>
        <Box sx={review1ImageCtn}>
          <Image
            src="https://i.ibb.co/Cm1PD1B/review-coffee-small.jpg"
            alt="review-coffee-small"
            layout="fill"
            objectFit="cover"
            priority
          />
        </Box>
        <Box sx={review1Text}>
          <Typography paragraph>
            “ Aliquam ac purus tortor. Mauris eleifend lectus nulla, egestas
            tincidunt dolor consequat. “
          </Typography>
          <Typography variant="subtitle2" align="right">
            Diana
          </Typography>
          <Typography variant="body2" align="right">
            - Coffee Lover
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={10} md={8} sx={review2}>
        <Box sx={review2ImageCtn}>
          <Image
            src="https://i.ibb.co/QvcxNS6/review-coffee-small-1.jpg"
            alt="review-coffee-small-1"
            layout="fill"
            objectFit="cover"
            priority
          />
        </Box>
        <Box sx={review2Text}>
          <Typography paragraph>
            “ Aliquam ac purus tortor. Mauris eleifend lectus nulla, egestas
            tincidunt dolor consequat. “
          </Typography>
          <Typography variant="subtitle2" align="right">
            Anna
          </Typography>
          <Typography variant="body2" align="right">
            - Artist
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Reviews
