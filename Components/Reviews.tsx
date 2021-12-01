import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import Image from 'next/image'

const sx: SxProps = {
  root: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: { xs: 'center', md: 'space-between' },
    alignItems: 'center',
    gap: 2,
    my: 12,
    p: 1
  },
  smileCtn: {
    backgroundColor: 'secondary.main',
    color: 'common.white',
    p: 4
  },
  review1: {
    position: 'relative',
    width: 1,
    alignSelf: 'flex-end'
  },
  review1ImageCtn: {
    position: 'relative',
    width: 1,
    height: { xs: 500, lg: 700 }
  },
  review1Text: {
    position: 'absolute',
    top: '5%',
    left: { xs: '-20%', sm: '-50%' },
    right: { xs: '70%', md: '80%' },
    backgroundColor: 'primary.main',
    color: 'primary.contrastText',
    zIndex: 1,
    p: 2,
    boxShadow: 1
  },
  review2: {
    position: 'relative',
    width: 1,
    alignSelf: 'flex-start'
  },
  review2ImageCtn: {
    position: 'relative',
    width: 1,
    height: 400
  },
  review2Text: {
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
}

const Reviews = () => {
  return (
    <Grid container sx={sx.root}>
      <Grid item xs={12} md={4} sx={sx.smileCtn}>
        <Typography variant="h4">smile.</Typography>
        <Typography variant="h4">breathe.</Typography>
        <Typography variant="h4" paragraph>
          and go slowly.
        </Typography>
        <Typography>- thich nhat hanh</Typography>
      </Grid>

      <Grid item xs={10} sm={8} md={4} sx={sx.review1}>
        <Box sx={sx.review1ImageCtn}>
          <Image
            src="https://i.ibb.co/Cm1PD1B/review-coffee-small.jpg"
            alt="review-coffee-small"
            layout="fill"
            objectFit="cover"
            priority
          />
        </Box>
        <Box sx={sx.review1Text}>
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

      <Grid item xs={10} md={8} lg={6} sx={sx.review2}>
        <Box sx={sx.review2ImageCtn}>
          <Image
            src="https://i.ibb.co/QvcxNS6/review-coffee-small-1.jpg"
            alt="review-coffee-small-1"
            layout="fill"
            objectFit="cover"
            priority
          />
        </Box>
        <Box sx={sx.review2Text}>
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
