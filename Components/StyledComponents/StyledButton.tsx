import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: 0,
  boxShadow: theme.shadows[1],
  letterSpacing: 1,
  whiteSpace: 'nowrap',
  fontSize: theme.typography.fontSize * 1.3,
  '&:hover': {
    boxShadow: theme.shadows[4]
  }
}))

export default StyledButton
