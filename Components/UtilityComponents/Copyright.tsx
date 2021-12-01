import Link from 'next/link'
import { SxProps } from '@mui/system'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const sx: SxProps = {
  root: {
    mt: 'auto'
  }
}

const Copyright = () => {
  return (
    <Box sx={sx.root}>
      <Typography color="inherit">
        &copy; {new Date().getFullYear()}{' '}
        <Link href="#">
          <a>localhost</a>
        </Link>
      </Typography>
    </Box>
  )
}

export default Copyright
