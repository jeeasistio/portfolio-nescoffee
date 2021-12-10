import { navLinks } from './NavLinksMobile'
import { SxProps } from '@mui/system'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const sx: SxProps = {
  root: {
    display: { xs: 'none', md: 'flex' }
  }
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
  ...activeButton,
  color: 'secondary.contrastText'
}

const NavLinks = () => {
  const router = useRouter()

  return (
    <Box sx={sx.root}>
      {navLinks.map((link) => (
        <Link key={link.name} href={link.link} passHref>
          <Button
            size="large"
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
