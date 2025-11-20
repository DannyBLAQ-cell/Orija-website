import React from 'react'

import { motion } from "framer-motion";
const Cta = () => {
  return (
  <>
  <section className="py-40 bg-primary text-white text-center">
<motion.div
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
className="container mx-auto px-6 lg:px-20"
>
<h2 className="text-4xl lg:text-5xl font-bold mb-6">
Ready to Take Your Hustle Digital?
</h2>
<p className="text-gray-200 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
Download Orija today and experience how simple it is to post, chat, and sell — safely.
</p>


{/* Buttons */}
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
className="bg-green-500 text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-green-600 transition w-full sm:w-auto"
>
🟢 Download App
</motion.button>


<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
className="bg-white/20 backdrop-blur text-white border border-white/30 font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-white/30 transition w-full sm:w-auto"
>
⚪ Join Waitlist
</motion.button>
</div>
</motion.div>
</section>
  
  </>
  )
}

export default Cta