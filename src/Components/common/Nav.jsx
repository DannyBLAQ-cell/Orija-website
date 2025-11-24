import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
const Nav = () => {
   const [open, setOpen] = useState(false);
  return (
    <>
 <header className="bg-[var(--color-primary)] sticky top-0 z-[500] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:px-8">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src="  /images/logoo.png" alt="Orija Logo" className="w-28" />
        </div>

        {/* DESKTOP LINKS */}
        <nav className="hidden md:flex flex-row list-none gap-10 primary font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/how-it-works">HowItWorks</Link>
          <Link to="/download">Download</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* DESKTOP AUTH BUTTONS */}
        <div className="hidden md:flex gap-3">
          <button className="text-white">Sign in</button>
          <button className="bg-primary p-3 rounded-full text-white">
            Get started
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden primary" onClick={() => setOpen(true)}>
          <Menu size={32} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[var(--color-primary)] text-white absolute top-0 left-0 w-full h-screen px-6 py-6 z-[600]"
          >
            {/* CLOSE BUTTON */}
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)}>
                <X size={32} />
              </button>
            </div>

            {/* MOBILE NAV LINKS */}
            <div className="mt-10 flex flex-col gap-6 text-2xl font-semibold">
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              <Link to="/features" onClick={() => setOpen(false)}>Features</Link>
              <Link to="/how-it-works" onClick={() => setOpen(false)}>How It Works</Link>
              <Link to="/download" onClick={() => setOpen(false)}>Download</Link>
              <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>

            {/* AUTH BUTTONS */}
            <div className="mt-10 flex flex-col gap-4">
              <button className="text-white text-xl">Sign In</button>
              <button className="bg-primary p-4 rounded-full text-white text-xl">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>


</>
  )
}

export default Nav