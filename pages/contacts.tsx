import Contact from '../Components/Contact'
import Layout from '../Components/UtilityComponents/Layout'
import Head from 'next/head'
import { getProductsNames } from '../models/mongoDbQueries'
import { connect, connection } from 'mongoose'
import { GetStaticProps } from 'next'

interface Props {
  productsNames: string
}

const Contacts = ({ productsNames }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Contacts</title>
      </Head>

      <Contact productsNames={JSON.parse(productsNames)} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  if (connection.readyState < 1) {
    await connect(process.env.MONGO_URI)
  }

  const productsNames = await getProductsNames()

  return {
    props: { productsNames: JSON.stringify(productsNames) },
    revalidate: 10
  }
}

export default Contacts
