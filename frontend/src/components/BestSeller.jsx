import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { motion } from "framer-motion";
import { assets } from '../assets/frontend_assets/assets';


const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller , setBestSeller] = useState([]);
    useEffect(()=>{
        const bestProduct = products.filter((item) =>(item.bestseller));
        setBestSeller(bestProduct.slice(0,10))
    },[products])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                >
            <Title text1={'BEST'} text2={'SELLER'} />
           </motion.h2>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Our most loved product, trusted by customers for its quality and reliability.
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                
                bestSeller.map((item) => (
                    <motion.div
                        key={item._id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay:  0.1 }}>
                       <ProductItem id={item._id} image={item.image} name={item.name} price={item.price}/>
                    </motion.div>
                ))
            }
        </div>
               <motion.video 
                  className='mx-auto mt-30 mb-30 rounded-lg shadow-md sm:w-[100%] sm:h-[100%] md:w-[80%] md:h-[60%] lg:w-[80%] lg:h-[60%] object-cover' 
                  src={assets.video} 
                  autoPlay 
                  loop 
                  muted
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                ></motion.video>
    </div>
  )
}

export default BestSeller
