import React from 'react'
import Drink from './Components/ListDrinks'
import AddDrinkForm from './Components/AddDrinkForm'
import EditdrinkForm from './Components/EditDrinkForm'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import ListOrders from './Components/ListOrders'

const App = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-stone-100">
      <Sidebar  />
      <div className="flex-1 flex flex-col">
        <Navbar/>
        <main className="flex-1 p-4 overflow-y-auto bg-gray-100">
          <Routes>
          <Route path="/adddrink" element={<AddDrinkForm/>} />
          <Route path="/editdrink" element={<EditdrinkForm/>} />
         
          <Route path="/drinks" element={<Drink />} />
            
          <Route path="/orders" element={<ListOrders />} />
   
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App