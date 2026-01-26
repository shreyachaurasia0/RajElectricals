import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={assets.exchange_icon} className ='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Amazing brands & deals at wholesale prices</p>
        <p className='text-gray-500'>We offer 50+ Brand deals</p>
      </div>
      <div>
        <img src={assets.quality_icon} className ='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Best Market Prices</p>
        <p className='text-gray-500'>Hassle-free online purchase at easy prices</p>
      </div>
      <div>
        <img src={assets.support_img} className ='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-500'>Knowledgeable and friendly team available</p>
          <p className='text-gray-500'> for hassle-free assistance.</p>
      </div>
    </div>
  )
}

export default OurPolicy
