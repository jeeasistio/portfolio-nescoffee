import { Button, styled } from '@mui/material'

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: 0,
  boxShadow: theme.shadows[1],
  letterSpacing: 1,
  '&:hover': {
    boxShadow: theme.shadows[4]
  }
}))

export default StyledButton
