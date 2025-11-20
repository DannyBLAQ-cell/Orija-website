import React from 'react'
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
const Timeline = ({events}) => {
  return (
 <>
 
  <section id="story-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Header */}
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
          {/* Curved connecting line for desktop */}
          <svg className="hidden md:block absolute left-0 right-0 top-10 bottom-0 z-0" fill="none" viewBox="0 0 800 1000">
            <path
              d="M400 0 C400 200, 400 400, 400 600 C400 800, 400 1000, 400 1200"
              stroke="#4F46E5" // primary color
              strokeWidth="4"
              className="animate-draw"
            />
          </svg>

          {/* Timeline items */}
          <div className="space-y-14 relative z-10">
            {events.map((event, i) => (
              <TimelineItem key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
 </>
  )
}

export default Timeline