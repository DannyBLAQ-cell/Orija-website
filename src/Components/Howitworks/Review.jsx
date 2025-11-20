import React from 'react'
import { Star, ShieldCheck, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
const Review = () => {
  return (
    <>
    
    <section className="py-40 bg-gray-900 text-white">
<div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
{/* Left: Star / Trust Visual */}
<motion.div
className="flex-1 flex justify-center lg:justify-start"
initial={{ x: -100, opacity: 0 }}
whileInView={{ x: 0, opacity: 1 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
>
<div className="flex flex-col items-center gap-6 bg-gray-800 p-8 rounded-2xl shadow-xl max-w-sm w-full">
<div className="flex gap-2 text-yellow-400 text-4xl">
<Star fill="currentColor" />
<Star fill="currentColor" />
<Star fill="currentColor" />
<Star fill="currentColor" />
<Star fill="currentColor" />
</div>
<div className="flex items-center gap-3">
<BadgeCheck className="text-green-400 w-6 h-6" />
<span className="text-gray-300">Verified Seller</span>
</div>


<div className="flex items-center gap-3">
<ShieldCheck className="text-blue-400 w-6 h-6" />
<span className="text-gray-300">Public Trust Score: 98%</span>
</div>
</div>
</motion.div>


{/* Right: Text Content */}
<motion.div
className="flex-1"
initial={{ x: 100, opacity: 0 }}
whileInView={{ x: 0, opacity: 1 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
>
<h2 className="text-4xl font-bold mb-6">Build a Reputation That Pays</h2>
<p className="text-gray-300 mb-6 leading-relaxed">
Every transaction on Orija ends with a review — your digital word of mouth.
Buyers and sellers can rate each other, leave feedback, and grow their credibility.
Over time, your profile becomes your trust badge — attracting more deals and loyal customers.
</p>


{/* Features */}
<ul className="space-y-3 text-gray-300 mb-8">
<li className="flex items-center gap-2">
<Star className="text-yellow-400 w-5 h-5" />
Star ratings and written reviews
</li>
<li classnName="flex items-center gap-2">
<BadgeCheck className="text-green-400 w-5 h-5" />
Verified seller system
</li>
<li className="flex items-center gap-2">
<ShieldCheck className="text-blue-400 w-5 h-5" />
Public trust scores
</li>
</ul>


{/* CTA Button */}
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
className="bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-600 transition"
>
⭐ Earn Trust, One Review at a Time
</motion.button>
</motion.div>
</div>
</section>
    </>
  )
}

export default Review