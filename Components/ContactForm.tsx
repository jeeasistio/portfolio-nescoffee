import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import StyledTextField from './StyledComponents/StyledTextField'
import StyledSelectInputBase from './StyledComponents/StyledSelectInputBase'
import StyledButton from './StyledComponents/StyledButton'
import { m } from 'framer-motion'
import {
  contactFormCtnVariant,
  contactFormBtnVariant
} from '../animations/contactForm'

const sx: SxProps = {
  root: {
    width: { xs: 1, md: 0.5 },
    p: 4,
    border: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'primary.main'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: 3
  },
  headingCtn: {
    color: 'primary.main'
  },
  selectFields: {
    display: 'flex',
    gap: 2
  }
}

const ContactForm = () => {
  return (
    <Box
      sx={sx.root}
      component={m.div}
      variants={contactFormCtnVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Box sx={sx.headingCtn}>
        <Typography variant="h3" paragraph color="secondary">
          Contact Form
        </Typography>
      </Box>

      <Box sx={sx.form}>
        <StyledTextField variant="outlined" label="Name" color="secondary" />
        <StyledTextField variant="outlined" label="Email" color="secondary" />
        <Box sx={sx.selectFields}>
          <FormControl variant="standard" fullWidth>
            <Select
              id="flavor-select"
              value="Order"
              color="secondary"
              input={<StyledSelectInputBase />}
            >
              <MenuItem value="Order">Order</MenuItem>
              <MenuItem value="Inquiry">Inquiry</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <Select
              id="flavor-select"
              value="1"
              input={<StyledSelectInputBase />}
            >
              <MenuItem value="1" selected={true}>
                Coffee
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <StyledTextField multiline variant="outlined" label="Description..." />
        <m.div variants={contactFormBtnVariant}>
          <StyledButton fullWidth variant="contained" color="secondary">
            Send Email
          </StyledButton>
        </m.div>
      </Box>
    </Box>
  )
}

export default ContactForm
