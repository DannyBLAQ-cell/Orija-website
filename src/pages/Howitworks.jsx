import React from 'react'
import Nav from "../Components/common/Nav";
import Hero from '../Components/Howitworks/Hero';
import Post from '../Components/Howitworks/Post';
import Chats from '../Components/Howitworks/Chats';
import Pay from '../Components/Howitworks/Pay';
import Review from '../Components/Howitworks/Review';
import Repeat from '../Components/Howitworks/Repeat';
import Faq from '../Components/Howitworks/Faq';
import Cta from '../Components/Howitworks/Cta';
import Footer from '../Components/common/Footer'

const Howitworks = () => {
  return (
  
  
  <>
  <div className='bg-white'>
  <Nav />
  <Hero />
  <Post />
  <Chats />
  <Pay />
  <Review />
  <Repeat />
  <Faq/>
  <Cta />
  <Footer />
  </div>
  </>
  )
}

export default Howitworks