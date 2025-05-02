import React from 'react'
import CoffeeBlend1 from '../assets/coffee/coffee1.png' // Remplace par ton image
import CoffeeBlend2 from '../assets/coffee/coffee1.png'
import {motion} from 'framer-motion'
import { assets } from '../assets/assets'
const DiscoverBlends = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Discover Our Blends
          </h2>
          <p className="text-brown-500 font-bold text-lg">
            Carefully crafted selections for every coffee enthusiast.
          </p>
        </motion.div>

        {/* Grid Images */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Blend 1 */}
          <motion.div 
            className="relative group overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img 
              src={assets.espressoblend} 
              alt="Blend 1" 
              className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold">
                Espresso Noir
              </h3>
            </div>
          </motion.div>

          {/* Blend 2 */}
          <motion.div 
            className="relative group overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img 
              src={assets.caramelblend} 
              alt="Blend 2" 
              className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold">
                Caramel Breeze
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DiscoverBlends
