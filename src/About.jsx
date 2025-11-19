import React, { Profiler } from 'react'
import {easeInOut, motion} from 'framer-motion'
import ReviewSlider from './Components/home/ReviewSlider'
import { Check, Star, ShoppingBag, MessageCircle, Shield, TrendingUp, Users, Package, ChartAreaIcon, Package2Icon, VerifiedIcon, PersonStanding, PersonStandingIcon, StarIcon } from "lucide-react";
const About = () => {
  return (
<>

<div className='flex flex-col justify-center items-center gap-10 pt-40 '>
    <motion.h1>
 <h1 className='text-7xl  font-medium'>What Is Orija?</h1>

    </motion.h1>

    <motion.p
    className='flex justify-center items-center flex-col gap-8  shadow-xl p-7 rounded-xl hover: hover:scale-106 transition duration-300 ease-in-out cursor-pointer hover:backdrop-blur-md hover:bg-white/10 border border-neutral-600'
    >
        
<p className='text-center text-neutral-500 text-lg '>Orija- short for Ori Oja (meaning "Head of Market")-is a social market place that <br />
empowers everyday hustlers, small businesses and individuals to sell, connect 
and<br /> earn trust online.Its not just another marketplace- its your community, your store, <br /> and your digital
street market in one app
</p>


    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
    >
      Learn More
      <motion.svg
        whileHover={{ x: 5 }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </motion.svg>
    </motion.button>
    </motion.p>



   
</div>

<div className='flex flex-col pt-40 justify-center items-center gap-5'>
     <motion.h1>
        <h1 className='text-6xl font-medium '>
            How Orija Works
        </h1>
        
         </motion.h1>

         <motion.p>
            <p className='text-lg text-center text-neutral-500'>
                Get started in three simple steps and join our thriving community
            </p>
           
             </motion.p>
<section className="flex justify-center gap-20 pt-5 flex-wrap text-center pb-50">
  {/* 1️⃣ Step Card */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">
    <h1 className="animate-bounce bg-pink-500 rounded-full w-8 h-8 flex items-center justify-center font-bold text-white">1</h1>

    <div className="bg-gradient-to-r from-purple-400 to-blue-600 rounded-lg text-white p-5 inline-flex items-center justify-center">
      <Package2Icon className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg">List Your Product</h1>
      <p className="text-sm text-neutral-400">Create listings in minutes with our easy-to-use interface</p>
    </div>
  </div>

  {/* 2️⃣ Step Card */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">
        <h1 className="animate-bounce bg-pink-400 rounded-full w-8 h-8 flex items-center justify-center font-bold text-white">2</h1>

    <div className="bg-gradient-to-r from-purple-400 to-blue-600 rounded-lg text-white p-5 inline-flex items-center justify-center">
      <MessageCircle className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg">Connect With Buyers</h1>
      <p className="text-sm text-neutral-500">Chat directly and build relationships with your customers</p>
    </div>
  </div>

  {/* 3️⃣ Step Card */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">
        <h1 className="animate-bounce bg-pink-400 rounded-full w-8 h-8 flex items-center justify-center font-bold text-white">3</h1>

    <div className="bg-gradient-to-r from-purple-400 to-blue-600 rounded-lg text-white p-5 inline-flex items-center justify-center">
      <Shield className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg">Secure Payment</h1>
      <p className="text-sm text-neutral-500">Get paid safely through OriVault escrow system</p>
    </div>
  </div>
</section>


</div>

<motion.section 
className='  pt-10 pb-40'>
    <motion.div 
    initial={{ y:-200, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{ease:'easeInOut', duration:0.8, }}
    className='flex gap-5 flex-col '>
         <h1 className='text-6xl font-medium text-center'>Everything You Need to Succeed.</h1>
    <p className='text-center text-neutral-500'>Powerful features designed to help you grow faster and sell more</p>
    </motion.div>
   
   <div className='flex gap-40 justify-center pt-20'>
<motion.div 
  initial={{ x:-200, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{ease:'easeInOut', duration:0.8, }}
className='flex gap-5 flex-col mt-25'>
<h1 className='text-5xl font-medium'>Easy listing</h1>
<p className='text-neutral-500 text-medium'>
    Create beautiful product listings in seconds with our <br />
    intuitive interface. Upload multiple photos,add descriptions and <br />
    set your prices effortlessly
</p>
<p className='ml-5'>
<li className='list-[square]'>Quick photos uploads</li>
<li className='list-[square] '>Rich text descriptions</li>
<li className='list-[square] '>Flexible pricing options</li>
<li className='list-[square] '>Inventory management</li>
</p>
</ motion.div>

<motion.div
  initial={{ x:200, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{ease:'easeInOut', duration:1, }}
>
    <img src="/src/assets/images/marketplace.png" alt=""  className='w-100 h-100 rounded-xl shadow-2xl' />
</motion.div >
   </div>


   <div className='flex gap-40 justify-center pt-20'>
<motion.div
  initial={{ x:-200, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{ease:'easeInOut', duration:1, }}
>
    <img src="/src/assets/images/Orivault.png" alt=""  className='w-100 h-100 rounded-xl shadow-2xl' />
</motion.div >

<motion.div 
  initial={{ x:200, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{ease:'easeInOut', duration:0.8, }}
className='flex gap-5 flex-col mt-25'>


    
<h1 className='text-5xl font-medium'>Secure Payments with <br />OriVaults</h1>
<p className='text-neutral-500 text-medium'>
    Our escrow payment system protects both buyers and sellers <br />
    Funds are held securely untill transaction is<br />
    complete ,giving everyone peace of mind
</p>
<p className='ml-5'>
<li className='list-[square]'>Escow protection</li>
<li className='list-[square] '>Multiple payment methods</li>
<li className='list-[square] '>Fast payouts</li>
<li className='list-[square] '>Transaction history</li>
</p>
</ motion.div>


   </div>

   <div className='flex gap-40 justify-center pt-20'>
<motion.div 
  initial={{ x:-200, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{ease:'easeInOut', duration:0.8, }}
className='flex gap-5 flex-col mt-25'>


    
<h1 className='text-5xl font-medium'>Built-in Messaging</h1>
<p className='text-neutral-500 text-medium'>
    Communicate seamlessly with buyers and sellers. Negotiate<br />
    prices, ask questions, and build lasting business relationships<br />
all within the app.</p>
<p className='ml-5'>
<li className='list-[square]'>Real-time chat</li>
<li className='list-[square] '>Photo sharing</li>
<li className='list-[square] '>Order details integration</li>
<li className='list-[square] '>Notification system</li>
</p>
</ motion.div>

<motion.div
  initial={{ x:200, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{ease:'easeInOut', duration:1, }}
>
    <img src="/src/assets/images/chat.png" alt=""  className='w-100 h-100 rounded-xl shadow-2xl' />
</motion.div >

   </div>
</motion.section>

  <ReviewSlider />

<div className='flex flex-col pt-40 justify-center items-center gap-5'>
     <motion.h1>
        <h1 className='text-6xl font-medium '>
            Built on Trust & Safety
        </h1>
        
         </motion.h1>

         <motion.p>
            <p className='text-lg text-center text-neutral-500'>
We're commited to creating a safe, secure marketplace for everyone            </p>
           
             </motion.p>
<section className="flex justify-center gap-20 pt-5 flex-wrap text-center pb-50">
  {/* 1️⃣ Step Card */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">

    <div className="bg-gradient-to-r from-purple-400 to-blue-600 rounded-lg text-white p-5 inline-flex items-center justify-center">
      <VerifiedIcon className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg">Verified Sellers</h1>
      <p className="text-sm text-neutral-400">All selles go through our <br /> verification process</p>
    </div>
  </div>

  {/* 2️⃣ Step Card */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">

    <div className="bg-gradient-to-r from-purple-400 to-blue-600 rounded-lg text-white p-5 inline-flex items-center justify-center">
      <Shield className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg">Secure Payments</h1>
      <p className="text-sm text-neutral-500">OriVault escrow protects <br />every transaction</p>
    </div>
  </div>

  {/* 3️⃣ Step Card */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">

    <div className="bg-gradient-to-r from-purple-400 to-blue-600 rounded-lg text-white p-5 inline-flex items-center justify-center">
      <PersonStandingIcon className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg">Buyer protection</h1>
      <p className="text-sm text-neutral-500">30-day money-back <br /> guarantee on all purchases</p>
    </div>
  </div>
  {/* 4th slide */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">

    <div className="bg-gradient-to-r from-purple-400 to-blue-600 rounded-lg text-white p-5 inline-flex items-center justify-center">
      <StarIcon className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg">Community <br />Standards</h1>
      <p className="text-sm text-neutral-500">Trusted ratings and reviews <br /> from real users</p>
    </div>
  </div>
</section>


</div>

<div className='bg-gradient-to-r from-purple-400 to-blue-600 flex justify-center items-center flex-col gap-5 pb-25 '>
         <motion.h1>
        <h1 className='text-6xl font-medium pt-25 text-white '>
          Ready to Start Selling?         
        </h1>
        
         </motion.h1>

         <motion.p>
            <p className='text-lg text-center text-neutral-700'>
Join thousands of successful etrepreneurs on Orija today</p>
           
             </motion.p>

             
  <div class="flex justify-center items-center ">
  <div class="relative w-full max-w-md">
    <input
      type="email"
      placeholder="Enter your email"
      class="w-full py-6 pl-4 pr-36 bg-white rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      class="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-purple-400 to-blue-600 text-white px-5 rounded-full hover:bg-blue-700 transition hover:scale-102  11 transition duration-300 ease-in-out transition active: active:scale-90 transition duration-300 ease-in-out"
    >
      Join the Waitlist
    </button>
  </div>
</div>

</div>


</>
  )
}

export default About