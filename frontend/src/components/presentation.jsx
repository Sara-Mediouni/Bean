import React from 'react'
import { assets } from '../assets/assets'


const Pastry = () => {
  return (
    <section className="px-10 grid md:grid-cols-2 mx-auto">
      {/* Floating coffee image */}
       <div className=" right-10 flex justify-center items-center z-10">
         <img
           src={assets.goldenlatte}
           alt="Iced Coffee"
           className="w-[300px] md:w-[400px] lg:w-[500px] animate-float3D drop-shadow-[0_30px_20px_rgba(0,0,0,0.5)]"
         />
       </div>
   
       {/* Hero text */}
       <div className="relative z-20 max-w-6xl px-6 py-32 md:py-48 mx-auto">
         <h1 className="text-5xl md:text-[5rem] font-extrabold text-[#1f120d] tracking-tight leading-none">
           <span className="block">Brewed to</span>
           <span className="text-orange-500">Perfection.</span>
         </h1>
         <p className="mt-6 text-xl md:text-2xl text-[#4b362e] w-full md:w-2/3">
           A coffee experience that blends flavor, art, and ambiance into every single cup.
            More than a drink — a moment.
         </p>
         <button className="mt-10 px-8 py-4 rounded-full bg-orange-500 hover:bg-[#c95b3a] text-white text-lg font-bold shadow-lg transition-all duration-300">
           Taste the Craft
         </button>
       </div>
  </section>
  
  
  )
}

export default Pastry