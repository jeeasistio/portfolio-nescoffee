import StyledButton from './StyledComponents/StyledButton'
import Image from 'next/image'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { m } from 'framer-motion'
import { imageShadowVariant, letsDiscussVariant } from '../animations/heroImage'
import Link from 'next/link'
import useContact from '../hooks/useContact'

const sx: SxProps = {
  root: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    my: 12
  },
  textCtn: {
    backgroundColor: 'secondary.main',
    color: 'common.white',
    p: 4,
    width: { md: 0.6 },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  textCtnActions: {
    display: { md: 'flex' },
    justifyContent: { md: 'space-between' },
    alignItems: { md: 'center' }
  },
  heading: {
    width: { md: 0.8 }
  },
  subheading: {
    color: 'grey.400',
    width: 0.7,
    mb: { xs: 4, md: 0 }
  },
  imageCtn: {
    width: { md: 0.4 },
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'center',
    p: 4
  },
  imageCtnInner: {
    position: 'relative',
    width: { xs: 0.5, sm: 0.4, md: 0.8, lg: 0.6 },
    height: { xs: 300, sm: 400, lg: 500 }
  },
  imageShadow: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 1,
    height: 1,
    backgroundColor: 'primary.main'
  }
}

const LetsDiscuss = () => {
  const { handleContactUs } = useContact()

  return (
    <Box sx={sx.root}>
      <Box sx={sx.textCtn}>
        <Typography sx={sx.heading} variant="h3" paragraph>
          Let&apos;s Discuss About Your Opinions
        </Typography>
        <Box sx={sx.textCtnActions}>
          <Typography sx={sx.subheading}>
            We always provide our the best to make the customer pleasant with
            our services. Please feel free to message us and tell us about your
            honest opinions.
          </Typography>
          <Link href="/contacts" passHref>
            <StyledButton size="large" variant="contained" onClick={handleContactUs}>
              Contact us
            </StyledButton>
          </Link>
        </Box>
      </Box>

      <Box sx={sx.imageCtn}>
        <Box
          sx={sx.imageCtnInner}
          component={m.div}
          variants={letsDiscussVariant}
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
            src="/coffee_with_telephone_small.jpg"
            alt="coffee-with-telephone-small"
            layout="fill"
            objectFit="cover"
            priority
          />
        </Box>
      </Box>
    </Box>
  )
}

export default LetsDiscuss
