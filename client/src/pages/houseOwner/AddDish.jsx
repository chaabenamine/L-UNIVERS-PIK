import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, categories } from '../../assets/assets'

const AddDish = () => {
    // 1. Image state remains the same, perfect for multiple dish angles
    const [images, setImages] = useState({
        1: null,
        2: null,
        3: null,
        4: null
    })

    // 2. Updated state for Gastronomy data
    const [inputs, setInputs] = useState({
        name: '',
        category: '',
        price: 0,
        mainSpice: '',
        description: '',
        preferences: {
            'Plat Épicé 🌶️': false,
            'Végétarien 🍃': false,
            'Sans Gluten 🌾': false,
            'Fait Maison 👨‍🍳': false,
            'Signature ✨': false
        }
    })

  return (
    <form className='max-w-4xl bg-white p-8 rounded-xl shadow-sm border border-gray-100'>
        <Title 
            align='left' 
            font='playfair' 
            title='Ajouter un Plat' 
            subTitle='Renseignez les détails du plat, son prix et ses caractéristiques pour enrichir la carte de L’Univers Épik.'
        />
        
        {/* Upload area for dish images */}
        <p className='text-sm font-bold text-gray-700 uppercase tracking-wide mt-10 mb-3'>Photos du plat</p>
        <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
            {Object.keys(images).map((key) => (
                <label htmlFor={`dishImages${key}`} key={key} className='block w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#C53030] transition-colors flex items-center justify-center overflow-hidden cursor-pointer bg-gray-50'>
                    <img className={`object-cover ${images[key] ? 'w-full h-full' : 'w-8 h-8 opacity-50'}`}
                     src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="upload" />
                     <input type="file" accept='image/*' id={`dishImages${key}`} hidden
                     onChange={e => setImages({...images, [key]: e.target.files[0]})} />
                </label>
            ))}
        </div>

        {/* Name and Price Row */}
        <div className='w-full flex max-sm:flex-col sm:gap-6 mt-8'>
            <div className='flex-1'>
                <p className='text-sm font-bold text-gray-700 uppercase tracking-wide'>Nom du Plat</p>
                <input type="text" placeholder='ex: Magret Fusion Oriental' className='border border-gray-300 mt-1 rounded p-2.5 w-full outline-none focus:border-[#C53030] focus:ring-1 focus:ring-[#C53030] transition-all'
                 value={inputs.name} onChange={e => setInputs({...inputs, name: e.target.value})} />
            </div>
            <div className='sm:w-32'>
                <p className='text-sm font-bold text-gray-700 uppercase tracking-wide'>Prix <span className='text-xs lowercase text-gray-400'>(TND)</span></p>
                <input type="number" min="0" placeholder='0' className='border border-gray-300 mt-1 rounded p-2.5 w-full outline-none focus:border-[#C53030] focus:ring-1 focus:ring-[#C53030] transition-all'
                 value={inputs.price} onChange={e => setInputs({...inputs, price: e.target.value})} />
            </div>
        </div>

        {/* Category and Main Spice Row */}
        <div className='w-full flex max-sm:flex-col sm:gap-6 mt-6'>
            <div className='flex-1'>
                <p className='text-sm font-bold text-gray-700 uppercase tracking-wide'>Catégorie</p>
                <select value={inputs.category} onChange={e => setInputs({...inputs, category: e.target.value})}
                 className='border border-gray-300 mt-1 rounded p-2.5 w-full outline-none focus:border-[#C53030] focus:ring-1 focus:ring-[#C53030] transition-all bg-white'>
                    <option value="">Sélectionner une catégorie</option>
                    {categories ? categories.map((cat, i) => (
                        <option key={i} value={cat}>{cat}</option>
                    )) : (
                        <>
                            <option value="Entrée Froide">Entrée Froide</option>
                            <option value="Entrée Chaude">Entrée Chaude</option>
                            <option value="Plat Principal">Plat Principal</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Boissons">Boissons</option>
                        </>
                    )}
                </select>
            </div>
            <div className='flex-1'>
                <p className='text-sm font-bold text-gray-700 uppercase tracking-wide'>Épice Clé</p>
                <input type="text" placeholder='ex: Cannelle douce' className='border border-gray-300 mt-1 rounded p-2.5 w-full outline-none focus:border-[#C53030] focus:ring-1 focus:ring-[#C53030] transition-all'
                 value={inputs.mainSpice} onChange={e => setInputs({...inputs, mainSpice: e.target.value})} />
            </div>
        </div>

        {/* Description Textarea */}
        <div className='w-full mt-6'>
            <p className='text-sm font-bold text-gray-700 uppercase tracking-wide'>Description</p>
            <textarea placeholder="L'expérience gustative, les ingrédients..." rows="3" className='border border-gray-300 mt-1 rounded p-2.5 w-full outline-none focus:border-[#C53030] focus:ring-1 focus:ring-[#C53030] transition-all resize-none'
                value={inputs.description} onChange={e => setInputs({...inputs, description: e.target.value})} />
        </div>

        {/* Dietary Preferences (Formerly Amenities) */}
        <p className='text-sm font-bold text-gray-700 uppercase tracking-wide mt-8'>Caractéristiques & Préférences</p>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-3 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200'>
            {Object.keys(inputs.preferences).map((pref, index) => (
                <div key={index} className='flex items-center gap-2'>
                    <input type="checkbox" id={`preferences${index+1}`} checked={inputs.preferences[pref]} 
                     className="w-4 h-4 accent-[#C53030] cursor-pointer"
                     onChange={() => setInputs({...inputs, preferences: {...inputs.preferences, [pref]: !inputs.preferences[pref]}})} />
                    <label className='cursor-pointer text-sm font-medium select-none' htmlFor={`preferences${index+1}`}>{pref}</label>
                </div>
            ))}
        </div>

        <button type="submit" className="bg-[#C53030] hover:bg-red-800 text-white font-bold px-10 py-3 rounded-md mt-10 cursor-pointer transition-colors shadow-md w-full md:w-auto">
            Ajouter au Menu
        </button>
    </form>
  )
}

export default AddDish