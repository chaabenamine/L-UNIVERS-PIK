import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    // FIX: Changed 'h-screen' to 'min-h-screen py-24' 
    <div className='flex flex-col items-start justify-center
     px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.jpg")] bg-no-repeat bg-cover bg-center
     min-h-screen py-24 relative'>
      
      {/* Optional: Added a dark overlay so the white text pops better against food imagery */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 w-full mt-10 md:mt-0">
          {/* Changed color from blue to a warm, spice-inspired red/orange */}
          <p className='bg-[#C53030]/80 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase inline-block'> 
            L’UNIVERS ÉPIK 
          </p>
          
          <h1 className='font-playfair text-3xl md:text-5xl md:text-[56px] md:leading-[60px] font-bold md:font-extrabold max-w-2xl mt-6' >
            L'Art des Épices & Gastronomie Moderne
          </h1>
          <p className='max-w-2xl mt-4 text-sm md:text-lg leading-relaxed text-gray-100'>
            Chaque plat naît autour d’une épice. Le feu du paprika, la douceur du safran et la profondeur du poivre noir deviennent les véritables héros de l’assiette.
          </p>
          
          <form className='bg-white text-gray-800 rounded-lg px-6 py-5 mt-10 flex flex-col md:flex-row max-md:items-start gap-6 max-md:mx-auto shadow-2xl w-full max-w-4xl'>

                {/* Date Field */}
                <div className='flex flex-col w-full md:w-auto'>
                    <div className='flex items-center gap-2 font-medium text-sm text-gray-600'>
                        <img src={assets.calenderIcon} alt="calendar" className='h-4' />
                        <label htmlFor="date">Date</label>
                    </div>
                    <input id="date" type="date" className="rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm outline-none focus:border-[#C53030] transition-colors w-full" />
                </div>

                {/* Time Field (New for Restaurants) */}
                <div className='flex flex-col w-full md:w-auto'>
                    <div className='flex items-center gap-2 font-medium text-sm text-gray-600'>
                        <span className="text-gray-400 text-sm">⌚</span>
                        <label htmlFor="time">Heure</label>
                    </div>
                    <input id="time" type="time" className="rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm outline-none focus:border-[#C53030] transition-colors w-full" />
                </div>

                {/* Guests Field */}
                <div className='flex flex-col w-full md:w-auto md:max-w-32'>
                    <label htmlFor="guests" className='font-medium text-sm text-gray-600'>Personnes</label>
                    <input min={1} max={12} id="guests" type="number" className="rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm outline-none focus:border-[#C53030] transition-colors w-full" placeholder="2" />
                </div>

                {/* Submit Button */}
                <button type="submit" className='flex items-center justify-center gap-2 rounded-md bg-[#C53030] hover:bg-red-800 transition-colors py-3 px-6 text-white my-auto cursor-pointer w-full md:w-auto md:ml-auto font-medium'>
                    <span>Réserver une table</span>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Hero