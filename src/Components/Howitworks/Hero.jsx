import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
     <section className=" flex flex-col justify-center items-center bg-gradient-to-r from-primary via-tertiary to-secondary text-neutral-900 py-50 overflow-hidden">
      {/* Decorative overlay for subtle blur */}

      {/* Content */}
      <div className="container flex flex-col md:items-center gap-10">
        
        {/* Left text content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" text-center flex flex-col justify-center items-center md:text-center"
        >
          <h1 className="text-4xl text-center md:text-8xl font-bold mb-4 primary">How Orija Works</h1>
          <p className=" mb-8 text-lg">
            Buy and sell with confidence. Every transaction on Orija is powered by connection, secured by Orivault, and strengthened by trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-secondary hover:bg-tertiary text-neutral-900 font-semibold px-8 py-3 rounded-lg transition">
              Download Orija
            </button>
            <button className="border border-neutral-900 text- hoveneutral-900 r:bg-white hover:text-primary font-semibold px-8 py-3 rounded-lg transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right image / animation preview */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={'/src/assets/images/hero.png'}
            alt="Orija app preview"
            className="max-w-sm md:max-w-md rounded-2xl shadow-2xl"
          />
        </motion.div> */}
      </div>
    </section>
    
    </>
  )
}

export default Hero