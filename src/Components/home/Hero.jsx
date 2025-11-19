import React from 'react'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
   <>
   {/* <div className="bg-[url('/src/assets/images/dread-img.jpg')] bg-cover bg-center h-156">
<div className='absolute inset-0 bg-black opacity-40 z-0 pb-172'></div>
<div className='z-10 text-white pt-25 relative flex flex-col '>
<motion.h1
initial={{x:-200, opacity:0}}
whileInView={{x:0, opacity:1}}
  transition={{ duration: 0.8, ease: "easeOut", }}




className=' text-4xl md:text-8xl font-bold md:m-4'>
    "The Social Market  <br />for Everyday <span className='secondary'>Hustlers. </span> "
    </motion.h1>
<motion.p 
initial={{x:-200, opacity:0}}
whileInView={{x:0, opacity:1}}
  transition={{ duration: 0.8, ease: "easeOut", }}




className='m-5 text-1xl md:text-3xl'>
Buy, sell, and build trust all in one app. <br /> Orija conects you directly with customers and sellers through chat, <br /> escrow-secured payments, and reviews.
</motion.p>
<div class="flex flex-wrap gap-4 m-5">
  <motion.a href="#"

initial={{opacity:0, }}
whileInView={{opacity:1, y:0}}
transition={{duration:1,}}


  class="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py- rounded-full font-semibold hover:scale-100 transition border border-blue-600 hover:scale-107 transition duration-300 ease-in-out transition active: active:scale-90 transition duration-300 ease-in-out">
   
    <img src="/src/assets/images/appStore.png" alt="App Store" class="  w-6  h-10 md:w-15 md:h-15 color-white" />
    App Store
  </motion.a>
  <motion.a href="#" 

initial={{opacity:0,}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.4,}}

viewport={{once:true, amount:0.8}}

  class="flex items-center gap-2 bg-secondary text-white px-8 py-1 rounded-full font-semibold hover:bg-green-600 hover:scale-107 transition duration-300 ease-in-out transition active: active:scale-90 transition duration-300 ease-in-out">
    <img src="/src/assets/images/playStore.png" alt="Play Store" class="  w-6 h-10 md:w-20 md:h-20" />
    Play Store
  </motion.a>

  <div class="flex justify-center items-center ">
  <div class="relative w-full max-w-md">
    <input
      type="email"
      placeholder="Enter your email"
      class="w-full py-6 pl-4 pr-36 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    < motion.button



      class="absolute right-1 top-1 bottom-1 bg-primary text-white px-5 rounded-full hover:bg-blue-700 transition hover:scale-102  11 transition duration-300 ease-in-out transition active: active:scale-90 transition duration-300 ease-in-out"
    >
      Join the Waitlist
    </motion.button>
  </div>
</div>

</div>

</div>
   </div> */}

    <div className="relative bg-[url('/src/assets/images/dread-img.jpg')] bg-cover bg-center min-h-[700px] md:min-h-screen">

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
            <img src="/src/assets/images/appStore.png" alt="App Store" className="w-7 h-7 md:w-10 md:h-10" />
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
            <img src="/src/assets/images/playStore.png" alt="Play Store" className="w-7 h-7 md:w-10 md:h-10" />
            <span>Play Store</span>
          </motion.a>

          {/* EMAIL FIELD */}
          <div className="flex justify-center items-center w-full sm:w-auto mt-2">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-4 pl-5 pr-36 rounded-full border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
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