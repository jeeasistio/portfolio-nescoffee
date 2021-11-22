import { Box } from '@mui/material'
import ContactForm from './ContactForm'
import GetInTouch from './GetInTouch'
import { SxProps } from '@mui/system'

const root: SxProps = {
  display: 'flex',
  flexDirection: { xs: 'column' }
}

const Contact = () => {
  return (
    <Box sx={root}>
      <GetInTouch />
      <ContactForm />
    </Box>
  )
}

export default Contact
