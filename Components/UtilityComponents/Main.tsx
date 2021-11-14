import { Box } from '@mui/material'
import { SxProps } from '@mui/system'

const root: SxProps = {
  minHeight: '80vh'
}

interface Props {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <Box component="main" sx={root}>
      {children}
    </Box>
  )
}

export default Main
