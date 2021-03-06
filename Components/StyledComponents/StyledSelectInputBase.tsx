import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'

const StyledSelectInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(2),
    borderRadius: 0,
    background: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    boxShadow: theme.shadows[1],
    letterSpacing: 1,
    '&:focus': {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.light,
      boxShadow: theme.shadows[1]
    },
    '&:hover': {
      boxShadow: theme.shadows[4]
    }
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.light
  }
}))

export default StyledSelectInputBase
