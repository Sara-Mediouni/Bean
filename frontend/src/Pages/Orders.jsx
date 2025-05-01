import React, { useEffect, useState } from 'react';
import axios from 'axios'


const MyOrders = () => {
  const [orders, setOrders] = useState([])
  const userId=localStorage.getItem('user')
  const getmyorders=()=>{
    axios.get(`http://localhost:4000/api/order/userorders/${userId}`)
    .then((response)=>
      {setOrders(response.data.data);
      console.log(response.data)
    })
    .catch((error)=>console.log(error))
  }
  useEffect(()=>{
   getmyorders();
  },[userId])
  return (
<div className="min-h-screen py-10 mt-30 px-4">
  <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
    <h2 className="text-3xl font-bold text-brown-500 mb-6 text-center">My Orders</h2>
    <div className=" grid md:grid-cols-2 grid-cols-1 gap-8">
      {orders?.length === 0 ? (
        <h1 className="text-center text-gray-500">You don't have any orders yet.</h1>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between bg-[#fff7f2] p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={`http://localhost:4000/uploads/${order.items[0].item?.image}`}  // Change as needed for correct image path
                alt={order.items[0].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-200"
              />
              <div>
                <h4 className="text-lg font-semibold text-brown-500">
                  Order n°{order._id}
                </h4>
                {order.items.map((item, index) => (
                  <ul key={index} className="list-none space-y-1">
                    <li className="text-sm text-gray-700">{item?.item?.name}</li>
                    <li className="text-sm text-gray-500">Quantity: {item.quantity}</li>
                    <li className="text-sm text-gray-500">Size: {item.size}</li>
                    <li className="text-sm text-gray-500">Topping: {item.topping}</li>
                  </ul>
                ))}
                <p className="text-sm text-gray-500">Ordered on {new Date(order.date).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-orange-500">
                ${order.amount.toFixed(2)}
              </p>
              <span
                className={`text-sm font-medium ${
                  order.status === 'Delivered'
                    ? 'text-green-600'
                    : order.status === 'In Progress'
                    ? 'text-yellow-600'
                    : 'text-red-500'
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</div>

  );
};

export default MyOrders;
