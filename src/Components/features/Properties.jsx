import React from 'react'
import {motion} from 'framer-motion'
import { Check, Star, ShoppingBag,  UserCheck ,MessageCircle,Image, Bell, Shield, RefreshCw,  Package2 ,TrendingUp, Users, Package, ChartAreaIcon, Package2Icon, VerifiedIcon, PersonStanding, PersonStandingIcon, StarIcon, GoalIcon,Wallet } from "lucide-react";
import Market from './Market';
import Orivault from './Orivault';
import Chat from './Chat';
import Review from './Review';
import Repeat from '../Howitworks/Repeat';
import Final from './Final';
import Business from './Business';
import Footer from '../common/Footer';
const Properties = () => {
  return (
<>

<motion.section 
className='  pt-40 '>
   



<Market />
<Orivault/>
<Chat />    
<Review/>  
<Business/>
{/* <Repeat /> */}
<Final/>
 <Footer/>
    
</motion.section>
</>
  )
}

export default Properties