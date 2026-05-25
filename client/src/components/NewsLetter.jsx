import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-6 py-12 md:py-16 mx-4 lg:mx-auto my-30 bg-gray-900 text-white shadow-2xl relative overflow-hidden">
        
        {/* Optional decorative background glow to match the heat of the spices */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-[#C53030]/10 blur-[100px] z-0 pointer-events-none"></div>

        <div className="relative z-10 w-full flex flex-col items-center">
            {/* Gastronomy focused copy */}
            <Title 
                title="Rejoignez le Cercle Épik" 
                subTitle="Inscrivez-vous à notre newsletter pour découvrir en avant-première nos nouvelles créations, nos menus de saison et nos événements culinaires exclusifs."
            />
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10 w-full max-w-lg">
                <input 
                    type="email" 
                    className="bg-white/10 px-5 py-3 border border-white/20 rounded-md outline-none w-full focus:border-[#C53030] focus:ring-1 focus:ring-[#C53030] transition-all placeholder:text-gray-400" 
                    placeholder="Votre adresse email"
                />
                
                <button className="flex items-center justify-center gap-2 group bg-[#C53030] hover:bg-red-800 px-8 py-3 rounded-md font-bold active:scale-95 transition-all w-full md:w-auto shrink-0 shadow-md">
                    S'inscrire
                    <img src={assets.arrowIcon} alt="arrow-icon" className='w-4 invert group-hover:translate-x-1 transition-transform' />
                </button>
            </div>
            
            <p className="text-gray-400 mt-6 text-xs text-center max-w-md">
                En vous inscrivant, vous acceptez notre politique de confidentialité et consentez à recevoir nos actualités gastronomiques.
            </p>
        </div>
    </div>
  )
}

export default NewsLetter