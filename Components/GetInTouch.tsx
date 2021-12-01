import { SxProps } from '@mui/system'
import CallIcon from '@mui/icons-material/Call'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

const sx: SxProps = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'secondary.main',
    color: 'common.white',
    width: { xs: 1, md: 0.5 },
    p: 4
  },
  subheading: {
    color: 'grey.400'
  },
  detailsCtn: {
    my: 2,
    mb: 4
  },
  facebookCtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 4
  },
  facebookLink: {
    fontSize: '1.1rem',
    fontFamily: 'Old Standard TT'
  }
}

const GetInTouch = () => {
  return (
    <Box sx={sx.root}>
      <Box>
        <Typography variant="h4" paragraph>
          We&apos;d love to hear from you
        </Typography>
        <Typography sx={sx.subheading}>
          Get in touch with us by filling up the form for orders and inquiries.
        </Typography>
      </Box>

      <Box sx={sx.detailsCtn}>
        <List>
          <ListItem>
            <ListItemIcon>
              <CallIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="+0123 - 456 - 789" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="123 Doña Consuelo St. Caloocan City" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon color="primary" />
            </ListItemIcon>
            <Typography>
              <Link href="#">
                <a>coffee@gmail.com</a>
              </Link>
            </Typography>
          </ListItem>
        </List>
      </Box>

      <Box sx={sx.facebookCtn}>
        <Link href="#">
          <a>
            <FacebookIcon fontSize="large" color="primary" />
          </a>
        </Link>
        <Typography sx={sx.facebookLink}>
          <Link href="#">
            <a>facebook.com/coffee</a>
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default GetInTouch
