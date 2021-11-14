import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import { Breakpoint, Container } from '@mui/material'

interface Props {
  children: React.ReactNode
  withFooter?: boolean
  withHeader?: boolean
  containerWidth?: false | Breakpoint | undefined
}

const Layout = ({
  children,
  withFooter = true,
  withHeader = true,
  containerWidth
}: Props) => {
  return (
    <div>
      {withHeader && <Header />}

      {containerWidth === undefined && <Main>{children}</Main>}

      {containerWidth && (
        <Main>
          <Container maxWidth={containerWidth}>{children}</Container>
        </Main>
      )}

      {withFooter && <Footer />}
    </div>
  )
}

export default Layout
