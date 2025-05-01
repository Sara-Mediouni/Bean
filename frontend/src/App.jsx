import React, { useContext, useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Menu from './Pages/Menu'

import CartDrawer from './components/CartDrawer'
import MobileMenu from './components/Mobilemenu'
import OrderConfirmation from './Pages/OrderConfirmation.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Loader from './components/Loader.jsx'
import { StoreContext } from './context/StoreContext.jsx'
import ProfilePage from './Pages/Profile.jsx'
import MyOrders from './Pages/Orders.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import NotFound from './components/NotFound.jsx'

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const {cartItems}=useContext(StoreContext)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log(cartItems)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex flex-col">
  <main className="flex-grow">
    <Navbar  cartCount={cartItems.length}
        onCartClick={() => setCartOpen(true)}
        onMobileMenuClick={() => setMobileOpen(true)}/>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} cartItems={cartItems} />
    <Routes>
    <Route path="/verify" element={<OrderConfirmation />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/myprofile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/myorders" element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
         
        </Routes>
    
      <Footer/>
  </main> 
   </div>
    
  )
}

export default App