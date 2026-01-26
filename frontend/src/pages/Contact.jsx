import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import { motion } from 'framer-motion'

const Contact = () => {
  // Coordinates from your Google Maps link
  const latitude = 25.5695307;
  const longitude = 91.897792;
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.8790367890123!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e5fc4e5e5e5e5%3A0x5f5f5f5f5f5f5f5f!2sRaj%20Electricals!5e0!3m2!1sen!2sin!4v1700000000000`;

  return (
    <div className='bg-gradient-to-b from-white via-gray-50 to-white min-h-screen'>
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center text-3xl pt-32 pb-8 border-t-2 border-gray-300'
      >
        <Title text1={'CONTACT'} text2={'US'} />
        {/* <div className='flex justify-center mt-4'>
          <div className='w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full'></div>
        </div> */}
       
      </motion.div>

      <div className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20'>
        
        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20'>
          
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition'
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={mapEmbedUrl}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Raj Electricals Location"
            ></iframe>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='flex flex-col justify-start gap-8'
          >
            
            {/* Store Info Header */}
            <div>
              <h3 className='text-3xl font-bold text-center text-gray-900 mb-2'>Raj Electricals</h3>
              <p className='text-gray-600 text-center'>Your trusted electronics partner since 2003</p>
            </div>

            {/* Location Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className='bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-gray-700 hover:shadow-lg transition'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Location</h3>
                  <p className='text-gray-800 font-medium mb-2'>Raj Electricals Laitumkhrah Bazar ,Shillong, Meghalaya</p>
                  <p className='text-gray-700 text-sm mb-3'>
                    Latitude: 25.5695°N | Longitude: 91.8978°E
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/vqSJCWvQGNftfxJZA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-blue-600 hover:text-blue-800 underline font-medium text-sm inline-flex items-center gap-1 transition'
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className='bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-gray-700 hover:shadow-lg transition'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l2.498 0.444a1 1 0 00.502-1.21l-.33-1.405A2 2 0 0013.71 2h2.58a2 2 0 012 2v12a2 2 0 01-2 2h-2.58a2 2 0 00-1.884-1.236l-2.498.444a1 1 0 00-.502 1.21l.33 1.405A2 2 0 0010.72 22H8a2 2 0 01-2-2V5z' />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Phone</h3>
                  <a 
                    href="tel:+919862098737" 
                    className='text-xl font-bold text-gray-800 hover:text-blue-600 transition'
                  >
                    +91 9862098737 <br />
                  </a>
                  <p className='text-gray-600 text-sm mt-1'>Available 24/7</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className='bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-gray-700 hover:shadow-lg transition'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l2.498 0.444a1 1 0 00.502-1.21l-.33-1.405A2 2 0 0013.71 2h2.58a2 2 0 012 2v12a2 2 0 01-2 2h-2.58a2 2 0 00-1.884-1.236l-2.498.444a1 1 0 00-.502 1.21l.33 1.405A2 2 0 0010.72 22H8a2 2 0 01-2-2V5z' />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Phone</h3>
                  <a 
                    href="tel:+919612191977" 
                    className='text-xl font-bold text-gray-800 hover:text-blue-600 transition'
                  >
                    
                    +91 9612191977 <br />
                  </a>
                  <p className='text-gray-600 text-sm mt-1'>Available 24/7</p>
                </div>
              </div>
            </motion.div>
            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className='bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-gray-700 hover:shadow-lg transition'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l2.498 0.444a1 1 0 00.502-1.21l-.33-1.405A2 2 0 0013.71 2h2.58a2 2 0 012 2v12a2 2 0 01-2 2h-2.58a2 2 0 00-1.884-1.236l-2.498.444a1 1 0 00-.502 1.21l.33 1.405A2 2 0 0010.72 22H8a2 2 0 01-2-2V5z' />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Landline</h3>
                  <a 
                    href="tel:0364-3562422" 
                    className='text-xl font-bold text-gray-800 hover:text-blue-600 transition'
                  >
                     0364-3562422
                  </a>
                  <p className='text-gray-600 text-sm mt-1'>Available 24/7</p>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className='bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-gray-700 hover:shadow-lg transition'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Email</h3>
                  <a 
                    href="mailto:info@rajelectricals.com" 
                    className='text-blue-600 hover:text-blue-800 transition font-medium break-all'
                  >
                    rairanjit603@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className='bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-l-4 border-gray-700 hover:shadow-lg transition'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-lg font-bold text-gray-900 mb-2'>Business Hours</h3>
                  <div className='space-y-1 text-sm text-gray-700'>
                    <p><strong>Mon - Sat :</strong> 8:00 AM - 9:00 PM</p>
                    <p><strong>Sunday:</strong> 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

       {/* {/* Contact Form Section /*}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-2xl'
        >
          <h2 className='text-3xl font-bold text-center text-gray-900 mb-2 pb-8'>Send us a Message</h2>
          
          
          <form className='space-y-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                type="text" 
                placeholder='Your Name' 
                className='w-full border-2 border-gray-300 bg-white px-4 py-3 rounded-lg focus:outline-none focus:border-gray-700 transition'
              />
              <motion.input 
                whileFocus={{ scale: 1.02 }}
                type="email" 
                placeholder='Your Email' 
                className='w-full border-2 border-gray-300 bg-white px-4 py-3 rounded-lg focus:outline-none focus:border-gray-700 transition'
              />
            </div>
            <motion.textarea 
              whileFocus={{ scale: 1.01 }}
              placeholder='Your Message' 
              rows="5"
              className='w-full border-2 border-gray-300 bg-white px-4 py-3 rounded-lg focus:outline-none focus:border-gray-700 transition resize-none'
            ></motion.textarea>
            <div className='flex gap-4'>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className='bg-gradient-to-r from-gray-700 to-black text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition'
              >
                Send Message
              </motion.button>
              
            </div>
          </form>
        </motion.div> */}
      </div>
    </div>
  )
}

export default Contact
