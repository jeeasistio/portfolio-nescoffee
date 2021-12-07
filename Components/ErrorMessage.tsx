import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'

const sx: SxProps = {
  root: {
    backgroundColor: 'secondary.main',
    color: 'secondary.contrastText',
    textAlign: 'center',
    py: 2
  }
}

const ErrorMessage = () => {
  return (
    <Box sx={sx.root}>
      <Typography variant="h5">
        Something went wrong. Please try refreshing the page or visit again
        later.
      </Typography>
    </Box>
  )
}

export default ErrorMessage
