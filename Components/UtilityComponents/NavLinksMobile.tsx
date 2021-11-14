import {
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Box
} from '@mui/material'
import MenuSharpIcon from '@mui/icons-material/MenuSharp'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { SxProps } from '@mui/system'

export const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'Products', link: '/products' },
  { name: 'Contact', link: '/contact' }
]

const root: SxProps = {
  display: { sm: 'none' }
}

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
    <Box sx={root}>
      <IconButton ref={anchorEl} color="inherit" onClick={handleOpen}>
        <MenuSharpIcon />
      </IconButton>
      <Menu open={show} anchorEl={anchorEl.current} onClose={handleClose}>
        <MenuList>
          {navLinks.map((link) => (
            <MenuItem selected={router.pathname === link.link} key={link.name}>
              <ListItemText>
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
