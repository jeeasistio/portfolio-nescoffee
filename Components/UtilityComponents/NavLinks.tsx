import { navLinks } from './NavLinksMobile'
import { Box, Button } from '@mui/material'
import { SxProps } from '@mui/system'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

const root: SxProps = {
  display: { xs: 'none', sm: 'flex' }
}

const button: SxProps = {
  textTransform: 'none',
  borderRadius: 0,
  color: 'secondary.main',
  letterSpacing: 1
}

const activeButton: SxProps = {
  ...button,
  color: 'primary.main',
  borderBottom: 2
}

const heroButton: SxProps = {
  ...button,
  color: 'common.white'
}

const heroActiveButton: SxProps = {
  ...button,
  color: 'secondary.contrastText',
  borderBottom: 2
}

const NavLinks = () => {
  const router = useRouter()

  return (
    <Box sx={root}>
      {navLinks.map((link) => (
        <Link key={link.name} href={link.link} passHref>
          <Button
            sx={
              router.pathname === '/' && router.pathname === link.link
                ? heroActiveButton
                : router.pathname === '/' && router.pathname !== link.link
                ? heroButton
                : router.pathname === link.link
                ? activeButton
                : button
            }
          >
            {link.name}
          </Button>
        </Link>
      ))}
    </Box>
  )
}

export default NavLinks
