import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material'
import { SxProps } from '@mui/system'
import StyledSelectInputBase from './StyledComponents/StyledSelectInputBase'
import StyledTextField from './StyledComponents/StyledTextField'
import StyledButton from './StyledComponents/StyledButton'

const root: SxProps = {
  width: { xs: 1, md: 0.5 },
  p: 4,
  border: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

const form: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  gap: 4
}

const headingCtn: SxProps = {
  color: 'primary.main'
}

const selectFields: SxProps = {
  display: 'flex',
  gap: 2
}

const ContactForm = () => {
  return (
    <Box sx={root}>
      <Box sx={headingCtn}>
        <Typography variant="h5" paragraph>
          Contact Form
        </Typography>
      </Box>

      <Box sx={form}>
        <StyledTextField variant="outlined" label="Name" size="small" />
        <StyledTextField variant="outlined" label="Email" size="small" />
        <Box sx={selectFields}>
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
        <StyledTextField
          multiline
          variant="outlined"
          label="Description..."
          size="small"
        />
        <StyledButton variant="contained">Send Email</StyledButton>
      </Box>
    </Box>
  )
}

export default ContactForm
