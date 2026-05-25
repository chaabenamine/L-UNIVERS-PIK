import React, { useState } from 'react'
// Make sure to import the new data we created earlier!
import { assets, menuDummyData, categories } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating' // Assuming you still have this!

const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, label)} className="accent-[#C53030]" />
            <span className='font-medium text-gray-700 select-none'>{label}</span>
        </label>
    )
}

const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="radio" name='sortOption' checked={selected} onChange={() => onChange(label)} className="accent-[#C53030]" />
            <span className='font-medium text-gray-700 select-none'>{label}</span>
        </label>
    )
}

const OurMenu = () => {
    const navigate = useNavigate()
    const [openFilters, setOpenFilters] = useState(false)
    
    // Adapted price ranges for a fine dining restaurant
    const priceRanges = [
        '0 à 15 TND',
        '15 à 30 TND',
        '30 à 50 TND',
        '+ de 50 TND',
    ];
    
    const sortOptions = [
        "Prix : Croissant",
        "Prix : Décroissant",
        "Populaire",
    ];

    return (
        <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 bg-[#FAF9F6] min-h-screen'>
            
            {/* Main Menu List Area */}
            <div className='lg:w-3/4 lg:pr-10'>
                <div className='flex flex-col items-start text-left mb-10'>
                    <h1 className='font-playfair text-4xl md:text-[40px] font-bold text-gray-800 uppercase tracking-wide'>
                        Le Menu Épik
                    </h1>
                    <p className='text-sm md:text-lg text-gray-600 mt-3 max-w-2xl leading-relaxed'>
                        Découvrez notre sélection de plats où chaque création tourne autour d'une épice maîtresse. Laissez-vous guider par les saveurs.
                    </p>
                </div>

                {menuDummyData.map((dish) => (
                    <div key={dish._id} className='flex flex-col md:flex-row items-center py-8 gap-8 border-b border-gray-200 last:pb-20 last:border-0 group'>
                        
                        {/* Dish Image */}
                        <div className='w-full md:w-5/12 overflow-hidden rounded-xl shadow-md cursor-pointer' onClick={() => { navigate(`/menu/${dish._id}`); scrollTo(0, 0) }}>
                            <img 
                                src={dish.image} 
                                alt={dish.name} 
                                title='Voir les détails' 
                                className='w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500' 
                            />
                        </div>

                        {/* Dish Details */}
                        <div className='w-full md:w-7/12 flex flex-col gap-3'>
                            <p className='text-[#C53030] font-bold text-xs tracking-widest uppercase'>
                                {dish.category}
                            </p>
                            
                            <h2 
                                onClick={() => { navigate(`/menu/${dish._id}`); scrollTo(0, 0) }} 
                                className='text-gray-900 text-3xl font-playfair font-bold cursor-pointer hover:text-[#C53030] transition-colors'
                            >
                                {dish.name}
                            </h2>
                            
                            <div className='flex items-center gap-2'>
                                <StarRating />
                                <span className='text-sm text-gray-500'>(Populaire)</span>
                                {dish.isSpicy && <span className='ml-2 text-lg' title="Épicé">🌶️</span>}
                            </div>
                            
                            {/* Replaced Location with Description */}
                            <p className='text-gray-600 text-sm leading-relaxed mt-1 line-clamp-2'>
                                {dish.description}
                            </p>

                            {/* Replaced Amenities with Main Spice & Ingredients */}
                            <div className='flex flex-wrap items-center mt-3 mb-4 gap-3'>
                                <div className='flex items-center gap-2 px-3 py-1.5 rounded bg-red-50 border border-red-100'>
                                    <p className='text-xs font-bold text-[#C53030]'>✨ Épice : {dish.mainSpice}</p>
                                </div>
                                <p className='text-xs text-gray-500 italic'>
                                    {dish.ingredients.slice(0, 3).join(', ')}...
                                </p>
                            </div>

                            {/* Price and Action */}
                            <div className='flex items-center justify-between mt-auto'>
                                <p className='text-2xl font-bold text-gray-900'>
                                    {dish.price} TND
                                </p>
                                <button 
                                    onClick={() => { navigate(`/menu/${dish._id}`); scrollTo(0, 0) }}
                                    className='px-5 py-2 text-sm font-semibold border-2 border-[#C53030] text-[#C53030] rounded hover:bg-[#C53030] hover:text-white transition-all cursor-pointer'
                                >
                                    Détails
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters Sidebar */}
            <div className='bg-white lg:w-1/4 w-full border border-gray-200 shadow-sm rounded-xl text-gray-700 max-lg:mb-8 lg:mt-6 sticky top-28'>
                <div className={`flex items-center justify-between px-6 py-4 lg:border-b border-gray-200 ${openFilters && "border-b"}`}>
                    <p className='text-lg font-bold text-gray-900'>FILTRES</p>
                    <div className='text-xs font-semibold cursor-pointer text-[#C53030]'>
                        <span onClick={() => setOpenFilters(!openFilters)} className='lg:hidden'>
                            {openFilters ? 'MASQUER' : "AFFICHER"}
                        </span>
                        <span className='hidden lg:block hover:underline'>
                            EFFACER
                        </span>
                    </div>
                </div>

                <div className={`${openFilters ? 'h-auto' : "h-0 lg:h-auto"} overflow-hidden transition-all duration-500`}>
                    
                    {/* Category Filter (Replacing Room Types) */}
                    <div className='px-6 pt-6'>
                        <p className='font-bold text-gray-900 pb-3 border-b border-gray-100 mb-3'>Catégories</p>
                        {categories.map((cat, index) => (
                            <CheckBox key={index} label={cat} />
                        ))}
                    </div>

                    {/* Preference Filter (New for Restaurant) */}
                    <div className='px-6 pt-6'>
                        <p className='font-bold text-gray-900 pb-3 border-b border-gray-100 mb-3'>Préférences</p>
                        <CheckBox label="Plats Épicés 🌶️" />
                        <CheckBox label="Végétarien 🍃" />
                    </div>

                    {/* Price Filter */}
                    <div className='px-6 pt-6'>
                        <p className='font-bold text-gray-900 pb-3 border-b border-gray-100 mb-3'>Budget</p>
                        {priceRanges.map((range, index) => (
                            <CheckBox key={index} label={range} />
                        ))}
                    </div>

                    {/* Sort By Filter */}
                    <div className='px-6 pt-6 pb-8'>
                        <p className='font-bold text-gray-900 pb-3 border-b border-gray-100 mb-3'>Trier par</p>
                        {sortOptions.map((option, index) => (
                            <RadioButton key={index} label={option} />
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default OurMenu