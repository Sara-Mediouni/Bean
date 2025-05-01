import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  const products=[{
    img:assets.smoothies,
    name:"Frappuccino caramel",
    price:"8.25 TND"

  },
  {
    img:assets.starbucks,
    name:"Frappuccino caramel",
    price:"8.25 TND"

  },
  {
    img:assets.boba,
    name:"Frappuccino caramel",
    price:"8.25 TND"

  }]
  return (
<section className="relative py-28 px-16 text-white bg-brown-500 overflow-hidden">

  <div className="max-w-7xl mx-10 ">
    <h2 className="text-5xl font-bold mb-20 text-center">Signature Creations</h2>
    <div className="grid  md:grid-cols-3 gap-14  items-center justify-center">
      {products?.map((product, idx) => (
        <div
              key={idx}
              className="flex flex-col items-center space-y-4"
            >
              <div className={`w-[240px] h-[240px] rounded-full flex items-center justify-center bg-[#FFCAD4] relative`}>
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
</section>

  
  );
};

export default Contact;
