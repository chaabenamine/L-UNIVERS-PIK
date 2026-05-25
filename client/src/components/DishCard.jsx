import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const DishCard = ({ dish, index }) => {
  return (
    <Link
      to={'/menu/' + dish._id}
      onClick={() => scrollTo(0, 0)}
      key={dish._id}
      className='relative max-w-[280px] w-full rounded-xl overflow-hidden bg-white text-gray-500 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group'
    >
      {/* Added an overflow hidden wrapper for a subtle image zoom effect on hover */}
      <div className='overflow-hidden h-52'>
        <img
          src={dish.image}
          alt={dish.name}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
        />
      </div>

      {/* Badge: Populaire (Replaces Best Seller) */}
      {index % 2 === 0 && (
        <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-[#C53030] font-bold rounded-full shadow-md uppercase tracking-wider'>
          Populaire
        </p>
      )}

      {/* Badge: Spicy (New feature based on your Épik menu) */}
      {dish.isSpicy && (
        <p className='px-2 py-1 absolute top-3 right-3 text-xs bg-[#C53030] text-white font-medium rounded-full shadow-md' title='Plat Épicé'>
          🌶️
        </p>
      )}

      <div className='p-5'>
        <div className='flex items-start justify-between gap-2'>
          <p className='font-playfair text-xl font-bold text-gray-800 line-clamp-2 leading-tight'>
            {dish.name}
          </p>
          <div className='flex items-center gap-1 text-sm shrink-0 mt-1'>
            <img src={assets.starIconFilled} alt="star-icon" className='w-4 h-4' />
            4.8
          </div>
        </div>

        {/* Replaced Location with Main Spice Info */}
        <div className='flex items-center gap-1 text-sm mt-2 text-[#C53030] font-medium'>
          <span>✨ Épice clé : {dish.mainSpice}</span>
        </div>
        
        {/* Added Menu Category (e.g., Entrée Froide) */}
        <p className='text-xs text-gray-400 mt-1 uppercase tracking-wide'>{dish.category}</p>

        <div className='flex items-center justify-between mt-4 pt-4 border-t border-gray-100'>
          <p>
            <span className='text-xl font-bold text-gray-800'>
              {dish.price} TND
            </span>
          </p>
          <button className='px-4 py-2 text-sm font-semibold border-2 border-[#C53030] text-[#C53030] rounded hover:bg-[#C53030] hover:text-white transition cursor-pointer'>
            Découvrir
          </button>
        </div>
      </div>
    </Link>
  )
}

export default DishCard