import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'
import { useNavigate } from 'react-router-dom' 

const ExclusiveOffers = () => {
    const navigate = useNavigate()

    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30 bg-white'>
            
            {/* Header Section */}
            <div className='flex flex-col md:flex-row items-center justify-between w-full gap-6'>
                <Title 
                    align='left' 
                    title='Expériences Épik' 
                    subTitle='Laissez-vous tenter par nos menus de dégustation et événements exclusifs pour un voyage culinaire hors du commun.'
                />
                <button 
                    onClick={() => {navigate('/menu'); scrollTo(0,0)}} 
                    className='group flex items-center gap-2 font-bold text-[#C53030] cursor-pointer max-md:mt-4 uppercase tracking-wide hover:opacity-80 transition-opacity shrink-0'
                >
                    Voir notre carte
                    <img src={assets.arrowIcon} alt="arrow-icon" className='w-4 group-hover:translate-x-1 transition-transform' style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(93%) saturate(1914%) hue-rotate(345deg) brightness(87%) contrast(92%)' }} />  
                </button>
            </div>

            {/* Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full'>
                {exclusiveOffers.map((item) => (
                    <div key={item._id} className='group relative flex flex-col items-start justify-end gap-2 h-[420px] px-6 pb-8 rounded-2xl text-white overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'>
                        
                        {/* Background Image with Hover Zoom Effect */}
                        <div 
                            className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                            style={{backgroundImage: `url(${item.image})`}}
                        ></div>
                        
                        {/* Dark Gradient Overlay for perfect text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        {/* Subtle Privilege Badge */}
                        <p className='px-4 py-1.5 absolute top-5 left-5 text-xs bg-[#C53030] text-white font-bold rounded-full shadow-md uppercase tracking-wider z-10'>
                            Privilège -{item.priceOff}%
                        </p>
                        
                        {/* Content Area */}
                        <div className='relative z-10 w-full mt-auto'>
                            <p className='text-3xl font-bold font-playfair mb-3 leading-tight'>{item.title}</p>
                            <p className='text-sm text-gray-200 line-clamp-3 leading-relaxed'>{item.description}</p>
                            
                            <div className='flex items-center gap-2 mt-5'>
                                <span className='text-lg opacity-80'>⌚</span>
                                <p className='text-xs font-bold text-gray-300 uppercase tracking-widest'>
                                    Disponibilité : {item.expiryDate}
                                </p>
                            </div>
                        </div>
                        
                        {/* Action Button */}
                        <button 
                            onClick={() => navigate('/reservations')} 
                            className='relative z-10 flex items-center gap-2 font-bold text-white cursor-pointer mt-6 border-b-2 border-transparent hover:border-[#C53030] transition-all pb-1'
                        >
                            Réserver cette offre 
                            <img className='invert group-hover:translate-x-2 transition-transform w-4 opacity-90' src={assets.arrowIcon} alt="arrow-icon" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExclusiveOffers