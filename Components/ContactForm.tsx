import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material'
import { SxProps } from '@mui/system'
import StyledSelectInputBase from './StyledComponents/StyledSelectInputBase'
import StyledTextField from './StyledComponents/StyledTextField'

const root: SxProps = {
  width: { xs: 1, md: 0.5 }
}

const form: SxProps = {
  display: 'flex',
  flexDirection: 'column'
}

// TODO: Contact Form

const ContactForm = () => {
  return (
    <Box sx={root}>
      <Box>
        <Typography>Contact Form</Typography>
      </Box>

      <Box sx={form}>
        <StyledTextField variant="outlined" label="name" />
        <StyledTextField variant="outlined" label="Email" />
        <FormControl sx={{ m: 5 }} variant="standard">
          <Select
            id="flavor-select"
            size="small"
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
        <FormControl sx={{ m: 5 }} variant="standard">
          <Select
            id="flavor-select"
            size="small"
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
        <StyledTextField multiline variant="outlined" label="Description..." />
      </Box>
    </Box>
  )
}

export default ContactForm
