import BestSelling from '../Components/BestSelling'
import HeroPage from '../Components/HeroPage'
import Layout from './../Components/UtilityComponents/Layout'
import Reviews from './../Components/Reviews'

const Home = () => {
  return (
    <Layout>
      <HeroPage />
      <BestSelling />
      <Reviews />
    </Layout>
  )
}

export default Home
