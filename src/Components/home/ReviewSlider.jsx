import React from 'react'
import { motion } from 'framer-motion'

// Simple two-row marquee/slider for customer reviews.
// Each row duplicates the items so the motion creates a seamless loop.
const reviewsRow = [
  { name: 'Aisha K.', text: 'Orija helped my shop reach new customers — sales doubled in a month.' },
  { name: 'Samir O.', text: 'Fast checkout and the escrow feature gave buyers confidence.' },
  { name: 'Ngozi E.', text: 'Love the chat — direct connections with customers made my repeat rate go up.' },
  { name: 'Kola M.', text: 'Easy listing flow and beautiful UI. Highly recommended.' },
]

const Row = ({ items, duration = 16 }) => {
  // animate from 0 to -50% (since we duplicate items) for a continuous loop
  const animation = {
    x: ['0%', '-50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: duration,
        ease: 'linear',
      },
    },
  }

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex items-stretch"
        animate={animation}
        style={{ willChange: 'transform' }}
      >
        {[...items, ...items].map((r, i) => (
          <div key={i} className="flex-shrink-0 w-72 md:w-96 p-5">
            <div className="bg-secondary rounded-lg p-5 h-full flex flex-col justify-between shadow-sm border border-neutral-700">
              <div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.386-2.46a1 1 0 00-1.176 0l-3.386 2.46c-.785.57-1.84-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-white">"{r.text}"</p>
              </div>

              <div className="mt-4 text-xs text-white font-semibold">— {r.name}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const ReviewSlider = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2 
          initial={{ y:-200, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{ease:'easeInOut', duration:0.8, }}
        className="text-3xl md:text-5xl font-bold text-center mb-3 primary">Loved by Entrepreneurs</motion.h2>
<p className='text-center tertiary pb-10'>See what our community has to say about their succes on Orija</p>
        <div className="space-y-6">
          {/* first row (slower) */}
          <Row items={reviewsRow} duration={20} />

          {/* second row (faster) */}
          <Row items={reviewsRow} duration={12} />
        </div>
      </div>
    </section>
  )
}

export default ReviewSlider
