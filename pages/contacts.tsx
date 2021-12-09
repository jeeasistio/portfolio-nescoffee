import Contact from '../Components/Contact'
import Layout from '../Components/UtilityComponents/Layout'
import Head from 'next/head'

const Contacts = () => {
  return (
    <Layout>
      <Head>
        <title>Contacts</title>
      </Head>

      <Contact />
    </Layout>
  )
}

export default Contacts
