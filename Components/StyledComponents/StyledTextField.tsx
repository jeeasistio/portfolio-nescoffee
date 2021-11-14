import { StyledComponent } from '@emotion/styled'
import { TextField, styled, OutlinedTextFieldProps, Theme } from '@mui/material'
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
