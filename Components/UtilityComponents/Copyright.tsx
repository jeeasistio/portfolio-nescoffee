import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { SxProps } from '@mui/system'

const root: SxProps = {
  mt: 'auto'
}

const Copyright = () => {
  return (
    <Box sx={root}>
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
