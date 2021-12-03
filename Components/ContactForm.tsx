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
  contactFormVariant
} from '../animations/contactForm'

const sx: SxProps = {
  root: {
    width: { xs: 1, md: 0.5 },
    p: 4,
    border: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
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
        <Typography
          variant="h3"
          paragraph
          component={m.h3}
          variants={contactFormVariant}
        >
          Contact Form
        </Typography>
      </Box>

      <Box sx={sx.form}>
        <StyledTextField variant="outlined" label="Name" />
        <StyledTextField variant="outlined" label="Email" />
        <Box sx={sx.selectFields}>
          <FormControl variant="standard" fullWidth>
            <Select
              id="flavor-select"
              value="1"
              input={<StyledSelectInputBase />}
            >
              <MenuItem value="1" selected={true}>
                Nutellatte
              </MenuItem>
              <MenuItem value="2">Nutellatte</MenuItem>
              <MenuItem value="3">Nutellatte</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" fullWidth>
            <Select
              id="flavor-select"
              value="1"
              input={<StyledSelectInputBase />}
            >
              <MenuItem value="1" selected={true}>
                Nutellatte
              </MenuItem>
              <MenuItem value="2">Nutellatte</MenuItem>
              <MenuItem value="3">Nutellatte</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <StyledTextField multiline variant="outlined" label="Description..." />
        <StyledButton variant="contained">Send Email</StyledButton>
      </Box>
    </Box>
  )
}

export default ContactForm
