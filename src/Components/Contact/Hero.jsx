import React from 'react'
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Twitter, Linkedin, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
 <>
 
 <div className="w-full min-h-screen bg-gray-50 text-gray-900">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="bg-secondary text-white py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">We’d Love to Hear From You.</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Got questions, feedback, or partnership ideas? Reach out and we’ll get back to you soon.
          </p>
          <p className="text-sm text-purple-200">Free forever. Secure and trusted by everyday hustlers.</p>

          {/* Simple message bubble illustration */}
          <motion.div
            className="mx-auto mt-8 bg-white primary px-6 py-4 rounded-xl shadow-xl w-fit"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <MessageSquare size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* ---------------- CONTACT FORM SECTION ---------------- */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">

          {/* LEFT: FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-5 bg-white p-8 rounded-2xl shadow-lg">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:secondary outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary outline-none"
              />

              <select
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary outline-none"
              >
                <option>Subject</option>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Partnership</option>
                <option>Press</option>
                <option>Other</option>
              </select>

              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-secondary outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-tertiary hover:bg-purple-800 text-white p-3 rounded-xl font-semibold shadow-md transition"
              >
                Send Message
              </button>

              {/* Success message placeholder */}
              <p className="text-sm text-green-600 hidden">Thank you! We’ll get back to you shortly.</p>
            </form>
          </motion.div>

          {/* RIGHT: CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-3">
                  <Mail className="tertiary" size={20} /> support@orija.app
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="tertiary" size={20} /> +000 000 0000 (optional)
                </p>
              </div>
            </div>

            {/* SOCIALS */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
              <div className="flex gap-5 tertiary">
                <a href="#" className="hover:text-purple-900"><Instagram size={26} /></a>
                <a href="#" className="hover:text-purple-900"><Twitter size={26} /></a>
                <a href="#" className="hover:text-purple-900"><Linkedin size={26} /></a>
              </div>
              <p className="text-sm mt-2 text-gray-500">@orijaapp</p>
            </div>

            {/* SUPPORT SECTION */}
            <div>
              <h2 className="text-2xl font-bold mb-3">Need Help?</h2>
              <p className="text-gray-700 mb-4">
                Visit our Help Center or reach out through the in-app Support Chat.
              </p>

              <div className="space-y-2">
                <a href="https://help.orija.app" className="tertiary hover:underline">
                  Help Center → help.orija.app
                </a>
                <br />
                <a href="https://community.orija.app" className="tertiary hover:underline">
                  Community Support → community.orija.app
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
 </>
  )
}

export default Hero