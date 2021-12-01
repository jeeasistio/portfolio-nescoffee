import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import Copyright from './Copyright'

const sx: SxProps = {
  root: {
    p: 4,
    backgroundColor: 'secondary.main',
    color: 'common.white',
    minHeight: '10vh'
  }
}

const Footer = () => {
  return (
    <Box component="footer" sx={sx.root}>
      <Copyright />
    </Box>
  )
}

export default Footer
