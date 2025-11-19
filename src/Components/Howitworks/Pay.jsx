import React from 'react'
import { Lock, CreditCard } from "lucide-react"; // Lucide icons
import { motion } from "framer-motion";
const Pay = () => {
  return (
 <>
 
    <section className="py-40 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start gap-12">

        {/* Left: Orivault Mockup / Graphic */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src=' /src/assets/images/secure.png'
            alt="Orivault Mockup"
            className="w-full max-w-sm rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="flex-1"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-2">
            3️⃣ Pay Safely with Orivault
          </h2>
          <p className="text-gray-700 mb-6">
            Once you agree on a deal, make your payment securely through Orivault — Orija’s built-in escrow wallet. Your money stays protected until you confirm satisfaction or delivery. Only then is it released to the seller.
          </p>

          {/* Features */}
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-2">
              <Lock className="text-green-500 w-5 h-5 mt-1" />
              Secure escrow system
            </li>
            <li className="flex items-start gap-2">
              <CreditCard className="text-green-500 w-5 h-5 mt-1" />
              Transparency for both parties
            </li>
            <li className="flex items-start gap-2">
              <Lock className="text-green-500 w-5 h-5 mt-1" />
              Instant refunds for canceled deals
            </li>
          </ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            💸 Learn More About Orivault
          </motion.button>
        </motion.div>
      </div>
    </section>
 
 </>
  )
}

export default Pay