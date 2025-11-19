import React from 'react'
import {motion} from 'framer-motion'
import Mission from './Mission'
const Hero = () => {
  return (
 <>
 <div className='bg-white'>
 {/* <div className='bg-white flex gap-40 justify-center pt-40 mb-40'>
<motion.div 

className='flex gap-5 flex-col '>


    
<h1 className='text-5xl font-medium primary'>    Building Africa's<br />
   Most Trusted<br />
Social <br />
<i>Marketplace</i> </h1>
<p className='tertiary text-lg'>
    Orija-short for Ori Oja-means <i>"Head of Market"</i> in yoruba.<br />
   It symbolizes leadership, and the spirit of trade that drives local<br />
  markets. <br />
Orija is more than an app; its a digital market place built for people-the <br />
hustlers,dreamers and does who make the everyday economy thrive.</p>

</ motion.div>

<motion.div
  initial={{ x:200, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{ease:'easeInOut', duration:1, }}
>
    <img src="/src/assets/images/founder.png" alt=""  className='w-100 h-100 rounded-xl shadow-2xl' />
</motion.div >

   </div> */}

<div className="bg-white px-6 sm:px-10 py-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

    {/* LEFT TEXT */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className="flex flex-col gap-6"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold primary leading-tight">
        Building Africa's <br />
        Most Trusted <br />
        Social <br />
        <i>Marketplace</i>
      </h1>

      <p className="tertiary text-base sm:text-lg leading-relaxed">
        Orija — short for <i>Ori Oja</i> — means <i>“Head of Market”</i> in Yoruba. <br />
        It symbolizes leadership and the spirit of trade that drives local
        markets. <br /> <br />
        Orija is more than an app; it’s a digital marketplace built for people —  
        the hustlers, dreamers, and doers who make the everyday economy thrive.
      </p>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className="flex justify-center shrink-0"
    >
      <img
        src="/src/assets/images/founder.png"
        alt="Founder"
        className="w-64 sm:w-80 lg:w-[420px] rounded-xl shadow-2xl object-cover"
      />
    </motion.div>
  </div>
</div>
<div className='bg-white pb-40'>
<div className="relative bg-[url('/src/assets/images/city.png')] bg-cover bg-center h-screen ">
  <div className="absolute inset-0 bg-white/10 backdrop-blur-[3px] pb-150"></div>
  <motion.div 
    initial={{scale:0, opacity:0}}
                whileInView={{scale:1, opacity:1}}
                transition={{duration:1, ease:'easeInOut'}}

  className="relative z-10 text-white text-center top-1/3">
    <h1 className="text-4xl md:text-8xl font-bold">Born from the street,<br />built for the world</h1>
   
  </motion.div>
</div>
</div>




</div>
 </>
  )
}

export default Hero