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
  letterSpacing: 1
}

const activeHeroButton = {
  ...button,
  color: 'common.white'
}

const NavLinks = () => {
  const router = useRouter()

  return (
    <Box sx={sx.root}>
      {navLinks.map((link) => (
        <Link key={link.name} href={link.link} passHref>
          <Button
            color={router.pathname === link.link ? 'primary' : 'secondary'}
            variant={router.pathname === link.link ? 'contained' : 'text'}
            sx={router.pathname === '/' ? activeHeroButton : button}
          >
            {link.name}
          </Button>
        </Link>
      ))}
    </Box>
  )
}

export default NavLinks
