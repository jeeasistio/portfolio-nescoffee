import { Box } from '@mui/material'
import { SxProps } from '@mui/system'
import Copyright from './Copyright'

const root: SxProps = {
  p: 4,
  backgroundColor: 'secondary.main',
  color: 'common.white',
  minHeight: '10vh'
}

const Footer = () => {
  return (
    <Box component="footer" sx={root}>
      <Copyright />
    </Box>
  )
}

export default Footer
