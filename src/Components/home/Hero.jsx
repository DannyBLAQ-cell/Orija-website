import React from 'react'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
   <>


    <div className="relative bg-[url('/images/dread-img.jpg')] bg-cover bg-center min-h-[800px] mb-20 md:min-h-screen">

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-white px-6 pt-28 md:pt-40 flex flex-col max-w-5xl mx-auto">

        {/* HEADING */}
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-bold leading-tight"
        >
          The Social Market <br />
          for Everyday <span className="secondary">Hustlers.</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-6 text-lg md:text-2xl leading-relaxed"
        >
          Buy, sell, and build trust all in one app. Orija connects you directly
          with customers and sellers through chat, escrow-secured payments, and reviews.
        </motion.p>

        {/* BUTTONS + EMAIL INPUT WRAPPER */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-10 sm:items-center">

          {/* APP STORE */}
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            href="#"
            className="flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/30 hover:scale-[1.05] transition duration-300 active:scale-95"
          >
            <img src="/images/appStore.png" alt="App Store" className="w-7 h-7 md:w-10 md:h-10" />
            <span className="font-semibold">App Store</span>
          </motion.a>

          {/* PLAY STORE */}
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            href="#"
            className="flex items-center gap-3 bg-secondary px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:scale-[1.05] transition duration-300 active:scale-95"
          >
            <img src="/images/playStore.png" alt="Play Store" className="w-7 h-7 md:w-10 md:h-10" />
            <span>Play Store</span>
          </motion.a>

          {/* EMAIL FIELD */}
          <div className="flex justify-center items-center w-full sm:w-auto mt-2">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-4 pl-5 pr-36 text-white rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <motion.button
                whileTap={{ scale: 0.92 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-300 hover:scale-[1.05]"
              >
                Join Waitlist
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </div>
   </>
  )
}

export default Hero