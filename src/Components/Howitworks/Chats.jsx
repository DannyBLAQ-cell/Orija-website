import React from 'react'
import { MessageCircle } from "lucide-react"; // Lucide icon
import { motion } from "framer-motion";
const Chats = () => {
  return (
<>

     <section className="py-40 bg-white">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        
        {/* Left: Chat Mockup with animation */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src='/images/chatt.png '
            alt="Chat UI Mockup"
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
            2️⃣ Chat with Buyers and Sellers
          </h2>
          <p className="text-gray-700 mb-6">
            No middlemen. No hidden numbers. Chat directly within Orija to discuss deals, confirm delivery, and build genuine connections. Communication is safe, private, and part of every transaction.
          </p>

          {/* Features */}
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-2">
              <MessageCircle className="text-blue-500 w-5 h-5 mt-1" />
              Real-time messaging
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="text-blue-500 w-5 h-5 mt-1" />
              Media and receipt sharing
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="text-blue-500 w-5 h-5 mt-1" />
              Instant notifications
            </li>
          </ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Start a Conversation
          </motion.button>
        </motion.div>
      </div>
    </section>
</>
  )
}

export default Chats