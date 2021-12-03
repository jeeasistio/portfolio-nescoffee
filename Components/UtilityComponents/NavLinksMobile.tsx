import MenuSharpIcon from '@mui/icons-material/MenuSharp'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'

const sx: SxProps = {
  root: {
    display: { sm: 'none' }
  },
  linkText: {
    letterSpacing: 1
  }
}

export const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'Products', link: '/products' },
  { name: 'Contacts', link: '/contacts' }
]

const NavLinksMobile = () => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const anchorEl = useRef(null)

  const handleOpen = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }

  return (
    <Box sx={sx.root}>
      <IconButton ref={anchorEl} color="inherit" onClick={handleOpen}>
        <MenuSharpIcon />
      </IconButton>
      <Menu open={show} anchorEl={anchorEl.current} onClose={handleClose}>
        <MenuList>
          {navLinks.map((link) => (
            <MenuItem selected={router.pathname === link.link} key={link.name}>
              <ListItemText sx={sx.linkText}>
                <Link href={link.link}>
                  <a>{link.name}</a>
                </Link>
              </ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  )
}

export default NavLinksMobile
