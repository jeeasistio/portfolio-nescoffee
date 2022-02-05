import Alert from '@mui/material/Alert'
import { styled } from '@mui/material/styles'

const StyledAlert = styled(Alert)(({ theme }) => ({
  background: theme.palette.secondary.main,
  borderRadius: 0,
  boxShadow: theme.shadows[2],
  color: theme.palette.secondary.contrastText
}))

export default StyledAlert
