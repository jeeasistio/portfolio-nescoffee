import { Box, FormControl, MenuItem, Select } from '@mui/material'
import StyledTextField from './StyledComponents/StyledTextField'
import StyledSelectInputBase from './StyledComponents/StyledSelectInputBase'
import { SxProps } from '@mui/system'

const root: SxProps = {
  display: 'flex',
  alignItems: 'center',
  p: 2,
  gap: 2
}

const ProductSearch = () => {
  return (
    <Box sx={root}>
      <Box>
        <StyledTextField
          variant="outlined"
          size="small"
          label="Search products..."
        />
      </Box>
      <Box>
        <FormControl variant="standard">
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
      </Box>
    </Box>
  )
}

export default ProductSearch
