import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// Imported our new restaurant data
import { assets, menuDummyData, restaurantValues } from '../assets/assets' 
import StarRating from '../components/StarRating'

const DishDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [dish, setDish] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        const foundDish = menuDummyData.find(item => item._id === id)
        if (foundDish) {
            setDish(foundDish)
            setMainImage(foundDish.image)
        }
    }, [id])

  return dish && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#FAF9F6] min-h-screen'>
        
        {/* Breadcrumb Navigation (Good for E-business UX) */}
        <p className='text-sm text-gray-500 mb-6 cursor-pointer hover:text-[#C53030] transition-colors' onClick={() => navigate('/menu')}>
            ← Retour au menu complet
        </p>

        {/* Dish Header */}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-3'>
            <h1 className='text-3xl md:text-5xl font-playfair font-bold text-gray-900'>
                {dish.name}
            </h1>
            <p className='text-xs font-bold tracking-wider py-1.5 px-4 text-white bg-[#C53030] rounded-full uppercase shadow-sm'>
                {dish.category}
            </p>
            {dish.isSpicy && <span className='text-2xl' title='Plat Épicé'>🌶️</span>}
        </div>

        {/* Dish Rating & Spice Focus */}
        <div className='flex flex-wrap items-center gap-6 mt-4'>
            <div className='flex items-center gap-1'>
                <StarRating/>
                <p className='ml-2 text-gray-600 text-sm'>Très apprécié</p>
            </div>
            <div className='flex items-center gap-2 text-[#C53030] font-semibold text-sm bg-red-50 px-3 py-1 rounded-md border border-red-100'>
                <span>✨ Épice Héroïne :</span>
                <span>{dish.mainSpice}</span>
            </div>
        </div>

        {/* Image Section */}
        <div className='flex flex-col lg:flex-row mt-8 gap-8'>
            <div className='w-full'>
                <img 
                    className='w-full max-h-[500px] rounded-2xl shadow-xl object-cover' 
                    src={mainImage} 
                    alt={dish.name} 
                />
            </div>
            {/* Note: I left the gallery logic here in case you add more images per dish later! */}
            {dish.images && dish.images.length > 1 && (
                <div className='flex lg:flex-col gap-4 overflow-x-auto w-full lg:w-32 shrink-0'>
                    {dish.images.map((image, index) => (
                        <img 
                            onClick={() => setMainImage(image)}
                            key={index} 
                            src={image} 
                            alt={`${dish.name} angle ${index}`}
                            className={`w-24 lg:w-full h-24 rounded-xl shadow-md object-cover cursor-pointer hover:opacity-80 transition-opacity ${mainImage === image ? 'ring-2 ring-[#C53030]' : ''}`} 
                        />
                    ))}
                </div>
            )}
        </div>

        {/* Dish Highlights & Price */}
        <div className='flex flex-col md:flex-row md:justify-between items-start mt-12 gap-8'>
            <div className='flex flex-col md:w-2/3'>
                <h2 className='text-2xl font-playfair font-bold text-gray-800 mb-4'>L'Expérience</h2>
                <p className='text-gray-600 text-lg leading-relaxed'>
                    {dish.description}
                </p>

                <h3 className='text-lg font-bold text-gray-800 mt-8 mb-4'>Composition de l'assiette</h3>
                <div className='flex flex-wrap items-center gap-3'>
                    {dish.ingredients.map((item, index) => (
                        <div key={index} className='flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 shadow-sm'>
                            <p className='text-sm font-medium text-gray-700'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Price Block */}
            <div className='md:w-1/3 bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center min-w-[250px]'>
                <p className='text-sm text-gray-500 uppercase tracking-wide mb-2'>Prix par portion</p>
                <p className='text-4xl font-bold text-[#C53030]'>{dish.price} TND</p>
            </div>
        </div>

        {/* Table Reservation Form (Formerly CheckIn/Out) */}
        <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-xl p-8 rounded-2xl mx-auto mt-16 max-w-6xl border border-gray-100'>
            <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-700 w-full md:w-auto'>
                
                <div className='flex flex-col w-full md:w-auto'>
                    <label className='font-bold text-sm mb-1' htmlFor="reservationDate">Date</label>
                    <input required className='w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-[#C53030] focus:ring-1 focus:ring-[#C53030] transition-all' type="date" id="reservationDate" />
                </div>
                
                <div className='w-px h-12 bg-gray-200 max-md:hidden'></div>

                <div className='flex flex-col w-full md:w-auto'>
                    <label className='font-bold text-sm mb-1' htmlFor="timeSlot">Heure</label>
                    <input required className='w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-[#C53030] focus:ring-1 focus:ring-[#C53030] transition-all' type="time" id="timeSlot" />
                </div>
                
                <div className='w-px h-12 bg-gray-200 max-md:hidden'></div>

                <div className='flex flex-col w-full md:w-auto'>
                    <label className='font-bold text-sm mb-1' htmlFor="guests">Personnes</label>
                    <input required className='md:w-24 rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-[#C53030] focus:ring-1 focus:ring-[#C53030] transition-all' placeholder='2' min="1" max="12" type="number" id="guests" />
                </div>

            </div>
            <button type='submit' className='bg-[#C53030] hover:bg-red-800 transition-colors text-white font-bold rounded-md max-md:w-full max-md:mt-6 md:ml-8 px-8 py-3 md:py-4 text-base cursor-pointer shadow-md'>
                Réserver une table
            </button>
        </form>

        {/* Restaurant Values (Formerly Room Common Specs) */}
        <div className='mt-24 bg-white p-8 rounded-2xl shadow-sm border border-gray-100'>
            <h2 className='text-2xl font-playfair font-bold text-gray-800 mb-8'>La Promesse Épik</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {restaurantValues && restaurantValues.map((spec, index) => (
                    <div key={index} className='flex items-start gap-4'>
                        <div className='p-3 bg-red-50 rounded-lg'>
                            <img className='w-6 h-6' src={spec.icon} alt={`${spec.title}-icon`} />
                        </div>
                        <div>
                            <p className='text-lg font-bold text-gray-800'>{spec.title}</p>
                            <p className='text-gray-600 mt-1 text-sm leading-relaxed'>{spec.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default DishDetails