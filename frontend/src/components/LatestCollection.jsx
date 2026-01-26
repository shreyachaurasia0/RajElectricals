import React ,{ useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { motion } from "framer-motion";
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [lastestProducts , setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    },[products])

  return (
    <motion.div className='my-10'
            initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
    >
        <div
            className='text-center py-8 text-3xl'
            
        >
            <motion.h2
                className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
            <Title text1 = {'LATEST'} text2={'COLLECTIONS'}/>
            </motion.h2>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700'>
                Explore our newest products, crafted with quality and contemporary design.
            </p>
        </div>

        {/*Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                lastestProducts.map((item ) => (
                    <motion.div
                        key={item._id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay:  0.1 }}
                    >
                        <ProductItem id={item._id} image={item.image} name={item.name} price={item.price}/>
                    </motion.div>
                ))
            }
        </div>

    </motion.div>
  )
}

export default LatestCollection
