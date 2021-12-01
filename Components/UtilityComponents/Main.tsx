import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'

const sx: SxProps = {
  root: {
    minHeight: '80vh'
  }
}

interface Props {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <Box component="main" sx={sx.root}>
      {children}
    </Box>
  )
}

export default Main
