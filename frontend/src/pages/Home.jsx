import React from 'react'
import HeroSection from '../components/HeroSection'
import FloatingContacts from '../components/FloatingContacts'
import HorizontalProduct from '../components/HorizontalProduct'
import BrandsSection from '../components/BrandsSection'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div className='pt-15'>
      <HeroSection />
      <FloatingContacts />
      <HorizontalProduct />
      <LatestCollection />
      <BestSeller />
      <BrandsSection />
      <OurPolicy />
      <NewsletterBox />
      
      
    </div>
  )
}

export default Home
