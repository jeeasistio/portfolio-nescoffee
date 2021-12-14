import { AppProps } from 'next/dist/shared/lib/router/router'
import theme from '../themes/theme'
import '../themes/globals.css'
import { SxProps, ThemeProvider } from '@mui/material/styles'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import CssBaseline from '@mui/material/CssBaseline'
import { domAnimation, LazyMotion } from 'framer-motion'
import Box from '@mui/material/Box'

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache()
})

const sx: SxProps = {
  backgroundSx: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    background: 'url(https://i.ibb.co/s9nYGh2/coffee-background-3.jpg)',
    backgroundSize: 'cover',
    zIndex: -1,
    opacity: 0.3
  }
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Box sx={sx.backgroundSx} />

      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <LazyMotion features={domAnimation} strict>
              <Component {...pageProps} />
            </LazyMotion>
          </CssBaseline>
        </ThemeProvider>
      </ApolloProvider>
    </div>
  )
}

export default App
