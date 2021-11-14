import { Box } from '@mui/material'
import { SxProps } from '@mui/system'

const root: SxProps = {
  display: { xs: 'none', sm: 'block' },
  width: { sm: 0.5, md: 0.3, lg: 0.25, xl: 0.2 },
  height: '100vh',
  backgroundColor: 'secondary.main',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: -1
}

const BlackBoxBackground = () => {
  return <Box sx={root}></Box>
}

export default BlackBoxBackground
