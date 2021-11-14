import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import { SxProps } from '@mui/system'
import Image from 'next/image'
import StyledButton from './StyledComponents/StyledButton'
import BlackBoxBackground from './UtilityComponents/BlackBoxBackground'

const root: SxProps = {
  height: '90vh',
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row-reverse' },
  overflowX: 'hidden',
  mb: 4
}

const imageCtnOuter: SxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: { xs: 0.4, sm: 1 },
  width: { xs: 1, sm: 1 / 2 }
}

const imageCtnInner: SxProps = {
  position: 'relative',
  boxShadow: { xs: '15px 15px #D7A55B', sm: '30px 30px #D7A55B' },
  width: { xs: 150, sm: 225, md: 360 },
  height: { xs: 260, sm: 390, md: 624 }
}

const textCtnOuter: SxProps = {
  height: { xs: 0.6, sm: 1 },
  width: { xs: 1, sm: 1 / 2 },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const textCtnInner: SxProps = {
  ml: { sm: 2, lg: 8 },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flexGrow: 2,
  p: 1
}

const heading: SxProps = {
  textShadow: '0px 4px 4px #00000040',
  fontWeight: 'bold',
  textAlign: { xs: 'center', sm: 'left' }
}

const subheadingCtn: SxProps = {
  mb: 8,
  textAlign: { xs: 'center', sm: 'left' },
  width: { sm: 0.7 }
}

const subheading: SxProps = {
  color: 'text.secondary'
}

const coffeeSubheading: SxProps = {
  display: 'inline',
  color: 'primary.main'
}

const buttonsCtn: SxProps = {
  width: '100%',
  display: 'flex',
  justifyContent: { xs: 'space-evenly', sm: 'flex-start' },
  mb: 4,
  gap: 2
}

const wordsCtn: SxProps = {
  backgroundColor: 'secondary.main',
  color: 'grey.400',
  width: '100vw',
  py: 0.5,
  my: 3,
  zIndex: -1
}

const words: SxProps = {
  width: { sm: 0.5 },
  display: 'flex',
  justifyContent: 'space-evenly'
}

const listItem: SxProps = {
  textAlign: 'center'
}

const HeroPage = () => {
  return (
    <Box sx={root}>
      <Box sx={imageCtnOuter}>
        <Box sx={imageCtnInner}>
          <Image
            src="https://i.ibb.co/nsxfsvB/hero-page-image-small.jpg"
            alt="hero-page-image-small"
            layout="fill"
            priority
          />
        </Box>
      </Box>

      <Box sx={textCtnOuter}>
        <Box sx={textCtnInner}>
          <Box mb={1}>
            <Typography sx={heading} variant="h3">
              Have a break.
            </Typography>
          </Box>

          <Box sx={subheadingCtn}>
            <Typography sx={subheading} variant="body2">
              Boost your productivity and build your mood with a glass of{' '}
              <Typography component="span" sx={coffeeSubheading}>
                COFFEE
              </Typography>{' '}
              in the morning.
            </Typography>
          </Box>

          <Box sx={buttonsCtn}>
            <StyledButton size="large" color="primary" variant="contained">
              See our products
            </StyledButton>

            <StyledButton size="large" color="secondary" variant="contained">
              Talk to us
            </StyledButton>
          </Box>
        </Box>

        <Box sx={wordsCtn}>
          <List sx={words} dense>
            <ListItem sx={listItem}>
              <ListItemText
                primary="Refreshing"
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
            <ListItem sx={listItem}>
              <ListItemText
                primary="Pure Coffee"
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
            <ListItem sx={listItem}>
              <ListItemText
                primary="Creamy"
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
          </List>
        </Box>
      </Box>

      <BlackBoxBackground />
    </Box>
  )
}

export default HeroPage
