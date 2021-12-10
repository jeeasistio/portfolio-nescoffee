import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { m } from 'framer-motion'
import { boxBackgroundVariant } from '../../animations/boxBackground'

const sx: SxProps = {
  root: {
    display: { xs: 'none', md: 'block' },
    width: { sm: 0.5, md: 0.3, lg: 0.25, xl: 0.2 },
    height: '100vh',
    backgroundColor: 'secondary.main',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: -1
  }
}

const BlackBoxBackground = () => {
  return (
    <Box
      sx={sx.root}
      component={m.div}
      variants={boxBackgroundVariant}
      initial="hidden"
      animate="show"
    />
  )
}

export default BlackBoxBackground
