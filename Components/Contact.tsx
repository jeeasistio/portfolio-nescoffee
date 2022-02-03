import ContactForm from './ContactForm'
import GetInTouch from './GetInTouch'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { ProductName } from '../graphql/generatedTypes'

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

interface Props {
  productsNames: ProductName[]
}

const Contact = ({ productsNames }: Props) => {
  return (
    <Box sx={sx.root}>
      <ContactForm productsNames={productsNames} />
      <GetInTouch />
    </Box>
  )
}

export default Contact
