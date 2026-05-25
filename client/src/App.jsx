import React from 'react'
import Navbar from './components/Navbar' 
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import OurMenu from './pages/OurMenu'; 
import DishDetails from './pages/DishDetails'; 
import MyBooking from './pages/MyBooking';
import AboutUs from './pages/AboutUs';
import Experience from './pages/Experience';

// Manager Dashboard Pages (Using your exact 'houseOwner' folder path!)
import Layout from './pages/houseOwner/Layout'; 
import Dashboard from './pages/houseOwner/Dashboard';
import AddDish from './pages/houseOwner/AddDish'; 
import ListMenu from './pages/houseOwner/ListMenu'; 

import { Toaster } from "react-hot-toast"
import { useAppContext } from './context/AppContext';

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  
  // Note: I removed the showAddDish modal logic since that file no longer exists in your components folder.
  // The manager will just use the dedicated /owner/add-dish page instead!

  return (
    <div>
      <Toaster />
      
      {!isOwnerPath && <Navbar />}
      
      <div className='min-h-[70vh]'>
        <Routes>
          {/* --------------------------- */}
          {/* PUBLIC RESTAURANT ROUTES    */}
          {/* --------------------------- */}
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<OurMenu />} />
          <Route path='/menu/:id' element={<DishDetails />} />
          <Route path='/my-bookings' element={<MyBooking />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/experience' element={<Experience />} />

          {/* --------------------------- */}
          {/* MANAGER DASHBOARD ROUTES    */}
          {/* --------------------------- */}
          <Route path='/owner' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='add-dish' element={<AddDish />} />
            <Route path='list-menu' element={<ListMenu />} />
          </Route>
        </Routes>
      </div>

      {!isOwnerPath && <Footer />}
    </div>
  )
}

export default App