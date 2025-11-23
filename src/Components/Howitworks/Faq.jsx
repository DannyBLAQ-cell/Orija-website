import React from 'react'
import Faqitem from './Faqitem';
const Faq = () => {
  return (
  
<>
<div className='flex flex-col gap-4 justify-center items-center'>
    <h1 className='text-7xl font-bold primary'>
    Frequently Asked Questions <br /> 
</h1>
<p className='text-lg'>
    everything you need to know about orija
</p>
</div>

<section className="py-16 px-4 sm:px-6 lg:px-20 text-white">
  {/* Getting Started */}
  <div className="mb-12">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold primary mb-6 text-center italic">
      Getting Started
    </h3>

    <div className="space-y-4">
      <Faqitem
        question="Is Orija free to use?"
        answer="Yes, creating an account and browsing the marketplace is completely free. Sellers only pay small service fees for completed transactions."
      />
      <Faqitem
        question="How do I set up my profile?"
        answer="Go to your dashboard, upload a photo, write a short bio, and add any optional verification for more trust and visibility."
      />
    </div>
  </div>

  {/* Selling */}
  <div className="mb-12">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold primary mb-6 text-center italic">
      Selling
    </h3>
    <div className="space-y-4">
      <Faqitem
        question="How do I post an item or service for sale?"
        answer="Tap the 'Post What You Sell' button, upload photos, describe your item, set a price, choose a category, and publish. It takes less than 30 seconds."
      />
      <Faqitem
        question="How do I talk to buyers?"
        answer="Buyers can message you directly via Orija Chat. You’ll get instant notifications for every message."
      />
      <Faqitem
        question="How do I grow my reputation as a seller?"
        answer="Provide great service, deliver as promised, and encourage buyers to leave reviews. Your profile trust score increases with positive ratings."
      />
    </div>
  </div>

  {/* Buying */}
  <div className="mb-12">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold primary mb-6 text-center italic">
      Buying
    </h3>
    <div className="space-y-4">
      <Faqitem
        question="How do I contact a seller?"
        answer="Open the listing and tap the chat button to message the seller instantly."
      />
      <Faqitem
        question="How do I know a seller is trustworthy?"
        answer="Check their trust score, verified badges, and reviews from previous buyers to ensure they’re reliable."
      />
      <Faqitem
        question="Can I negotiate prices?"
        answer="Yes! Orija encourages direct negotiation between buyers and sellers through chat."
      />
    </div>
  </div>

  {/* Payments & Safety */}
  <div className="mb-12">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold primary mb-6 text-center italic">
      Payments & Safety
    </h3>
    <div className="space-y-4">
      <Faqitem
        question="How does Orivault escrow payment work?"
        answer="When you pay through Orivault, your money stays securely held until you confirm delivery or satisfaction. Only then is it released."
      />
      <Faqitem
        question="What happens if a deal is canceled?"
        answer="Orivault instantly refunds your payment if the transaction is canceled before completion."
      />
      <Faqitem
        question="How does Orija keep users safe?"
        answer="We use verified profiles, encrypted chats, secure payments, and a community review system to protect all users."
      />
    </div>
  </div>
</section>


</>


  )
}

export default Faq