import React from 'react'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
    
                       <img src="/src/assets/images/logoo.png" alt=""  className='w-40'/>

            <p className="text-sm text-neutral-400">A social marketplace for everyday hustlers. Connect, sell and build trust.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 mt-20">Product</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
             <Link to="/features" className='hover:text-white'>Features</Link>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 mt-20">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 mt-20">Contact</h4>
            <p className="text-sm text-neutral-400">support@orija.example</p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10">T</a>
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10">F</a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10">I</a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-6 text-sm text-neutral-500 flex flex-col md:flex-row md:justify-between gap-3">
          <div>© {new Date().getFullYear()} Orija. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
