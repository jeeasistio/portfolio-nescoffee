import BestSelling from '../Components/BestSelling'
import HeroPage from '../Components/HeroPage'
import Layout from './../Components/UtilityComponents/Layout'
import Reviews from './../Components/Reviews'
import LetsDiscuss from './../Components/LetsDiscuss'
import Head from 'next/head'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Nescoffee</title>
      </Head>

      <HeroPage />
      <BestSelling />
      <Reviews />
      <LetsDiscuss />
    </Layout>
  )
}

export default Home
