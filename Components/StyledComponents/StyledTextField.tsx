import { StyledComponent } from '@emotion/styled/types/base'
import { styled, Theme } from '@mui/material/styles'
import TextField, { OutlinedTextFieldProps } from '@mui/material/TextField'
import { MUIStyledCommonProps } from '@mui/system'

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label': {
    color: theme.palette.secondary.light
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: 0,
      borderWidth: 1,
      boxShadow: theme.shadows[1],
      borderColor: theme.palette.secondary.main
    }
  }
}))

export default StyledTextField as unknown as StyledComponent<
  OutlinedTextFieldProps & MUIStyledCommonProps<Theme>,
  {},
  {}
>
