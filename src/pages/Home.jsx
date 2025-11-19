import React from 'react'
import Nav from "../Components/common/Nav";
import Hero from "../Components/home/Hero";
// import Works from "../Components/home/Works"
import About from "../Components/home/About"
import Footer from "../Components/common/Footer";
const Home = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    {/* <Works/> */}
    <About/>
    <Footer/>
    </>
  )
}

export default Home