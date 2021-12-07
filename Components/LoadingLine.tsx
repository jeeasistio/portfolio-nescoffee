import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import { m } from 'framer-motion'
import { loadingVariant } from '../animations/loading'

const sx: SxProps = {
  root: {
    py: 2,
    overflow: 'hidden'
  },
  line: {
    width: 1,
    backgroundColor: 'primary.main',
    height: 5,
    borderRadius: 2
  }
}

const LoadingLine = () => {
  return (
    <Box sx={sx.root}>
      <Box
        sx={sx.line}
        component={m.div}
        variants={loadingVariant}
        animate="animate"
      />
    </Box>
  )
}

export default LoadingLine
