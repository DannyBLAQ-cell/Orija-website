import React from 'react'

const Post = () => {
  return (
<>

  <section className="py-40 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left: App Mockup */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <img
            src='./images/post.png'
            alt="App Post Creation Mockup"
            className="w-full max-w-sm rounded-xl shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 flex items-center gap-2">
            1️⃣ Post What You Sell
          </h2>
          <p className="text-gray-700 mb-6">
            Snap it. Describe it. Set your price. Orija lets you post what you
            sell in seconds — from handmade goods to services, gigs, or used
            items. Your post appears instantly on the marketplace feed where
            thousands of buyers can discover you.
          </p>

          {/* Features */}
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔️</span> Fast uploads with photos and details
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔️</span> Choose category and price
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔️</span> Instant visibility on Orija Feed
            </li>
          </ul>
        </div>
      </div>
    </section>

</>
  )
}

export default Post