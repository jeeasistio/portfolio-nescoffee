import { AppProps } from 'next/dist/shared/lib/router/router'
import theme from '../themes/theme'
import '../themes/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import CssBaseline from '@mui/material/CssBaseline'
import { domAnimation, LazyMotion } from 'framer-motion'

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache()
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
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
