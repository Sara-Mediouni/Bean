import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { MdOutlineEditCalendar } from "react-icons/md";
import {FaTrash} from 'react-icons/fa'
const Drink = () => {
  const [Drinks,setDrinks]=useState([])
  const getdrink=()=>{
    axios.get('http://localhost:4000/api/drink/')
    .then((response)=>{
      setDrinks(response.data)
    }).catch((error)=>{
      console.log('Error getting drink',error)
    })
  }
  const handleDelete=(drinkId)=>{
    axios.delete(`http://localhost:4000/api/drink/${drinkId}`)
    .then((response)=>{
     console.log(response)
     toast.success("Drink Deleted Successfully")
     getdrink()
    }).catch((error)=>{
      console.log('Error getting drink',error)
    })
  }
  const handleEdit=(id)=>{
    localStorage.setItem('drinkId',id)
    navigate('/editdrink')
  }
  useEffect(()=>{
    getdrink();
    console.log(Drinks)
  
  },[])
  const navigate=useNavigate()
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold text-black mb-6">List of Drinks</h1>
    <div className="flex justify-between mb-4">
      <button className="bg-stone-400 text-white px-4 py-2 rounded-md hover:bg-stone-400" onClick={() => navigate('/adddrink')}>+</button>
    </div> <div  className="grid  text-black grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
    {Drinks && Drinks?.map((drink,index)=>
      <div key={index} className="bg-stone-100 flex-col flex shadow-md rounded-lg p-4 space-y-2">
      <h2 className="text-xl font-semibold text-stone-500">{drink.name}</h2>
     
      <span>Rating: {drink.rating}</span>
      <span>Category: {drink.category}</span>
      <span>Price: {drink.price}</span>
      <span>Description: {drink.description}</span>
      <span>Image: <img src={`http://localhost:4000/uploads/${drink.image}`}/></span>
     <div className='flex  gap-5'> <button className='delete' onClick={()=>handleDelete(drink._id)}> <FaTrash /></button>
         <button className='update' onClick={()=>handleEdit(drink._id)}> <MdOutlineEditCalendar /></button>
         </div> </div>
    
    )}
     </div>
    </div>
  )
}

export default Drink