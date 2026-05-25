import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    // Updated links for Restaurant Management
    const sidebarLinks = [
        { name: "Tableau de bord", path: "/owner", icon: assets.dashboardIcon },
        { name: "Ajouter un Plat", path: "/owner/add-dish", icon: assets.addIcon },
        { name: "Gestion du Menu", path: "/owner/list-menu", icon: assets.listIcon },
        // Added a reservations tab using the existing calendar icon from your assets!
        { name: "Réservations", path: "/owner/reservations", icon: assets.calenderIcon } 
    ]

  return (
    <div className='md:w-64 w-16 border-r h-full min-h-screen text-base border-gray-200 pt-6 flex flex-col transition-all duration-300 bg-white shadow-sm'>

       {sidebarLinks.map((item, index) => (
        <NavLink 
            to={item.path} 
            key={index} 
            // The 'end' prop ensures the main dashboard link only highlights on exact match
            end={item.path === '/owner'} 
            className={({isActive}) => `flex items-center py-4 px-4 md:px-8 gap-4 font-semibold transition-all duration-200 ${isActive ? "border-r-4 md:border-r-[6px] bg-red-50 border-[#C53030] text-[#C53030]" : "hover:bg-gray-50 border-transparent text-gray-600 hover:text-[#C53030]"}`}
        >
            <img 
                src={item.icon} 
                alt={item.name} 
                className={`min-h-6 min-w-6 transition-all duration-200 ${isActive ? 'opacity-100' : 'opacity-70'}`} 
                // Optional: You can use a CSS filter here to tint the active SVG icon red if you want!
            />
            <p className='md:block hidden tracking-wide'>{item.name}</p>

        </NavLink>
       ))}

    </div>
  )
}

export default Sidebar