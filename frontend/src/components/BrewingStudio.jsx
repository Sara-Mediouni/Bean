import React from 'react'

const BrewingStudio = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-28 relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <img src="/images/coffee-lab.png" alt="Coffee Lab" className="rounded-2xl shadow-2xl" />
      </div>
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">Experimental Brewing Studio</h2>
        <p className="text-gray-400">We treat coffee like code — tested, refactored, and beautifully released. Our brewing station is where creativity and caffeine meet.</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Custom roast profiles</li>
          <li>Layered flavor maps</li>
          <li>Hand-drawn latte art streams</li>
        </ul>
      </div>
    </div>
  </section>
  
  )
}

export default BrewingStudio