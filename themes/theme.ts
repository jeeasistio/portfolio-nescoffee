import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#DEB97C',
      main: '#D7A55B',
      dark: '#C19451',
      contrastText: '#f3f3f3'
    },
    secondary: {
      light: '#5a5a5a',
      main: '#444444',
      dark: '#3c3c3c',
      contrastText: '#DEB97C'
    },
    background: {
      paper: '#f3f3f3',
      default: '#f3f3f3'
    },
    common: {
      white: '#f3f3f3',
      black: '#444444'
    },
    text: {
      primary: '#444444',
      secondary: '#5a5a5a'
    }
  },
  typography: {
    fontFamily: '"Old Standard TT", "Crimson Text"',
    h1: {
      fontFamily: 'Old Standard TT'
    },
    h2: {
      fontFamily: 'Old Standard TT'
    },
    h3: {
      fontFamily: 'Old Standard TT'
    },
    h4: {
      fontFamily: 'Old Standard TT'
    },
    h5: {
      fontFamily: 'Old Standard TT'
    },
    h6: {
      fontFamily: 'Crimson Text'
    },
    subtitle1: {
      fontFamily: 'Crimson Text'
    },
    subtitle2: {
      fontFamily: 'Crimson Text'
    },
    body1: {
      fontFamily: 'Crimson Text'
    },
    body2: {
      fontFamily: 'Crimson Text'
    },
    button: {
      fontFamily: 'Crimson Text'
    },
    caption: {
      fontFamily: 'Crimson Text'
    },
    overline: {
      fontFamily: 'Crimson Text'
    }
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        root: {
          '& .MuiMenu-paper': {
            background: '#f3f3f3',
            borderRadius: 0,
            color: '#444444',
            '& .MuiList-root': {
              padding: 0
            },
            '& .Mui-selected': {
              background: '#444444',
              color: '#DEB97C',
              '&:focus': {
                background: '#444444',
                color: '#DEB97C'
              },
              '&:hover': {
                background: '#3a3a3a',
                color: '#DEB97C'
              }
            }
          }
        }
      }
    }
  }
})

export default theme
