import React from 'react'
import {motion} from 'framer-motion'
import { Check, Star, ShoppingBag,  UserCheck ,MessageCircle,Image, Bell, Shield, RefreshCw,  Package2 ,TrendingUp, Users, Package, ChartAreaIcon, Package2Icon, VerifiedIcon, PersonStanding, PersonStandingIcon, StarIcon, GoalIcon,Wallet } from "lucide-react";

const Review = () => {
  return (
   <>
        <section className="relative py-50 bg-secondary text-white overflow-hidden">
         {/* Decorative glow */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
   
         <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
           {/* Left side — text content */}
           <div className="md:w-1/2 space-y-5">
             <div className="flex items-center gap-2 text-yellow-300">
               <Star className="w-6 h-6" />
               <span className="font-semibold tracking-wide uppercase">Step 4</span>
             </div>
   
             <h2 className="text-3xl md:text-4xl font-bold">
               Review and Earn Trust
             </h2>
   
             <p className="text-sm md:text-base opacity-90 leading-relaxed">
               After every transaction, both buyer and seller can rate and review each other. 
               These reviews build your reputation, helping you attract more customers and better deals over time.
             </p>
   
             <ul className="space-y-2 text-sm md:text-base">
               <li className="flex items-center gap-2">
                 <Star className="w-5 h-5 text-yellow-300" /> 5-star rating system
               </li>
               <li className="flex items-center gap-2">
                 <UserCheck className="w-5 h-5 text-yellow-300" /> Verified reviews only from real transactions
               </li>
               <li className="flex items-center gap-2">
                 <Star className="w-5 h-5 text-yellow-300" /> Public trust score for credibility
               </li>
             </ul>
   
             <button className="mt-6 px-6 py-3 bg-white text-pink-600 rounded-full font-semibold hover:bg-yellow-50 transition">
               ⭐ Grow Your Reputation
             </button>
           </div>
   
           {/* Right side — mock review visuals */}
           <div className="md:w-1/2 flex flex-col gap-4">
             <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg">
               <p className="text-sm mb-2">⭐️⭐️⭐️⭐️⭐️</p>
               <p className="text-sm italic">
                 “Fast delivery and smooth communication. Would definitely trade again!”
               </p>
               <p className="text-xs mt-2 opacity-70">— Verified Buyer</p>
             </div>
   
             <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg ml-6">
               <p className="text-sm mb-2">⭐️⭐️⭐️⭐️</p>
               <p className="text-sm italic">
                 “Great experience, the escrow made it feel totally safe.”
               </p>
               <p className="text-xs mt-2 opacity-70">— Verified Seller</p>
             </div>
           </div>
         </div>
       </section>
   
   </>
  )
}

export default Review