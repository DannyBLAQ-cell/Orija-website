import React from 'react'
import { motion } from "framer-motion";
import { Apple, Play, QrCode } from "lucide-react";
const hero = () => {
  return (
   <>
    <section className="w-full bg-gradient-to-b from-orange-600 to-yellow-700 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ---------- LEFT TEXT ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Join the Social Market for  
            <span className="block mt-2 primary">Everyday Hustlers.</span>
          </h1>

          <p className="text-lg opacity-90">
            Buy, sell, chat, and earn trust — all in one app.
            Experience safe escrow payments, real-time messaging,
            and community-driven reviews.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* Apple Store */}
            <button className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition shadow-lg">
              <Apple size={20} />
              <span>Download on App Store</span>
            </button>

            {/* Google Play */}
            <button className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl hover:bg-gray-200 transition shadow-lg">
              <Play size={20} />
              <span>Get it on Google Play</span>
            </button>
          </div>

          {/* QR CODE SECTION */}
          <div className="flex items-center gap-3 pt-6">
            <div className="bg-white p-3 rounded-xl shadow-xl">
              <QrCode size={150} className="text-black" />
            </div>
            <p className="text-sm opacity-90">Scan to Download</p>
          </div>
        </motion.div>

        {/* ---------- RIGHT VISUALS (PHONE MOCKUPS) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Animated floating mockups */}
          <motion.img
            src="./images/4.png"
            alt="Orija Home"
            className="w-64 rounded-3xl shadow-2xl border border-white/20"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />

          <motion.img
            src="./images/1.png"
            alt="Orija Chat"
            className="w-52 rounded-3xl shadow-2xl border border-white/20 absolute -right-6 top-16 hidden md:block"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
   </>
  )
}

export default hero