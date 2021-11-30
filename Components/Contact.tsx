import { Box } from '@mui/material'
import ContactForm from './ContactForm'
import GetInTouch from './GetInTouch'
import { SxProps } from '@mui/system'

const root: SxProps = {
  display: 'flex',
  flexDirection: { xs: 'column-reverse', md: 'row' },
  gap: 2,
  p: 2,
  width: 1,
  minHeight: '80vh'
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
