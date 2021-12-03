import StyledTextField from './StyledComponents/StyledTextField'
import StyledSelectInputBase from './StyledComponents/StyledSelectInputBase'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const sx: SxProps = {
  root: {
    display: 'flex',
    alignItems: 'center',
    p: 2,
    gap: 2
  }
}

const ProductSearch = () => {
  return (
    <Box sx={sx.root}>
      <Box>
        <StyledTextField variant="outlined" label="Search products..." />
      </Box>
      <Box>
        <FormControl variant="standard">
          <Select
            id="flavor-select"
            value="1"
            input={<StyledSelectInputBase />}
          >
            <MenuItem value="1" selected={true}>
              Coffee
            </MenuItem>
            <MenuItem value="2">Tea</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}

export default ProductSearch
