import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='pt-20 bg-gradient-to-b from-white via-gray-100 to-white'>
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 px-4"
      >
        <h3 className='text-5xl sm:text-4.5xl font-bold text-gray-900 mb-4'>
           <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black'>Raj Electricals</span>
        </h3>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Your Trusted Electronics Partner Since 2003
        </p>
      </motion.div>

      {/* Main Story */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img className='w-full rounded-2xl shadow-2xl hover:shadow-3xl transition' src={assets.about_img} alt="Raj Electricals Store" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='space-y-6'
          >

            <div className='bg-gradient-to-r from-gray-400 to-gray-700 p-1 rounded-lg'>
              <div className='bg-white p-6 rounded-lg'>
                <h2 className='text-3xl font-bold text-gray-900 mb-3'>🎯 Our Story</h2>
                <p className='text-gray-700 leading-relaxed text-lg'>
                  Established in <span className='font-bold text-gray-800'>2003</span>, Raj Electricals has been a trusted name in electronics for more than 
                  <span className='font-bold text-gray-800'> two decades</span>. 
                  From our humble beginnings, we have focused on delivering genuine products, affordable prices, and a customer-first experience.
                </p>
              </div>
            </div>

            <div className='bg-gradient-to-r from-gray-400 to-gray-700 p-1 rounded-lg'>
              <div className='bg-white p-6 rounded-lg'>
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>💼 What We Do</h3>
                <p className='text-gray-700 leading-relaxed text-lg'>
                  We offer a <span className='font-bold'>wide range of electronic gadgets</span>—from trimmers and grooming devices to home appliances and electrical essentials.
                </p>
              </div>
            </div>

            <div className='bg-gradient-to-r from-gray-400 to-gray-700 p-1 rounded-lg'>
              <div className='bg-white p-6 rounded-lg'>
                <h3 className='text-2xl font-bold text-gray-900 mb-3'>🔧 Our Specialty</h3>
                <p className='text-gray-700 leading-relaxed text-lg'>
                  We provide <span className='font-bold'>expert repair and service support</span>, ensuring customers get long-lasting value.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='bg-gradient-to-r from-gray-500 to-black py-16 px-4 mb-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center'
        >
          {[
            { n: '20+', t: 'Years of Trust' },
            { n: '10K+', t: 'Happy Customers' },
            { n: '5K+', t: 'Products' },
            { n: '24/7', t: 'Support' }
          ].map((s, i) => (
            <div key={i} className='text-white'>
              <div className='text-5xl font-bold mb-2'>{s.n}</div>
              <p className='text-lg'>{s.t}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Product Categories */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            🛒 What We <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black'>Offer</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-gray-700 to-black mx-auto rounded'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[
            { icon: '🏠', title: 'Home & Kitchen', desc: 'Mixer grinders, rice cookers, kettles, and more' },
            { icon: '💡', title: 'Lighting & Electricals', desc: 'LED bulbs, switches, wires, sockets' },
            { icon: '🔧', title: 'Hardware & Tools', desc: 'Tools, drill machines, screws, and more' },
            { icon: '🌡️', title: 'Heating & Cooling', desc: 'Room heaters, fans, and coolers' },
            { icon: '✨', title: 'Personal Care', desc: 'Trimmers, straighteners, grooming gadgets' },
            { icon: '📱', title: 'Mobile Accessories', desc: 'Chargers, cables, adapters, and more' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              className='bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-gray-600 transition cursor-pointer'
            >
              <div className='text-5xl mb-4'>{item.icon}</div>
              <h3 className='font-bold text-gray-900 mb-2 text-lg'>{item.title}</h3>
              <p className='text-gray-600 text-sm'>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='bg-gradient-to-b from-gray-100 to-white py-20 px-4 mb-20'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='max-w-7xl mx-auto'
        >
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              ⭐ Why <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black'>Choose Us</span>?
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-gray-700 to-black mx-auto rounded'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              { icon: '✅', title: 'Quality Assurance', desc: 'Genuine products tested before delivery' },
              { icon: '🚚', title: 'Fast Delivery', desc: 'Quick delivery with COD & easy returns' },
              { icon: '🔧', title: 'Expert Support', desc: 'Skilled technicians available anytime' },
              { icon: '💰', title: 'Best Prices', desc: 'Affordable pricing with regular offers' },
              { icon: '🤝', title: 'Customer First', desc: '20+ years of reliable service' },
              { icon: '⚡', title: 'Expert Team', desc: 'Trained professionals for every task' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className='bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center'
              >
                <div className='text-6xl mb-4 inline-block'>{item.icon}</div>
                <h3 className='font-bold text-gray-900 mb-3 text-lg'>{item.title}</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Services */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            🛠️ Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black'>Services</span>
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-gray-700 to-black mx-auto rounded'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {[
            { icon: '🛠️', title: 'Repair & Maintenance', desc: 'Professional troubleshooting and repair' },
            { icon: '📦', title: 'Product Sales', desc: 'Genuine electronics with warranty' },
            { icon: '🔌', title: 'Installation Services', desc: 'Expert appliance installation' },
            { icon: '💡', title: 'Expert Consultation', desc: 'Guidance to choose the right product' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className='bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-xl border-l-4 border-gray-700 hover:shadow-lg transition'
            >
              <div className='text-5xl mb-4'>{item.icon}</div>
              <h3 className='font-bold text-gray-900 mb-2 text-lg'>{item.title}</h3>
              <p className='text-gray-700 leading-relaxed'>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='bg-gradient-to-r from-gray-800 via-gray-700 to-black py-16 px-4 mb-20 rounded-2xl max-w-6xl mx-auto'
      >
        <div className='text-center text-white'>
          <h2 className='text-4xl font-bold mb-6'>🎯 Our Mission</h2>
          <p className='text-lg leading-relaxed max-w-3xl mx-auto'>
            To deliver <span className='font-bold'>high-quality electronic products</span> and 
            <span className='font-bold'> reliable after-sales support</span>.  
            With 20+ years of experience, Raj Electricals continues to serve with
            <span className='font-bold'> trust, honesty, and dedication</span>.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='text-center py-12 px-4'
      >
        <h3 className='text-3xl font-bold text-gray-900 mb-6'>
          Ready to Shop?
        </h3>
        <Link 
          to="/collection" 
          onClick={() => window.scrollTo(0, 0)}
          className="bg-gradient-to-r from-gray-700 to-black text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition transform hover:scale-105 inline-block"
        >
          Start Shopping Now
        </Link>
      </motion.div>

    </div>
  )
}

export default About
