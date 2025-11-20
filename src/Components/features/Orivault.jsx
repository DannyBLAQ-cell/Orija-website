import React from 'react'
import { Check, Star, ShoppingBag,  UserCheck ,MessageCircle,Image, Bell, Shield, RefreshCw,  Package2 ,TrendingUp, Users, Package, ChartAreaIcon, Package2Icon, VerifiedIcon, PersonStanding, PersonStandingIcon, StarIcon, GoalIcon,Wallet } from "lucide-react";
import {motion} from 'framer-motion'
const Orivault = () => {
  return (
 <>
 
    <section className="relative bg-secondary text-white py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute -top-32 -left-20 w-[30rem] h-[30rem] bg-white/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-white/30 rounded-full blur-3xl" />

      {/* Vault glowing ring */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative flex items-center justify-center mb-10"
      >
        {/* Glowing pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-yellow-300/30 via-purple-400/20 to-blue-400/30 blur-xl"
        />

        {/* Rotating vault ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-44 h-44 border-2 border-dashed border-white rounded-full"
        />

        {/* Floating icons */}
        <div className="relative flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full p-6 shadow-2xl">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Shield className="w-12 h-12 text-yellow-300 drop-shadow-lg" />
          </motion.div>
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="-ml-3"
          >
            <Wallet className="w-12 h-12 text-green-300 drop-shadow-lg" />
          </motion.div>
        </div>
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Orivault — Your Money, Secured.
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl text-gray-200 mb-8 leading-relaxed"
      >
        Orivault is Orija’s built-in escrow system that protects both buyers and sellers.  
        When you make a payment, the money is held safely until you receive what you paid for — 
        and only then is it released. <span className="text-white font-semibold">No scams. No stress.</span>  
        Trust is built right into the transaction.
      </motion.p>

      {/* Features */}
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="space-y-3 text-left text-gray-100 mb-10"
      >
        <li>✅ Secure escrow for every deal</li>
        <li>✅ Instant refunds for unresolved disputes</li>
        <li>✅ Wallet-based tracking for transparency</li>
      </motion.ul>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
        whileTap={{ scale: 0.95 }}
        className="bg-white/20 hover:bg-white/30 transition-all px-8 py-3 rounded-full backdrop-blur-md text-lg font-semibold shadow-md border border-white/20"
      >
        💰 Learn More About Orivault
      </motion.button>
    </section>

 </>
  )
}

export default Orivault