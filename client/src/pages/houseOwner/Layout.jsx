import React from 'react'
// Pointing exactly to your existing houseOwner folder!
import Navbar from '../../components/houseOwner/Navbar'
import Sidebar from '../../components/houseOwner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen bg-white overflow-hidden'>
        
        {/* Top Navigation */}
        <Navbar/>
        
        {/* Main Dashboard Area */}
        <div className='flex h-full overflow-hidden'>
            
            {/* Fixed Sidebar */}
            <Sidebar/>
            
            {/* Dynamic Content Area (Outlet) */}
            <div className='flex-1 p-4 pt-8 md:px-10 h-full overflow-y-auto bg-[#FAF9F6] relative'>
                <Outlet/>
            </div>
            
        </div>
    </div>
  )
}

export default Layout