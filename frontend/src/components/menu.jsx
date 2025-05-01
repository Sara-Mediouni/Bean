import React, { useContext } from 'react';
import coffeeImg from '../assets/coffee/icedcoffee.png';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';


const products = [
  {
    name: 'Caramel Ribbon',
    img: assets.starbucks,
    rating: '4.6',
    color: 'bg-[#FFCAD4]',
  },
  {
    name: 'Strawberry Funnel',
    img: assets.starbucks,
    rating: '4.5',
    color: 'bg-[#D8E2DC]',
  },
  {
    name: 'Vanilla Dream',
    img: assets.starbucks,
    rating: '5.0',
    color: 'bg-[#FFE5D9]',
  },
];

const Menu = () => {

  return (
    <section
      className="w-full bg-no-repeat bg-cover bg-center relative overflow-hidden"
      
    >
       <div className="bg-brown-500 py-16 px-6 ">
        <h2 className="text-center text-white text-3xl font-bold mb-10">Popular Drinks</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-4"
            >
              <div className={`w-[240px] h-[240px] rounded-full flex items-center justify-center ${product.color} relative`}>
                <img src={product.img} alt={product.name} className="w-[300px]" />
                <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                  ⭐ {product.rating}
                </div>
              </div>
              <p className="text-white font-semibold text-lg">{product.name}</p>
              <button className="text-gray-400 text-lg font-bold">Add to order +</button>
            </div>
          ))}
        </div>
      </div>
       <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16 items-center relative z-10">
        
        {/* TEXT */}
        <div className="space-y-6 md:ml-20">
          <h1 className="md:text-6xl text-4xl  font-extrabold text-white drop-shadow-lg leading-tight">
            Midnight <span className="text-orange-500">Frappuccino</span>
          </h1>
          <p className="text-orange-100 text-lg max-w-md">
            The Midnight Mint Mocha Frappuccino features extra dark cocoa blended with Frappuccino Roast coffee.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-white text-3xl font-bold">8.60 TND</span>
            <button className="bg-orange-500 hover:bg-[#3b2f2f] text-white px-6 py-3 rounded-full shadow-lg transition-all">
              Buy Now
            </button>
          </div>
        </div>

        {/* COFFEE IMAGE */}
        <div className="relative flex justify-center items-center">
        <div className="absolute w-[320px] h-[320px] bg-orange-500 rounded-full -z-10 animate-pulse-slow" />
<img
  src={coffeeImg}
  alt="Coffee"
  className="w-[480px] md:w-[540px] z-10 drop-shadow-[0_60px_25px_rgba(0,0,0,0.5)]"
/>

          <div className="absolute top-6 right-8 bg-white rounded-full shadow-lg px-4 py-2 flex items-center space-x-2 text-sm font-semibold">
            <span>⭐</span>
            <span>4.9</span>
          </div>
        </div>
       {/* TESTIMONIALS */}
<div className="space-y-6 md:ml-10 flex flex-col justify-center items-center">
  <h3 className="text-brown-500 text-xl font-semibold">What our customers say</h3>
  <div className="bg-[#FFE5D9] rounded-3xl p-6 shadow-xl max-w-xs">
    <p className="text-gray-700 italic">
      “One sip and I was hooked. The Midnight Frappuccino is pure magic in a cup.”
    </p>
    <div className="mt-4 flex items-center gap-3">
      <img
        src="https://i.pravatar.cc/40?img=1"
        alt="avatar"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-bold text-sm text-gray-800">Amelia R.</p>
        <p className="text-xs text-gray-500">Daily visitor ☕</p>
      </div>
    </div>
  </div>

  <div className="bg-[#FFE5D9] rounded-3xl p-6 shadow-xl max-w-xs">
    <p className="text-gray-700 italic">
      “It’s not just coffee, it’s an entire experience. I love the atmosphere and flavors.”
    </p>
    <div className="mt-4 flex items-center gap-3">
      <img
        src="https://i.pravatar.cc/40?img=2"
        alt="avatar"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-bold text-sm text-gray-800">Julien P.</p>
        <p className="text-xs text-gray-500">Caffeine lover 💛</p>
      </div>
    </div>
  </div>
</div>

      </div>

   
    
    </section>
  );
};

export default Menu;
