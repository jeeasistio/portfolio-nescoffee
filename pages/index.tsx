import BestSelling from '../Components/BestSelling'
import HeroPage from '../Components/HeroPage'
import Layout from './../Components/UtilityComponents/Layout'
import Reviews from './../Components/Reviews'
import LetsDiscuss from './../Components/LetsDiscuss'

const Home = () => {
  return (
    <Layout>
      <HeroPage />
      <BestSelling />
      <Reviews />
      <LetsDiscuss />
    </Layout>
  )
}

export default Home
