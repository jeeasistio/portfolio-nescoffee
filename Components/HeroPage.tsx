import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  heroButtonCtnVariant,
  heroButtonVariant
} from '../animations/heroButton'
import { heroHeadingVariant } from '../animations/heroHeading'
import StyledButton from './StyledComponents/StyledButton'
import BlackBoxBackground from './UtilityComponents/BlackBoxBackground'

const sx: SxProps = {
  root: {
    height: '90vh',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row-reverse' },
    overflowX: 'hidden'
  },

  imageCtnOuter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: { xs: 0.4, sm: 1 },
    width: { xs: 1, sm: 1 / 2 }
  },
  imageCtnInner: {
    position: 'relative',
    boxShadow: { xs: '15px 15px #D7A55B', sm: '30px 30px #D7A55B' },
    width: { xs: 150, sm: 225, md: 360 },
    height: { xs: 260, sm: 390, md: 624 }
  },
  textCtnOuter: {
    height: { xs: 0.6, sm: 1 },
    width: { xs: 1, sm: 1 / 2 },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textCtnInner: {
    ml: { sm: 2, lg: 8 },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 2,
    p: 1
  },
  headingCtn: {
    display: 'flex',
    overflow: 'hidden',
    mb: 1
  },
  heading: {
    textShadow: '0px 4px 4px #00000040',
    fontWeight: 'bold',
    textAlign: { xs: 'center', sm: 'left' }
  },
  subheadingCtn: {
    mb: 8,
    textAlign: { xs: 'center', sm: 'left' },
    width: { sm: 0.7 }
  },
  subheading: {
    color: 'text.secondary'
  },
  coffeeSubheading: {
    display: 'inline',
    color: 'primary.main'
  },
  buttonsCtn: {
    width: '100%',
    display: 'flex',
    justifyContent: { xs: 'space-evenly', sm: 'flex-start' },
    mb: 4,
    gap: 2
  },
  wordsCtn: {
    backgroundColor: 'secondary.main',
    color: 'grey.400',
    width: '100vw',
    py: 0.5,
    my: 3,
    zIndex: -1
  },
  words: {
    width: { sm: 0.5 },
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  listItem: {
    textAlign: 'center'
  },
  background: {
    display: { xs: 'none', md: 'block' },
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100vw',
    height: '100vh',
    background:
      'url(https://i.ibb.co/Qvxd5VG/coffee-background-small-2-edited.jpg)',
    backgroundSize: 'cover',
    zIndex: -2,
    opacity: 0.5,
    filter: 'blur(2px)'
  }
}

const headingWord = `Have\u00a0a\u00a0break.`.split('')

const HeroPage = () => {
  return (
    <Box sx={sx.root}>
      <Box sx={sx.imageCtnOuter}>
        <Box sx={sx.imageCtnInner}>
          <Image
            src="https://i.ibb.co/nsxfsvB/hero-page-image-small.jpg"
            alt="hero-page-image-small"
            layout="fill"
            priority
            objectFit="cover"
          />
        </Box>
      </Box>

      <Box sx={sx.textCtnOuter}>
        <Box sx={sx.textCtnInner}>
          <motion.div
            variants={heroHeadingVariant}
            initial="hidden"
            animate="show"
          >
            <Box sx={sx.headingCtn}>
              {headingWord.map((letter, index) => (
                <motion.div key={index} variants={heroHeadingVariant}>
                  <Typography sx={sx.heading} variant="h3">
                    {letter}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          <Box sx={sx.subheadingCtn}>
            <Typography sx={sx.subheading} variant="body2">
              Boost your productivity and build your mood with a glass of{' '}
              <Typography component="span" sx={sx.coffeeSubheading}>
                COFFEE
              </Typography>{' '}
              in the morning.
            </Typography>
          </Box>

          <motion.div
            variants={heroButtonCtnVariant}
            initial="hidden"
            animate="show"
          >
            <Box sx={sx.buttonsCtn}>
              <motion.div variants={heroButtonVariant}>
                <StyledButton size="large" color="primary" variant="contained">
                  See our products
                </StyledButton>
              </motion.div>

              <motion.div variants={heroButtonVariant}>
                <StyledButton
                  size="large"
                  color="secondary"
                  variant="contained"
                >
                  Talk to us
                </StyledButton>
              </motion.div>
            </Box>
          </motion.div>
        </Box>

        <Box sx={sx.wordsCtn}>
          <List sx={sx.words} dense>
            <ListItem sx={sx.listItem}>
              <ListItemText
                primary="Refreshing"
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
            <ListItem sx={sx.listItem}>
              <ListItemText
                primary="Pure Coffee"
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
            <ListItem sx={sx.listItem}>
              <ListItemText
                primary="Creamy"
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
          </List>
        </Box>
      </Box>

      <BlackBoxBackground />
      <Box sx={sx.background} />
    </Box>
  )
}

export default HeroPage
