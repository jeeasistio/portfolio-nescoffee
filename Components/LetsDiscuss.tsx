import { Box, Typography } from '@mui/material'
import StyledButton from './StyledComponents/StyledButton'
import Image from 'next/image'
import { SxProps } from '@mui/system'

const root: SxProps = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  my: 4
}

const textCtn: SxProps = {
  backgroundColor: 'secondary.main',
  color: 'common.white',
  p: 4,
  width: { md: 0.6 },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly'
}

const textCtnActions: SxProps = {
  display: { md: 'flex' },
  justifyContent: { md: 'space-between' },
  alignItems: { md: 'center' }
}

const heading: SxProps = {
  width: { md: 0.8 }
}

const subheading: SxProps = {
  color: 'grey.400',
  width: 0.7,
  mb: { xs: 4, md: 0 }
}

const imageCtn: SxProps = {
  width: { md: 0.4 },
  display: 'flex',
  justifyContent: 'center',
  p: 4
}

const imageCtnInner: SxProps = {
  position: 'relative',
  width: { xs: 0.5, sm: 0.4, md: 0.8, lg: 0.6 },
  height: { xs: 300, sm: 400, lg: 500 },
  boxShadow: { xs: '15px 15px #D7A55B', sm: '30px 30px #D7A55B' }
}

const LetsDiscuss = () => {
  return (
    <Box sx={root}>
      <Box sx={textCtn}>
        <Typography sx={heading} variant="h4" paragraph>
          Let&apos;s Discuss About Your Opinions
        </Typography>
        <Box sx={textCtnActions}>
          <Typography sx={subheading}>
            We always provide our the best to make the customer pleasant with
            our services.Ut id lorem urna. Nullam vestibulum odio eget ex
            molestie lacinia.
          </Typography>
          <StyledButton variant="contained">Contact us</StyledButton>
        </Box>
      </Box>

      <Box sx={imageCtn}>
        <Box sx={imageCtnInner}>
          <Image
            src="https://i.ibb.co/ph46R46/coffee-with-telephone-small.jpg"
            alt="coffee-with-telephone-small"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default LetsDiscuss
