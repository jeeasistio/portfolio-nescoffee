import { SxProps } from '@mui/system'
import NavLinksMobile from './NavLinksMobile'
import NavLinks from './NavLinks'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Link from 'next/link'

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
    p: 1
  },
  logo: {}
}

const HeroPageHeader = () => {
  return (
    <AppBar sx={sx.appbar} position="static" elevation={0}>
      <Toolbar sx={sx.toolbar}>
        <Box sx={sx.logo}>
          <Link href="/" passHref>
            <a>
              <Image
                src="https://i.ibb.co/b1rY22n/coffee-logo.png"
                width="150"
                height="50"
                alt="logo"
              />
            </a>
          </Link>
        </Box>
        <NavLinks />
        <NavLinksMobile />
      </Toolbar>
    </AppBar>
  )
}

export default HeroPageHeader
