import React from 'react'
import { assets } from '../assets/assets'

const Smoothies = () => {
  return (
    <section className="py-20 " id="smoothies">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-bold text-orange-500 text-center mb-4">Our Signature Smoothies</h2>
      <p className="text-center font-bold text-brown-500 text-lg mb-12 ">Freshly blended, naturally sweet, and full of goodness 🍊</p>
  
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Smoothie Card - Strawberry */}
        <div className="rounded-3xl shadow-xl p-6 hover:shadow-2xl transition">
          <img src={assets.strawberry} alt="Strawberry Smoothie" className=" rounded-2xl h-50 w-60 object-cover mb-4" />
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold text-orange-600">Strawberry Bliss</h3>
            <span className="text-orange-500 font-bold"> 4.90</span>
          </div>
          <p className="text-brown-500 text-sm mb-3 min-h-[100px]">Fresh strawberries, almond milk, Greek yogurt</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">Sugar Free</span>
            <span className="bg-stone-100 text-brown-500 px-3 py-1 rounded-full text-xs font-medium">Vegan Option</span>
          </div>
        </div>
        <div className="rounded-3xl shadow-xl p-6 hover:shadow-2xl transition">
          <img src={assets.blueberry} alt="Blueberry Smoothie" className=" rounded-2xl h-50 w-60 object-cover mb-4" />
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold text-orange-600">Blueberry Bliss</h3>
            <span className="text-orange-500 font-bold"> 4.90</span>
          </div>
          <p className="text-brown-500 text-sm mb-3 min-h-[100px]">Fresh blueberries, almond milk, Greek yogurt</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">Sugar Free</span>
            <span className="bg-stone-100 text-brown-500 px-3 py-1 rounded-full text-xs font-medium">Vegan Option</span>
          </div>
        </div>
        {/* Smoothie Card - Mango */}
        <div className="rounded-3xl shadow-xl p-6 hover:shadow-2xl transition">
          <img src={assets.mango} alt="Mango Smoothie" className="rounded-2xl h-50 w-60 object-cover mb-4" />
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold text-orange-600">Mango Passion</h3>
            <span className="text-orange-500 font-bold"> 5.20</span>
          </div>
          <p className="text-brown-500 text-sm mb-3 min-h-[100px]">Mango, passion fruit, coconut milk</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">Tropical</span>
            <span className="bg-stone-200 text-brown-500 px-3 py-1 rounded-full text-xs font-medium">Dairy Free</span>
          </div>
        </div>
  
        {/* Smoothie Card - Green Detox */}
        <div className="rounded-3xl shadow-xl p-6 hover:shadow-2xl transition">
          <img src={assets.green} alt="Green Smoothie" className="rounded-2xl h-50 w-60 object-cover mb-4" />
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold text-orange-600">Green Detox</h3>
            <span className="text-orange-500 font-bold"> 5.00</span>
          </div>
          <p className="text-brown-500 text-sm mb-3 min-h-[100px]">Spinach, green apple, kiwi, lime</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Detox</span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">No Additives</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  )
}

export default Smoothies
