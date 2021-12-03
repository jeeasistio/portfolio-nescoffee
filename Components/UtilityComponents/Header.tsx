import Link from 'next/link'
import { SxProps } from '@mui/system'
import NavLinksMobile from './NavLinksMobile'
import NavLinks from './NavLinks'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const sx: SxProps = {
  appbar: {
    backgroundColor: 'transparent'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'primary.main',
    minHeight: '10vh',
    p: 1,
    py: 2
  }
}

const HeroPageHeader = () => {
  return (
    <AppBar sx={sx.appbar} position="static" elevation={0}>
      <Toolbar sx={sx.toolbar}>
        <Typography variant="h4" component="h1">
          <Link passHref href="/">
            <a>Coffee</a>
          </Link>
        </Typography>
        <NavLinks />
        <NavLinksMobile />
      </Toolbar>
    </AppBar>
  )
}

export default HeroPageHeader
