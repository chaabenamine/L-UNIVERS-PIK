import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-gray-900 text-gray-400 pt-16 px-6 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
        
        {/* Brand Section */}
        <div className='max-w-80'>
          <h2 className="text-white font-playfair text-2xl font-bold mb-4">L'Univers Épik</h2>
          <p className='text-sm leading-relaxed'>
            L'excellence gastronomique au cœur de l'épice. Une expérience sensorielle unique où chaque détail raconte une histoire.
          </p>
          <div className='flex items-center gap-4 mt-6'>
            <img src={assets.instagramIcon} alt="instagram" className='w-5 cursor-pointer hover:opacity-70 transition-opacity' />
            <img src={assets.facebookIcon} alt="facebook" className='w-5 cursor-pointer hover:opacity-70 transition-opacity'/>
            <img src={assets.twitterIcon} alt="twitter" className='w-5 cursor-pointer hover:opacity-70 transition-opacity'/>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <p className='font-playfair text-lg text-white mb-4'>MAISON</p>
          <ul className='flex flex-col gap-2 text-sm'>
            <li><a href="/about-us" className='hover:text-[#C53030] transition-colors'>Notre Histoire</a></li>
            <li><a href="/experience" className='hover:text-[#C53030] transition-colors'>L'Art des Épices</a></li>
            <li><a href="#" className='hover:text-[#C53030] transition-colors'>Carrières</a></li>
            <li><a href="#" className='hover:text-[#C53030] transition-colors'>Presse</a></li>
          </ul>
        </div>

        {/* Contact Section (Remplace l'ancienne section Support) */}
        <div>
          <p className='font-playfair text-lg text-white mb-4'>NOUS CONTACTER</p>
          <ul className='flex flex-col gap-4 text-sm'>
            <li className='flex items-start gap-3'>
              <span className='text-xl'>📍</span>
              <span className='leading-tight'>
                Daroufa Beach <br />
                Nabeul, Tunisie
              </span>
            </li>
            <li className='flex items-center gap-3'>
              <span className='text-xl'>📞</span>
              <a href="tel:+21627751220" className='hover:text-[#C53030] transition-colors'>
                +216 27 751 220
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <span className='text-xl'>✉️</span>
              <a href="mailto:luniversepik@gmail.com" className='hover:text-[#C53030] transition-colors'>
                luniversepik@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className='max-w-80'>
          <p className='font-playfair text-lg text-white mb-4'>L'ÉDITION ÉPIK</p>
          <p className='text-sm mb-4'>
            Inscrivez-vous pour recevoir nos menus de saison et invitations exclusives.
          </p>
          <div className='flex items-center'>
            <input 
              type="email" 
              className='bg-white/10 border border-white/20 h-10 px-4 w-full outline-none text-white focus:border-[#C53030] transition-all' 
              placeholder='Votre email' 
            />
            <button className='flex items-center justify-center bg-[#C53030] h-10 w-12 rounded-r hover:bg-red-800 transition-colors'>
              <img src={assets.arrowIcon} alt="subscribe" className='w-4 invert' />
            </button>
          </div>
        </div>
      </div>

      <hr className='border-gray-800 mt-16' />
      
      <div className='flex flex-col md:flex-row gap-4 items-center justify-between py-8 text-xs'>
        <p>© {new Date().getFullYear()} L'Univers Épik. Tous droits réservés.</p>
        <ul className='flex items-center gap-6'>
          <li><a href="#" className='hover:text-white'>Confidentialité</a></li>
          <li><a href="#" className='hover:text-white'>Mentions Légales</a></li>
          <li><a href="#" className='hover:text-white'>Plan du site</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer