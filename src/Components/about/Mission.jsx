import React from 'react'
import { easeInOut, motion } from 'framer-motion'

const Mission = () => {
    return (
        <section className="bg-white mb-40">
    <motion.div
  initial={{ opacity: 0, y: -80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <h2 className="text-4xl md:text-6xl font-bold primary">Our Mission & Values</h2>
  <p className="tertiary text-lg mt-3">
    Guided by principles that put our community first
  </p>
</motion.div>

{/* Mission + Vision Container */}
<div className="container mx-auto max-w-6xl px-6 flex flex-col gap-12">

  {/* Mission */}
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="flex flex-col md:flex-row items-start md:items-center gap-6"
  >
    <span className="inline-flex items-center bg-primary text-white px-5 py-2 rounded-full font-medium shadow-md">
      Mission
    </span>

    <div className="border border-primary shadow-xl rounded-xl p-6 bg-white/40 backdrop-blur-sm hover:scale-105 transition duration-300 ease-in-out">
      <p className="text-neutral-600 leading-relaxed">
        To empower everyday hustlers and small businesses with a safe, social, and
        transparent way to buy, sell, and build trust online.
      </p>
    </div>
  </motion.div>

  {/* Vision */}
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="flex flex-col md:flex-row items-start md:items-center gap-6"
  >
    <div className="border border-primary shadow-xl rounded-xl p-6 bg-white/40 backdrop-blur-sm hover:scale-105 transition duration-300 ease-in-out order-2 md:order-1">
      <p className="text-neutral-600 leading-relaxed">
        To become the most trusted digital market for emerging economies — connecting
        people, products, and passion through technology.
      </p>
    </div>

    <span className="inline-flex items-center bg-primary text-white px-5 py-2 rounded-full font-medium shadow-md order-1 md:order-2">
      Vision
    </span>
  </motion.div>
</div>
        </section>
    )
}

export default Mission