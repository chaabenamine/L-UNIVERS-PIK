import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets' // Adjusted path to assume it's in src/components/
import { UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 bg-white shadow-sm transition-all duration-300 sticky top-0 z-50'>
      
      {/* 1. Logo Section */}
      <Link to='/' className='flex items-center gap-3 group'>
        <img src={assets.logo} alt="L'Univers Épik Logo" className='h-10 transition-transform duration-300 group-hover:scale-105' />
        {/* Added text next to the logo for brand identity */}
        <span className='font-playfair text-2xl font-bold text-gray-800 tracking-wider uppercase hidden sm:block'>
          Épik
        </span>
      </Link>

      {/* 2. Center Navigation Links (New for the restaurant!) */}
      <div className='hidden md:flex items-center gap-8 font-semibold text-sm text-gray-600 uppercase tracking-wide'>
        <NavLink 
          to='/' 
          className={({isActive}) => isActive ? "text-[#C53030]" : "hover:text-[#C53030] transition-colors"}
        >
          Accueil
        </NavLink>
        <NavLink 
          to='/menu' 
          className={({isActive}) => isActive ? "text-[#C53030]" : "hover:text-[#C53030] transition-colors"}
        >
          Le Menu
        </NavLink>
        <NavLink 
          to='/experience' 
          className={({isActive}) => isActive ? "text-[#C53030]" : "hover:text-[#C53030] transition-colors"}
        >
          L'Art des Épices
        </NavLink>
      </div>

      {/* 3. Right Section: Auth & CTA */}
      <div className='flex items-center gap-5'>
        {/* Quick reservation button */}
        <Link 
          to='/reservations' 
          className='hidden sm:block px-5 py-2 text-sm font-bold border-2 border-[#C53030] bg-[#C53030] text-white rounded hover:bg-white hover:text-[#C53030] transition-all cursor-pointer uppercase tracking-wide shadow-md'
        >
          Réserver
        </Link>
        
        {/* Clerk User Profile Button */}
        <div className='border-l border-gray-200 pl-5'>
          <UserButton />
        </div>
      </div>

    </div>
  )
}

export default Navbar