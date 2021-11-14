import { Grid, Typography } from '@mui/material'
import { SxProps } from '@mui/system'

const root: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  my: 4
}

const smileCtn: SxProps = {
  backgroundColor: 'secondary.main',
  color: 'common.white',
  p: 4
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
    </Grid>
  )
}

export default Reviews
