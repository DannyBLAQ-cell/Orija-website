import React from 'react'
import {motion} from 'framer-motion'
import { Check, Star, ShoppingBag,  UserCheck ,MessageCircle,Image, Bell, Shield, RefreshCw,  Package2 ,TrendingUp, Users, Package, ChartAreaIcon, Package2Icon, VerifiedIcon, PersonStanding, PersonStandingIcon, StarIcon, GoalIcon,Wallet } from "lucide-react";

const Chat = () => {
  return (
  <>
      <section className=" ,flex-col relative text-neutral-900 py-50 px-6 overflow-hidden md:flex  gap-35 items-center justify-center ">
      {/* Background lights */}
      {/* <div className="absolute -top-20 left-10 w-[25rem] h-[25rem] bg-blue-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-[20rem] h-[20rem] bg-purple-500/30 rounded-full blur-3xl" /> */}

      {/* Animated chat preview mockup */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 w-[350px] sm:w-[420px] mb-10 shadow-2xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" />
          <div>
            <p className="font-semibold">Chidera — Buyer</p>
            <p className="text-xs text-gray-300">Online</p>
          </div>
        </div>

        <div className="space-y-3 text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/20 w-fit px-4 py-2 rounded-xl rounded-tl-none"
          >
            Hi! Is the item still available?
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-blue-500/40 w-fit px-4 py-2 rounded-xl rounded-tr-none ml-auto"
          >
            Yes, it is! Want me to send a few pictures?
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/20 w-fit px-4 py-2 rounded-xl rounded-tl-none"
          >
            Sure, please! 😊
          </motion.div>
        </div>

        {/* Chat input */}
        <div className="mt-5 flex items-center bg-white/10 rounded-full px-3 py-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-300"
          />
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            Send
          </button>
        </div>
      </motion.div>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 primary">Chat That Builds Trust</h2>
        <p className="tertiary mb-6">
          Unlike typical marketplaces, Orija lets you chat directly with buyers or sellers. <br />
          Discuss deals, ask questions, share proof — all within the app.
          Conversations are <br /> part of the experience, making every transaction feel human and trustworthy.
        </p>

        <ul className="text-left text-neutral-500 space-y-2 mb-8">
          <li>💬 Direct in-app chat</li>
          <li>🖼️ Media sharing (photos, receipts, samples)</li>
          <li>🔔 Instant notifications</li>
        </ul>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="bg-primary text-white hover:bg-white/30 transition-all px-8 py-3 rounded-full backdrop-blur-md text-lg font-semibold shadow-md"
        >
          💬 Try Chat Now
        </motion.button>
      </motion.div>
    </section>
  
  </>
  )
}

export default Chat