import ContactForm from './ContactForm'
import GetInTouch from './GetInTouch'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'

const sx: SxProps = {
  root: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row-reverse' },
    gap: 2,
    p: 2,
    width: 1,
    minHeight: '80vh'
  }
}

const Contact = () => {
  return (
    <Box sx={sx.root}>
      <ContactForm />
      <GetInTouch />
    </Box>
  )
}

export default Contact
