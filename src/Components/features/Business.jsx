import React from 'react'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, User, CheckCircle2 } from "lucide-react";
const Business = () => {

    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
  <>
  
  
    <section
      ref={ref}
      className="py-50 px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 primary"
      >
        Designed for Everyone — Built for Growth
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="max-w-2xl mx-auto text-gray-600 mb-12 tertiary"
      >
        Whether you’re just starting your hustle or running a growing business,
        Orija adapts to your needs. Choose the account type that fits your journey.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left"
      >
        {/* Individual Account */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-full">
              <User className="secondary w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Individual Account</h3>
          </div>

          <ul className="space-y-3 text-gray-600">
            <li><strong>Access Type:</strong> Free for all users</li>
            <li><strong>Post Type:</strong> Review-focused posts</li>
            <li><strong>Shopfront:</strong> —</li>
            <li><strong>Ads & Promotions:</strong> Limited</li>
            <li><strong>Reviews:</strong> Can post and receive</li>
            <li><strong>Chat Access:</strong> Basic</li>
          </ul>
        </div>

        {/* Business Account */}
        <div className="bg-green-50 rounded-2xl shadow-md p-8 border border-green-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-secondary rounded-full">
              <Building2 className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Business Account</h3>
          </div>

          <ul className="space-y-3 text-gray-700">
            <li><strong>Access Type:</strong> For verified vendors & brands</li>
            <li><strong>Post Type:</strong> Full product/service listings</li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600 w-5 h-5" /> Custom storefront
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-600 w-5 h-5" /> Boosted visibility
            </li>
            <li><strong>Reviews:</strong> Can post and receive</li>
            <li><strong>Chat Access:</strong> Full chat + insights</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-12"
      >
        <button className="bg-secondary hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition">
          Upgrade to a Business Profile
        </button>
      </motion.div>
    </section>
  </>
  )
}

export default Business