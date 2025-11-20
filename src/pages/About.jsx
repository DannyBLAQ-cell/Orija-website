import React from 'react'
import Nav from '../Components/common/Nav'
import Hero from '../Components/about/Hero'
import Mission from '../Components/about/Mission'
import Story from '../Components/about/Story'
import Team from '../Components/about/Team'
import Empower from '../Components/about/Empower'
import Footer from '../Components/common/Footer'
const About = () => {
  return (
    <>
    <div className='bg-white'>
    <Nav/>
    <Hero/>
    <Mission/>
    <Story/>
    {/* <Team/> */}
    <Empower/>
    <Footer/>
    </div>
    </>
  )
}

export default About