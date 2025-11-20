import React from 'react'
import{motion} from 'framer-motion'
import { Check, Star, ShoppingBag,  UserCheck ,MessageCircle,Image, Bell, Shield, RefreshCw,  Package2 ,TrendingUp, Users, Package, ChartAreaIcon, Package2Icon, VerifiedIcon, PersonStanding, PersonStandingIcon, StarIcon, GoalIcon,Wallet } from "lucide-react";


const Market = () => {
  return (
 <>
  <motion.div 
    initial={{ y:-200, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{ease:'easeInOut', duration:0.8, }}
    className='flex gap-5 flex-col '>
         <h1 className='text-4xl md:text-6xl font-bold text-center primary'>Powerfull Features for <br />Modern Sellers.</h1>
    <p className='text-center text-neutral-500 tertiary'>Powerful features designed to help you grow faster and sell more</p>
    </motion.div>
   
    <div className='flex gap-40 justify-center pt-35 mb-40'>
<motion.div 
  initial={{ x:-200, opacity:0}}
    whileInView={{x:0, opacity:1}} 
    transition={{ease:'easeInOut', duration:0.8, }}
className='flex gap-5 flex-col '>
<h1 className='text-5xl font-medium  primary'>Marketplace Features</h1>
<p className='text-neutral-500 text-medium'>
    Everything you need to showcase your products and reach <br />
   the right customers.Our marketplace is designed to make<br />
    set your prices effortlessly
</p>
<p className=' flex flex-col gap-5'>
    <div className='flex gap-4'>
     <Check className='w-5 text-blue-800 bg-blue-100 rounded-full'/>
<div>Quick product listing with drag-and-drop photo uploads</div>   
    </div>

<div className='flex gap-4'>
    <Check className='w-5 text-blue-800 bg-blue-100 rounded-full'/>
    <div>Smart categorization and tagging for better discoverability</div>
</div>

<div className='flex gap-4'>
    <Check className='w-5 text-blue-800 bg-blue-100 rounded-full'/>
<div>Inventory managemet with low-stock alerts</div>
</div>

<div className='flex gap-4'>
    <Check className='w-5 text-blue-800 bg-blue-100 rounded-full'/>
<div>Customizable producet variants(size, color, etc)</div>
</div>

<div className='flex gap-4'>
    <Check className='w-5 text-blue-800 bg-blue-100 rounded-full'/>
<div>Bulk editing and duplicate listing tools</div>
</div>

<div className='flex gap-4'>
    <Check className='w-5 text-blue-800 bg-blue-100 rounded-full'/>
<div>Analytics dashboards showing views and engagement</div>

</div>
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

 
 
 </>
  )
}

export default Market