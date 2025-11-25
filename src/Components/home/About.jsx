import React, { Profiler } from 'react'
import {easeInOut, motion} from 'framer-motion'
import ReviewSlider from './ReviewSlider'
import { Check, Star, ShoppingBag, MessageCircle, Shield, TrendingUp, Users, Package, ChartAreaIcon, Package2Icon, VerifiedIcon, PersonStanding, PersonStandingIcon, StarIcon } from "lucide-react";
const About = () => {
  return (
<>
<div className='flex flex-col-reverse justify-center items-center'>
<div className='flex flex-col  items-center gap-10 pt-30 pb-40  '>
    <motion.h1>
 <h1 className=' text-5xl md:text-7xl primary font-bold'>What Is Orija?</h1>

    </motion.h1>

    <motion.p
    className=' m-5 flex justify-center items-center flex-col gap-8  shadow-xl p-7 rounded-xl hover: hover:scale-106 transition duration-300 ease-in-out cursor-pointer hover:backdrop-blur-md hover:bg-white/10 border border-secondary'
    >
        
<p className='  text-center tertiary text-1xl '>Orija- short for Ori Oja (meaning "Head of Market")-is a social market place that <br />
empowers everyday hustlers, small businesses and individuals to sell, connect 
and<br /> earn trust online.Its not just another marketplace- its your community, your store, <br /> and your digital
street market in one app
</p>


    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center gap-2 border bg-primary text-white px-5 py-2 rounded-full hover:bg-white transition"
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

 <div >

<motion.img src="./images/4-Photoroom.png" alt="" 
className='h-auto h-160 w-210 rounded-2xl   '

  animate={{
    y: [0, -15, 0]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
   </div>
</div>




  
<div className='flex bg-white flex-col pt-40 justify-center items-center gap-5'>
     <motion.h1>
        <h1 className='text-4xl md:text-6xl font-bold primary'>
            How Orija Works
        </h1>
        
         </motion.h1>

         <motion.p>
            <p className='text-lg text-center text-neutral-500 tertiary'>
                Get started in three simple steps and join our thriving community
            </p>
           
             </motion.p>
<section className="flex justify-center gap-20 pt-5 flex-wrap text-center pb-50">
  {/* 1️⃣ Step Card */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">
    <h1 className="animate-bounce bg-tertiary rounded-full w-8 h-8 flex items-center justify-center font-bold text-white">1</h1>

    <div className="bg-secondary rounded-lg text-white p-5 inline-flex items-center justify-center">
      <Package2Icon className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg primary">List Your Product</h1>
      <p className="text-sm text-neutral-400 tertiary">Create listings in minutes with our easy-to-use interface</p>
    </div>
  </div>

  {/* 2️⃣ Step Card */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">
        <h1 className="animate-bounce bg-tertiary rounded-full w-8 h-8 flex items-center justify-center font-bold text-white">2</h1>

    <div className="bg-secondary rounded-lg text-white p-5 inline-flex items-center justify-center">
      <MessageCircle className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg primary">Connect With Buyers</h1>
      <p className="text-sm text-neutral-500 tertiary">Chat directly and build relationships with your customers</p>
    </div>
  </div>

  {/* 3️⃣ Step Card */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">
        <h1 className="animate-bounce bg-tertiary rounded-full w-8 h-8 flex items-center justify-center font-bold text-white">3</h1>

    <div className="bg-secondary rounded-lg text-white p-5 inline-flex items-center justify-center">
      <Shield className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg primary">Secure Payment</h1>
      <p className="text-sm text-neutral-500 tertiary">Get paid safely through OriVault escrow system</p>
    </div>
  </div>
</section>


</div>

<motion.section 
className='  pt-10 pb-40 bg-gray-50'>
    <motion.div 
    initial={{ y:-200, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{ease:'easeInOut', duration:0.8, }}
    className='flex gap-5 flex-col '>
         <h1 className='text-4xl md:text-6xl font-bold primary text-center'>Everything You Need to Succeed.</h1>
    <p className='text-center tertiary'>Powerful features designed to help you grow faster and sell more</p>
    </motion.div>
   


<div className="flex flex-col-reverse md:flex-row items-center justify-center md: pt-20 px-6">

  {/* LEFT SIDE TEXT */}
  <motion.div
    initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.8 }}
    className="flex flex-col gap-5 md:gap-6 md:ml-45"
  >
    <h1 className="text-3xl md:text-5xl font-medium primary ">
      Easy Listing
    </h1>

    <p className="tertiary text-base md:text-lg leading-relaxed">
      Create beautiful product listings in seconds with <br />our intuitive interface. 
      Upload multiple photos, <br />add descriptions, and set your prices effortlessly.
    </p>

 <div className="space-y-3">
          <div className="flex items-start gap-3 tertiary">
            <Check className="text-green-600 mt-1" size={20} />
            <span>Quick photo uploads</span>
          </div>

          <div className="flex items-start gap-3 tertiary">
            <Check className="text-green-600 mt-1" size={20} />
            <span>Rich text description</span>
          </div>


          <div className="flex items-start gap-3 tertiary">
            <Check className="text-green-600 mt-1" size={20} />
            <span>Flexible pricing options</span>
          </div>

          <div className="flex items-start gap-3 tertiary">
            <Check className="text-green-600 mt-1" size={20} />
            <span>Inventory management</span>
          </div>
        </div>
  </motion.div>

  {/* RIGHT SIDE IMAGE */}
  <motion.div
    initial={{ x: 200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 1 }}
    className=""
  >
    <img
      src="./images/5-Photoroom.png"
      alt="Listing mockup"
      className="rounded-xl w-210 h-160 h-auto "
    />
  </motion.div>

</div>
{/* orivault */}
   

 <div className="flex flex-col md:flex-row items-center justify-center  md: pt-20 px-6">

      {/* LEFT IMAGE */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className=" "
      >
        <img
          src="./images/3-1-Photoroom.png"
          alt="Orivault"
          className="w-210 h-160 h-auto rounded-xl hover hover: cursor-pointer "
        />
      </motion.div>

      {/* RIGHT TEXT */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        className="flex flex-col gap-6 "
      >
        <h1 className="text-3xl md:text-5xl font-medium primary leading-snug">
          Secure Payments with  <span className="">OriVault</span><br />
         
        </h1>

        <p className="tertiary text-base md:text-lg leading-relaxed">
          Our escrow payment system protects both buyers and sellers. <br />
          Funds are held securely until the transaction is complete, <br />
          giving everyone peace of mind.
        </p>

        {/* FEATURES WITH CHECK ICONS */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 tertiary">
            <Check className="text-green-600 mt-1" size={20} />
            <span>Escrow protection</span>
          </div>

          <div className="flex items-start gap-3 tertiary">
            <Check className="text-green-600 mt-1" size={20} />
            <span>Multiple Payment options</span>
          </div>


          <div className="flex items-start gap-3 tertiary">
            <Check className="text-green-600 mt-1" size={20} />
            <span>Fast payouts</span>
          </div>

          <div className="flex items-start gap-3 tertiary">
            <Check className="text-green-600 mt-1" size={20} />
            <span>Transaction history</span>
          </div>
        </div>
      </motion.div>
    </div>
{/* message */}

<div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20 pt-20 px-6 md:m-auto">

  {/* LEFT SIDE TEXT */}
  <motion.div
    initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.8 }}
    className="flex flex-col gap-5 md:gap-6 md:ml-45"
  >
    <h1 className="text-3xl md:text-5xl font-medium primary">
     Built-in Messaging
    </h1>

    <p className="tertiary text-base md:text-lg leading-relaxed">
    Communicate seamlessly with buyers and sellers. <br />Negotiate
    prices, ask questions, and build lasting <br /> business relationships<br />
all within the app.
    </p>

 <div className="space-y-3">
          <div className="flex items-start gap-3 tertiary">
            <Check className="text-green-600 mt-1" size={20} />
            <span>Real-time chat</span>
          </div>

          <div className="flex items-start gap-3 tertiary">
            <Check className="text-green-600 mt-1" size={20} />
            <span>Photo sharing</span>
          </div>


          <div className="flex items-start gap-3 tertiary">
            <Check className="text-green-600 mt-1" size={20} />
            <span>Order details integration</span>
          </div>

          <div className="flex items-start gap-3 tertiary">
            <Check className="text-green-600 mt-1" size={20} />
            <span>Notification system</span>
          </div>
        </div>
  </motion.div>

  {/* RIGHT SIDE IMAGE */}
  <motion.div
    initial={{ x: 200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 1 }}
    className=""
  >
    <img
      src="./images/1-Photoroom.png"
      alt="Listing mockup"
      className="rounded-xl w-210 h-160 h-auto"
    />
  </motion.div>

</div>

</motion.section>

  <ReviewSlider />

<div className='flex bg-white flex-col pt-40 justify-center items-center gap-5'>
     <motion.h1>
        <h1 className=' text-4xl md:text-6xl font-bold primary '>
            Built on Trust & Safety
        </h1>
        
         </motion.h1>

         <motion.p>
            <p className='text-lg text-center tertiary'>
We're commited to creating a safe, secure marketplace for everyone            </p>
           
             </motion.p>
<section className="flex justify-center gap-20 pt-5 flex-wrap text-center pb-50">
  {/* 1️⃣ Step Card */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">

    <div className="bg-secondary rounded-lg text-white p-5 inline-flex items-center justify-center">
      <VerifiedIcon className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg primary">Verified Sellers</h1>
      <p className="text-sm tertiary">All sellers go through our <br /> verification process</p>
    </div>
  </div>

  {/* 2️⃣ Step Card */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">

    <div className="bg-secondary rounded-lg text-white p-5 inline-flex items-center justify-center">
      <Shield className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg primary">Secure Payments</h1>
      <p className="text-sm tertiary">OriVault escrow protects <br />every transaction</p>
    </div>
  </div>

  {/* 3️⃣ Step Card */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">

    <div className="bg-secondary rounded-lg text-white p-5 inline-flex items-center justify-center">
      <PersonStandingIcon className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg primary">Buyer protection</h1>
      <p className="text-sm text-neutral-500 tertiary">30-day money-back <br /> guarantee on all purchases</p>
    </div>
  </div>
  {/* 4th slide */}
  <div className="flex flex-col items-center max-w-[250px] space-y-3">

    <div className="bg-secondary rounded-lg text-white p-5 inline-flex items-center justify-center">
      <StarIcon className="w-7 h-10 text-white" />
    </div>

    <div>
      <h1 className="font-semibold text-lg primary">Community <br />Standards</h1>
      <p className="text-sm tertiary">Trusted ratings and reviews <br /> from real users</p>
    </div>
  </div>
</section>


</div>

<div className='bg-primary flex justify-center items-center flex-col gap-5 pb-25 '>
         <motion.h1>
        <h1 className='text-4xl md:text-6xl font-medium pt-25 text-white '>
          Ready to Start Selling?         
        </h1>
        
         </motion.h1>

         <motion.p>
            <p className='text-lg text-center alternate'>
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
      class="absolute right-1 top-1 bottom-1 bg-secondary text-white px-5 rounded-full hover:bg-blue-700 transition hover:scale-102  11 transition duration-300 ease-in-out transition active: active:scale-90 transition duration-300 ease-in-out"
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