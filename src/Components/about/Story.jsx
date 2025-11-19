import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const events = [
  { title: 'The Idea', text: 'Orija was inspired by the energy of local markets — the place where stories, products, and people meet.' },
  { title: 'Support Sellers', text: 'We saw an opportunity to bring modern digital tools to small sellers — the shoemaker, the tailor, the food vendor — so their work gets visibility and trust.' },
  { title: 'Social Market', text: 'We turned the open market into a social experience: chat, listings, and community-driven reputation.' },
  { title: 'Growth', text: "Orija connects buyers and sellers, secures payments with escrow, and helps small businesses grow through real reviews and repeat customers." },
]

const Story = () => {
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('story-section')
      if (!section) return

      const rect = section.getBoundingClientRect()
        const denom = window.innerHeight - rect.height
        const raw = denom === 0 ? 0 : (rect.top - 0) / denom
        const clamped = Math.min(Math.max(raw, 0), 1)
        setScrollHeight(Math.round(clamped * 100))
    } 

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
   <section id="story-section" className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 max-w-6xl">

    {/* Top Title */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <h2 className="text-4xl md:text-5xl font-bold primary">Our Story</h2>
      <p className="tertiary mt-3">
        Small beginnings, big community — how Orija came to be.
      </p>
    </motion.div>

    <div className="relative">

      {/* Timeline Line (Light) */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gray-300 -translate-x-1/2"
      />

      {/* Progress Fill Line */}
      <motion.div
        className="absolute left-1/2 top-0 w-[3px] bg-primary -translate-x-1/2"
        style={{ height: `${scrollHeight || 0}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />

      {/* Timeline Items */}
      <div className="space-y-14">
        {events.map((e, i) => (
          <div key={i} className="grid md:grid-cols-3 gap-6 items-center">

            {/* LEFT (Desktop) */}
            <div className={`${i % 2 === 0 ? "md:text-right md:pr-6" : "hidden md:block"}`}>
              {i % 2 === 0 && (
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                >
                  <h3 className="primary text-xl font-semibold">{e.title}</h3>
                  <p className="tertiary mt-2">{e.text}</p>
                </motion.div>
              )}
            </div>

            {/* TIMELINE DOT */}
            <div className="flex justify-center">
              <motion.span
                className="w-4 h-4 bg-primary rounded-full block z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 230, damping: 18, delay: i * 0.05 }}
              />
            </div>

            {/* RIGHT (Desktop) */}
            <div className={`${i % 2 !== 0 ? "md:text-left md:pl-6" : "hidden md:block"}`}>
              {i % 2 !== 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                >
                  <h3 className="primary text-xl font-semibold">{e.title}</h3>
                  <p className="tertiary mt-2">{e.text}</p>
                </motion.div>
              )}
            </div>

            {/* MOBILE VIEW */}
            <div className="md:hidden mt-4">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      className="flex items-start gap-3"
    >
      <div className="w-4 h-4 bg-primary rounded-full mt-1" />
      <div>
        <h3 className="text-lg font-bold primary">{e.title}</h3>
        <p className="tertiary mt-1">{e.text}</p>
      </div>
    </motion.div>
  </div>

          </div>
        ))}
      </div>

    </div>
  </div>
</section>
  )
}

export default Story