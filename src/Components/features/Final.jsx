import React from 'react'
import { motion } from "framer-motion";
import { Download, Clock } from "lucide-react";
const Final = () => {
  return (
    <>
     <section className="relative py-32 bg-primary text-white text-center overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Ready to Take Your Hustle Digital?
        </h2>

        {/* Subtext */}
        <p className="text-lg opacity-90 leading-relaxed mb-10">
          Download <span className="font-semibold">Orija</span> today and experience how simple it is 
          to post, chat, and sell — safely.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-4 bg-green-400 text-green-900 font-semibold rounded-full shadow-lg hover:bg-green-300 transition"
          >
            <Download className="w-5 h-5" />
            🟢 Download App
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-full backdrop-blur-md border border-white/30 hover:bg-white/30 transition"
          >
            <Clock className="w-5 h-5" />
            ⚪ Join Waitlist
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative blurred orb */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-300/20 blur-3xl rounded-full pointer-events-none" />
    </section>
    
    </>
  )
}

export default Final