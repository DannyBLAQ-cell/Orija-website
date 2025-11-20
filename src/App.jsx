import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Howitworks from "./pages/Howitworks";
import Download from "./pages/Download";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
   <Router>
<Routes>
  <Route  path="/" element={<Home/>}/>
  <Route  path="/about" element={<About/>}/>
  <Route  path="/features" element={<Features/>}/>
  <Route  path="/how-it-works" element={<Howitworks/>}/>
  <Route  path="/download" element={<Download/>}/>
  <Route  path="/contact" element={<Contact/>}/>

</Routes>

   </Router>
    </>
  )
}

export default App