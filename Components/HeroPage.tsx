import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'
import { m } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  heroButtonCtnVariant,
  heroButtonVariant
} from '../animations/heroButton'
import { heroHeadingVariant } from '../animations/heroHeading'
import { heroImageVariant, imageShadowVariant } from '../animations/heroImage'
import { marquee } from '../animations/marquee'
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
    width: { xs: 150, sm: 225, md: 360 },
    height: { xs: 260, sm: 390, md: 624 }
  },
  imageShadow: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 1,
    height: 1,
    backgroundColor: 'primary.main'
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
    color: 'secondary.light'
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
    my: 3,
    zIndex: -1
  },
  wordsInnerCtn: {
    width: { sm: 0.5 },
    overflow: 'hidden',
    position: 'relative'
  },
  words: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  words2: {
    width: '100%',
    position: 'absolute',
    right: '100%',
    top: 0,
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  listItem: {
    textAlign: 'center',
    whiteSpace: 'nowrap'
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

const headingWords = `Have\u00a0a\u00a0break.`.split('')

const words = ['Refreshing', 'Pure Coffee', 'Creamy']

const HeroPage = () => {
  return (
    <Box sx={sx.root} component="section">
      <BlackBoxBackground />
      <Box sx={sx.background} />

      <Box sx={sx.imageCtnOuter}>
        <Box
          sx={sx.imageCtnInner}
          component={m.div}
          variants={heroImageVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Box
            sx={sx.imageShadow}
            component={m.div}
            variants={imageShadowVariant}
          />
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
          <Box
            sx={sx.headingCtn}
            component={m.div}
            variants={heroHeadingVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {headingWords.map((char, index) => (
              <Typography
                sx={sx.heading}
                component={m.h2}
                key={index}
                variants={heroHeadingVariant}
                variant="h2"
              >
                {char}
              </Typography>
            ))}
          </Box>

          <Box sx={sx.subheadingCtn}>
            <Typography sx={sx.subheading}>
              Boost your productivity and build your mood with a glass of{' '}
              <Typography component="span" sx={sx.coffeeSubheading}>
                COFFEE
              </Typography>{' '}
              in the morning.
            </Typography>
          </Box>

          <Box
            sx={sx.buttonsCtn}
            component={m.div}
            variants={heroButtonCtnVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <m.div variants={heroButtonVariant}>
              <Link href="/products" passHref>
                <StyledButton size="large" color="primary" variant="contained">
                  See our products
                </StyledButton>
              </Link>
            </m.div>

            <m.div variants={heroButtonVariant}>
              <Link href="/contacts" passHref>
                <StyledButton
                  size="large"
                  color="secondary"
                  variant="contained"
                >
                  Talk to us
                </StyledButton>
              </Link>
            </m.div>
          </Box>
        </Box>

        <Box sx={sx.wordsCtn}>
          <Box sx={sx.wordsInnerCtn}>
            <List
              sx={sx.words}
              component={m.ul}
              variants={marquee}
              animate="animate"
              initial="initial"
            >
              {words.map((word, index) => (
                <ListItem key={index} sx={sx.listItem}>
                  <ListItemText primary={word} />
                </ListItem>
              ))}
            </List>
            <List
              sx={sx.words2}
              component={m.ul}
              variants={marquee}
              animate="animate"
              initial="initial"
            >
              {words.map((word, index) => (
                <ListItem key={index} sx={sx.listItem}>
                  <ListItemText primary={word} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HeroPage
