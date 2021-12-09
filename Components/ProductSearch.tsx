import StyledTextField from './StyledComponents/StyledTextField'
import StyledSelectInputBase from './StyledComponents/StyledSelectInputBase'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { GetProductsQueryArgs } from '../graphql/generatedTypes'
import StyledButton from './StyledComponents/StyledButton'

const sx: SxProps = {
  root: {
    display: 'flex',
    alignItems: 'center',
    p: 2,
    gap: 2
  }
}

interface Props {
  handleName(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
  handleCategory(e: SelectChangeEvent<string>): void
  handleSearch(e: React.FormEvent<HTMLFormElement>): void
  query: GetProductsQueryArgs
}

const ProductSearch = ({
  query,
  handleName,
  handleCategory,
  handleSearch
}: Props) => {
  return (
    <Box sx={sx.root} component="form" onSubmit={handleSearch}>
      <Box>
        <StyledTextField
          variant="outlined"
          label="Search products..."
          value={query.name}
          onChange={handleName}
        />
      </Box>

      <Box>
        <FormControl variant="standard">
          <Select
            id="flavor-select"
            value={query.category}
            input={<StyledSelectInputBase />}
            onChange={handleCategory}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Coffee">Coffee</MenuItem>
            <MenuItem value="Tea">Tea</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <StyledButton type="submit" variant="contained" size="large">
          Search
        </StyledButton>
      </Box>
    </Box>
  )
}

export default ProductSearch
