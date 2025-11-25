import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const float = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
const Empower = () => {


  
  return (
<>

  <section className="relative py-32 bg-white overflow-hidden">
      {/* Floating scattered images */}
      <motion.img
        src="public/images/wall.jpg"
        variants={float}
        animate="animate"
        className="hidden md:block absolute top-10 left-10 w-40 h-40 object-cover rounded-2xl shadow-xl"
      />

      <motion.img
        src="public/images/graffiti.jpg"
        variants={float}
        animate="animate"
        className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 w-48 h-48 object-cover rounded-3xl shadow-lg"
      />

      <motion.img
        src="public/images/pic-6.jpg"
        variants={float}
        animate="animate"
        className="hidden md:block absolute bottom-10 left-24 w-36 h-36 object-cover rounded-2xl shadow-md"
      />

      <motion.img
        src="public/images/pic-3.jpg"
        variants={float}
        animate="animate"
        className="hidden md:block absolute top-24 right-10 w-44 h-44 object-cover rounded-3xl shadow-xl"
      />

      <motion.img
        src="public/images/pic-4.jpg"
        variants={float}
        animate="animate"
        className="hidden md:block absolute bottom-20 right-0 w-40 h-40 object-cover rounded-2xl shadow-lg"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Empowering Everyday Hustlers
        </h2>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
          From side hustles to full-time businesses, Orija gives people the
          platform, tools, and trust they need to succeed in the digital
          economy. Thousands of small businesses can now reach new customers.
          Buyers and sellers can transact with confidence through Orivalt's
          escrow. Local sellers can finally build trust and reputation online.
          We are redefining what it means to go to market—not just a place to
          sell, but a place to belong.
        </p>

        <a
          href="#download"
          className="inline-block px-8 py-4 bg-black text-white rounded-xl text-lg font-semibold shadow-xl hover:opacity-90 transition"
        >
          Join the Orija Movement — Download the App
        </a>
      </div>
    </section>
    <div className=' relative bg-primary flex justify-center items-center flex-col gap-5 pb-30 pt-10 '>
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

             <motion.h1
               initial={{y:-300, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1, ease:'easeInOut'}}
             
             >
            <h1 className='text-3xl m-3 md:text-6xl text-center font-medium pt-25 text-white '>
              Be part of the new digital market movement. <br />
              Connect,trade and grow, all in one app.      
            </h1>
            
             </motion.h1>
    
         
    
                 
    <div class="flex flex-wrap gap-4 m-5">
      <motion.a href="#"
    
    initial={{opacity:0, y:60}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.4,}}
    
    viewport={{once:true, amount:0.8}}
    
      class="flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white px-8 py- rounded-full font-semibold hover:scale-100 transition border border-blue-600 hover:scale-107 transition duration-300 ease-in-out transition active: active:scale-90 transition duration-300 ease-in-out">
       
        <img src="public/images/appStore.png" alt="App Store" class="w-15 h-15 color-white" />
        App Store
      </motion.a>
      <motion.a href="#" 
    
    initial={{opacity:0, y:60}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.4,}}
    
    viewport={{once:true, amount:0.8}}
    
      class="flex items-center gap-2 bg-orange-500 text-white px-8 py-1 rounded-full font-semibold hover:bg-green-600 hover:scale-107 transition duration-300 ease-in-out transition active: active:scale-90 transition duration-300 ease-in-out">
        <img src="public/images/playStore.png" alt="Play Store" class="w-20 h-20" />
        Play Store
      </motion.a>
    
      <div class="flex justify-center items-center ">
      <div class="relative w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          class="w-full py-6 pl-4 text-white pr-36 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          class="absolute right-1 top-1 bottom-1 text-white bg-secondary text-white px-5 rounded-full hover:bg-blue-700 transition hover:scale-102  11 transition duration-300 ease-in-out transition active: active:scale-90 transition duration-300 ease-in-out"
        >
          Join the Waitlist
        </button>
      </div>
    </div>
    
    </div>
    
    </div>
    
</>
  )
}

export default Empower