import React from 'react'
import { Check, Star, ShoppingBag, MessageCircle, Shield, TrendingUp, Users, Package, ChartAreaIcon, Package2Icon, VerifiedIcon, PersonStanding, PersonStandingIcon, StarIcon } from "lucide-react";
const Hero = () => {
const hero=[
{
icon:StarIcon,
title:'Trust System',
description:' Ratings and reviews'
},
{
icon:Shield,
title:'OriVault Security',
description:' Protected transactios'
},
{
icon:ChartAreaIcon,
title:'Social Features',
description:'Connect and engage'
},
{
icon:Package,
title:'Smart Marketplace',
description:'Intuitive listing '
}


]

  return (
   <>
<div >
   <section className="py-20 bg-gray-50 " id="team">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-7xl font-bold text-gray-800 mb-6 primary">Built for Everyday Hustlers<br />Powered by Trust.</h2>
        <p className="text-neutral-500 max-w-2xl mx-auto mb-12 tertiary">
         Everything you need to sell successfully, all in one platform
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
       {hero.map((cards, index) =>(
        
            <div
       
              className=" flex flex-col gap-5 justify-center items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
                 <div className="bg-secondary rounded-lg text-white p-5 inline-flex items-center justify-center">
                      <cards.icon className="w-7 h-10 text-white" />
                    </div>
     
       <h1 className='font-semibold text-lg primary'>{cards.title}</h1>
       <p className='text-neutral-500 tertiary'>{cards.description}</p>
            </div>
        ))}
        </div>
      </div>
    </section>
</div>
   </>
  )
}

export default Hero