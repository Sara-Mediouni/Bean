import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import Swal from 'sweetalert2'

const CartDrawer = ({ isOpen, onClose, cartItems}) => {
  const user=localStorage.getItem('user')
 
  const token =localStorage.getItem('token')
  const [orderData, setorderData] = useState()
  console.log(cartItems)
  const {drink_list,removeFromCart,addToCart,getTotalCartAmount}=useContext(StoreContext)
  const handleOrder=()=>{
    let orderItems=[];
    drink_list.map((item)=>{
    if (cartItems[item._id]?.quantity>0){
      let itemInfo=item;
      itemInfo["quantity"]=cartItems[item._id].quantity;
      itemInfo["size"]=cartItems[item._id].size;
      itemInfo["topping"]=cartItems[item._id].topping;
      orderItems.push(itemInfo);
    }
    })
    setorderData({userId:user,items:orderItems,amount:getTotalCartAmount()})
    console.log(orderItems);
   
    
  }
  const checkout=async()=>{
    try {
      await handleOrder(); // Assure que les données sont bien prêtes
      const response = await axios.post("http://localhost:4000/api/order/place", orderData);
      
      console.log(response);
  
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url); // Redirige vers Stripe ou autre
      }
    } catch (error) {
      console.log("Checkout error:", error);
    }
  }
  
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full sm:w-[420px] h-full bg-[#fffaf7] z-50 shadow-xl rounded-l-[2rem] flex flex-col px-6 py-8"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-extrabold text-[#2b1e17]">🛒 My Cart</h2>
              <button onClick={onClose} className="text-[#e76f51] text-2xl font-bold hover:scale-110">×</button>
            </div>

            {/* Content */}
            {Object.keys(cartItems).length  === 0 ? (
              <p className="text-[#5e4634] mt-10 text-center">Your Cart is Empty.</p>
            ) : (
              <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                {drink_list?.map((item,idx) => {
                  if (cartItems[item._id]?.quantity > 0)

                  return(
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-white rounded-2xl p-4 border border-[#f2e8e2] shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <img src={`http://localhost:4000/uploads/${item.image}`} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
                      <div>
                        <h3 className="text-[#2b1e17] font-semibold">{item.name}</h3>
                        <div className="flex items-center mt-1 space-x-2">
                          <button
                            className="bg-[#eee0d9] text-[#2b1e17] px-2 rounded-full text-sm"
                            onClick={() => removeFromCart(item._id)}
                          >−</button>
                          <span className="font-medium text-[#5e4634]">{cartItems[item._id].quantity}</span>
                          <button
                            className="bg-[#eee0d9] text-[#2b1e17] px-2 rounded-full text-sm"
                            onClick={() => addToCart(item._id)}
                          >+</button>
                        </div>
                        <div className="mt-10 font-bold text-brown-500"><p>{cartItems[item._id].size}</p>
                        <p>{cartItems[item._id].topping}</p></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[#2b1e17] font-bold">{(item.price * cartItems[item._id].quantity).toFixed(2)} TND</p>
                      <button
                        className="text-[#e76f51] text-xs hover:underline"
                        onClick={() => removeFromCart(item._id)}
                      >Delete</button>
                    </div>
                  </div>
                )})}
              </div>
            )}

            {/* Footer */}
            <div className="pt-6 border-t border-[#f2e8e2] mt-6">
              <div className="flex justify-between text-lg font-semibold text-[#2b1e17] mb-4">
                <span>Total</span>
                <span>{getTotalCartAmount()} TND</span>
              </div>
              <button
               
                onClick={() => {
                if (token){checkout()}
                else Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "You have to Login First!",
  
});
                }}
  
                
                className="w-full py-4 rounded-full bg-[#e76f51] hover:bg-[#d4573a] text-white font-bold transition-all"
              >
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
