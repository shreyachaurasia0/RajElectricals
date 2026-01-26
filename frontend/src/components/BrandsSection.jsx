import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import { assets } from "../assets/frontend_assets/assets";

const brands = [
  { name: "Bajaj", logo: assets.bajaj },
  { name: "Havells", logo: assets.havells },
  { name: "Legrand", logo: assets.legrand },
  { name: "Crompton", logo: assets.crompton },
  { name: "Orient", logo: assets.orient },
  { name: "Syska", logo: assets.syska },
  { name: "Usha", logo: assets.usha },
  { name: "V-Guard", logo: assets.vguard },
  { name: "Godrej", logo: assets.godrej },
  { name: "Milton", logo: assets.milton },
  { name: "Prestige", logo: assets.prestige },
  { name: "Sujata", logo: assets.sujata },
];

const BrandsSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title text1={'Shop from'} text2={'Top Electrical Brands'} />
          
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md hover:shadow-lg p-4 rounded-xl flex items-center justify-center transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;




