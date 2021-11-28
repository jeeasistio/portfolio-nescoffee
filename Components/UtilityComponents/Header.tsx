import { AppBar, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { SxProps } from '@mui/system'
import NavLinksMobile from './NavLinksMobile'
import NavLinks from './NavLinks'

const appbar: SxProps = {
  backgroundColor: 'transparent'
}

const toolbar: SxProps = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'primary.main',
  minHeight: '10vh',
  p: 1,
  py: 2
}

const HeroPageHeader = () => {
  return (
    <AppBar sx={appbar} position="static" elevation={0}>
      <Toolbar sx={toolbar}>
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
