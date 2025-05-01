import React from 'react';

import { assets } from '../assets/assets';

const Signature = () => {


  return (
    <section className=" relative py-28 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
      <div className="relative md:ml-20">
        <div className="w-[400px] h-[400px] bg-orange-500 rounded-full absolute top-[-40px] left-[-40px] -z-10 blur-2xl opacity-50" />
        <img src={assets.boba} alt="Special Drink" className="w-[320px] rotate-[-5deg] drop-shadow-[0_60px_25px_rgba(0,0,0,0.5)]" />
      </div>
      <div className="max-w-xl text-left">
        <h2 className="text-5xl font-extrabold text-brown-500 mb-6 leading-tight">Try our <span className="text-orange-500">Toffee Nut Latte</span></h2>
        <p className="text-[#5a3d31] text-lg mb-8">A creamy mix of espresso, caramel and toasted nuts. Limited edition this season!</p>
        <button className="bg-brown-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm uppercase tracking-wide shadow-md transition-all">
          Order Now
        </button>
      </div>
    </div>
  </section>
  
  );
};

export default Signature;
