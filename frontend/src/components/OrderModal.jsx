import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { StoreContext } from '../context/StoreContext';

const sizes = ['Basic', 'Middle', 'Large'];
const toppings = ['Boba', 'Almond', 'Cheese', 'Oat'];

const OrderModal = ({ product, onClose }) => {
  const [size, setSize] = useState('Middle');
  const [Drink, setDrink] = useState()
  const [selectedTopping, setSelectedTopping] = useState('Boba');
  const [quantity, setQuantity] = useState(1);
  const {addToCart}=useContext(StoreContext)
  console.log(product)
  const getProduct=(product)=>{
    axios.get(`http://localhost:4000/api/drink/drink/${product}`)
    .then((response)=>{
    setDrink(response.data);
    console.log(response.data)})
    .catch((error)=>console.log("Error getting Drink",error))
  }
  useEffect(()=>{
    if (product)
    {getProduct(product)};
  },[])
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-lg relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-2xl">×</button>
        <div className="flex flex-col items-center text-center space-y-4">
          <img src={`http://localhost:4000/uploads/${Drink?.image}`} alt={product.name} className="w-28 h-28 object-contain" />
          <h3 className="text-lg font-bold">{Drink?.name}</h3>
          <p className="text-gray-500 text-sm px-4">
            {Drink?.description}
          </p>

          {/* Size */}
          <div className="w-full text-left">
            <p className="font-medium text-sm text-gray-700 mb-2">Drink Size</p>
            <div className="flex justify-between">
              {sizes.map(s => (
                <div
                  key={s}
                  className={`flex flex-col items-center px-4 py-2 rounded-xl border ${s === size ? 'bg-orange-100 border-brown-500' : 'border-gray-300'}`}
                  onClick={() => setSize(s)}
                >
                  <img src={assets.cup} alt="size" className="w-6 h-6" />
                  <span className="text-sm mt-1">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Toppings */}
          <div className="w-full text-left mt-4">
            <p className="font-medium text-sm text-gray-700 mb-2">Toppings</p>
            <div className="flex flex-wrap gap-2">
              {toppings.map(t => (
                <button
                  key={t}
                  onClick={() => setSelectedTopping(t)}
                  className={`px-3 py-1 rounded-full border ${t === selectedTopping ? 'bg-brown-500 text-white' : 'bg-white border-gray-300 text-gray-600'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between w-full mt-6">
            <div className="flex items-center gap-3">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-2xl">−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="text-2xl">+</button>
            </div>
            <button onClick={()=>{addToCart(Drink._id,size,selectedTopping);
            onClose()}}
            className="bg-[#e76f51] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md">
              Add to bag · ${(Drink?.price * quantity).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
