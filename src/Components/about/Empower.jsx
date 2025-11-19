import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const Empower = () => {


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const cards = [
    {
      title: "Empowering Everyday Hustlers",
   
      color: "from-pink-500 to-rose-600",
      images: [
        // "/images/graffiti1.png",
        // "/src/assets/images/dread-img.png",
        "/src/assets/images/city.png",
        "/src/assets/images/Logo.png",
        "/src/assets/images/office.jpg",
        "/src/assets/images/wall.jpg",
        "/src/assets/images/wall.jpg",
        "/src/assets/images/graffiti.jpg",
      ],
    },
    {
     
      text: "Buyers and sellers can transact with confidence through OriVault escrow",
      color: "from-purple-500 to-indigo-600",
      images: [
      "/src/assets/images/city.png",
        "/src/assets/images/random.jpg",
        "/src/assets/images/chat.png",
        "/src/assets/images/chat.png",
        "/src/assets/images/pic-2.jpg",
        "/src/assets/images/pic.jpg",
      ],
    },
    {
    
      text: "Local sellers can finally build trust and reputation online",
      color: "from-blue-500 to-cyan-500",
      images: [
     "/src/assets/images/dread-img.jpg",
        "/src/assets/images/Orivault.png",
        "/src/assets/images/Orivault.png",
        "/src/assets/images/rand.jpg",
        "/src/assets/images/pic-4.jpg",
        "/src/assets/images/pic-3.jpg",
      ],
    },
    {
      text: "Thousands of small bussinesses can now reach new customers",
  
      color: "from-emerald-500 to-green-600",
      images: [
         "/src/assets/images/marketplace.png",
        "/src/assets/images/hero.png",
        "/src/assets/images/city.png",
        "/src/assets/images/pic-6.jpg",
        "/src/assets/images/pic-5.jpg",
        "/src/assets/images/pic-5.jpg",
      ],
    },
  ];
  return (
<>

 <section ref={ref} className="relative bg-gray-50 text-white mb-40">
  <div className="container mx-auto px-6 flex flex-col items-center gap-20 py-20">
    {cards.map((card, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`w-full max-w-4xl h-[80vh] rounded-3xl shadow-2xl bg-gradient-to-br ${card.color} p-10 flex flex-col items-center justify-center text-center relative overflow-hidden`}
      >
        {/* Scattered images */}
        {card.images.map((img, idx) => {
          const randomX = Math.random() * 80 + 10; // 10–90%
          const randomY = Math.random() * 70 + 10; // 10–80%
          const randomRotate = Math.random() * 40 - 20; // -20°–20°
          const randomSize = Math.random() * 80 + 80; // 80–160px

          return (
            <img
              key={idx}
              src={img}
              alt=""
              className="absolute rounded-xl shadow-lg"
              style={{
                top: `${randomY}%`,
                left: `${randomX}%`,
                width: `${randomSize}px`,
                transform: `rotate(${randomRotate}deg)`,
              }}
            />
          );
        })}

        <div className="relative z-10 bg-black/40 backdrop-blur-md px-6 py-4 rounded-xl">
          <h2 className="text-4xl font-bold mb-3">{card.title}</h2>
          <p className="text-2xl text-gray-100 font-bold">{card.text}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
    <div className=' relative bg-primary flex justify-center items-center flex-col gap-5 pb-30 pt-10 '>
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

             <motion.h1
               initial={{y:-300, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1, ease:'easeInOut'}}
             
             >
            <h1 className='text-6xl text-center font-medium pt-25 text-white '>
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
       
        <img src="/src/assets/images/appStore.png" alt="App Store" class="w-15 h-15 color-white" />
        App Store
      </motion.a>
      <motion.a href="#" 
    
    initial={{opacity:0, y:60}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.4,}}
    
    viewport={{once:true, amount:0.8}}
    
      class="flex items-center gap-2 bg-orange-500 text-white px-8 py-1 rounded-full font-semibold hover:bg-green-600 hover:scale-107 transition duration-300 ease-in-out transition active: active:scale-90 transition duration-300 ease-in-out">
        <img src="/src/assets/images/playStore.png" alt="Play Store" class="w-20 h-20" />
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