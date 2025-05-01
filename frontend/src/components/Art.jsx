import React from 'react'


import { assets } from '../assets/assets'

const OurStory = () => {
  return (
<section className="relative h-[100vh] bottom-0 bg-brown-500 text-white overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img src={assets.grains} className="absolute top-0 right-0 animate-float3D opacity-40" />
  </div>
  <div className="z-10 relative h-full flex flex-col items-center justify-center text-center space-y-6 px-6">
    <h1 className="text-6xl font-black tracking-tight leading-[1.1]">
      Coffee is <span className="text-orange-500">Art</span>
    </h1>
    <p className="text-gray-300 max-w-xl text-lg">Not just drinks. Emotions in every sip, visuals in every cup.</p>
    <button className="mt-6 bg-orange-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-orange-500 transition-all">
      Discover Menu
    </button>
  </div>
</section>



  )
}

export default OurStory
