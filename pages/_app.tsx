import { AppProps } from 'next/dist/shared/lib/router/router'
import theme from '../themes/theme'
import '../themes/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

const _app = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    </div>
  )
}

export default _app

// * Component Guide
// const button: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 5
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.3,
//       type: 'spring',
//       stiffness: 80,
//       damping: 15,
//       staggerChildren: 0.5
//     }
//   }
// }

{
  /* <StyledTextField
  sx={{ m: 5 }}
  size="small"
  label="Search..."
  variant="outlined"
/>
<FormControl sx={{ m: 5 }} variant="standard">
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
<Select id="flavor-select" size="small" value="1" label="Flavor">
  <MenuItem value="1">Nutellatte</MenuItem>
  <MenuItem value="2">Nutellatte</MenuItem>
  <MenuItem value="3">Nutellatte</MenuItem>
</Select>
<Typography variant="h1">jeeasistio</Typography>
<Typography variant="h2">jeeasistio</Typography>
<Typography variant="h3">jeeasistio</Typography>
<Typography variant="h4">jeeasistio</Typography>
<Typography variant="h5">jeeasistio</Typography>
<Typography variant="h6">jeeasistio</Typography>
<Typography variant="subtitle1">jeeasistio</Typography>
<Typography variant="subtitle2">jeeasistio</Typography>
<Typography variant="body1">jeeasistio</Typography>
<Typography variant="body2">jeeasistio</Typography>
<Typography variant="caption">jeeasistio</Typography>
<Typography variant="overline">jeeasistio</Typography>
<motion.div
  style={{
    display: 'flex',
    width: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }}
  variants={button}
  initial="hidden"
  animate="show"
>
  <motion.div variants={button}>
    <StyledButton variant="contained">See our products</StyledButton>
  </motion.div>
  <motion.div variants={button}>
    <StyledButton variant="contained" color="secondary">
      Talk to us
    </StyledButton>
  </motion.div>
</motion.div> */
}

// * Image Assets
{
  /* <img src="https://i.ibb.co/ph46R46/coffee-with-telephone-small.jpg" alt="coffee-with-telephone-small" border="0">
  <img src="https://i.ibb.co/4VwLsFr/coffee-background-small-1.jpg" alt="coffee-background-small-1" border="0">
  <img src="https://i.ibb.co/Qvxd5VG/coffee-background-small-2-edited.jpg" alt="coffee-background-small-2-edited" border="0">
<img src="https://i.ibb.co/QvcxNS6/review-coffee-small-1.jpg" alt="review-coffee-small-1" border="0">
<img src="https://i.ibb.co/Cm1PD1B/review-coffee-small.jpg" alt="review-coffee-small" border="0">
<img src="https://i.ibb.co/x1nHqbK/product-coffee-small.jpg" alt="product-coffee-small" border="0">
<img src="https://i.ibb.co/nsxfsvB/hero-page-image-small.jpg" alt="hero-page-image-small" border="0"> */
}
