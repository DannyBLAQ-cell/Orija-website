import React from 'react'
import {motion,useInView} from 'framer-motion'
import { Check, Star, ShoppingBag,  UserCheck ,MessageCircle,Image, Bell, Shield, RefreshCw,  Package2 ,TrendingUp, Users, Package, ChartAreaIcon, Package2Icon, VerifiedIcon, PersonStanding, PersonStandingIcon, StarIcon, GoalIcon,Wallet } from "lucide-react";
import { useRef } from "react";
const Repeat = () => {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
   <>
     <section
      ref={ref}
      className="relative py-45 mb-40 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 text-white overflow-hidden"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* Left side — rotating circle */}
        <motion.div
          className="relative md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Outer circle */}
          <motion.div
            className="relative w-72 h-72 rounded-full border-4 border-white/20 flex justify-center items-center"
            animate={isInView ? { rotate: 360 } : {}}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Rotating icons */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <Package2 className="w-8 h-8 text-white/90" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <MessageCircle className="w-8 h-8 text-white/90" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <Shield className="w-8 h-8 text-white/90" />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <Star className="w-8 h-8 text-white/90" />
            </div>
          </motion.div>

          {/* Center refresh icon */}
          <motion.div
            className="absolute w-24 h-24 rounded-full bg-white/20 flex items-center justify-center"
            animate={isInView ? { rotate: 360 } : {}}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <RefreshCw className="w-10 h-10 text-white" />
          </motion.div>
        </motion.div>

        {/* Right side — content */}
        <motion.div
          className="md:w-1/2 space-y-5"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-white/80 uppercase text-sm tracking-wider">
            <RefreshCw className="w-5 h-5" />
            <span>Step 5</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">Repeat and Grow</h2>

          <p className="text-sm md:text-base opacity-90 leading-relaxed">
            The more you use Orija, the more trust you build — and the more your hustle grows.
            Every review, every deal, every connection brings new visibility to your brand.
          </p>

          <p className="italic opacity-80">
            “From one post to a business — it all starts here.”
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:bg-green-50 transition">
            🟩 Get Started on Orija
          </button>
        </motion.div>
      </div>
    </section>
   
   </>
  )
}

export default Repeat