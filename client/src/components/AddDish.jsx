import React, { useState } from 'react'
import { assets, categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const AddDish = () => {
    // Note: You will need to update your AppContext to provide setShowAddDish instead of setShowHouseReg
    const { setShowAddDish, axios, getToken, setIsOwner } = useAppContext()

    // Updated State for Menu Items
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [mainSpice, setMainSpice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [isSpicy, setIsSpicy] = useState(false)

    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault();
            
            // Updated API endpoint to /api/dishes (or /api/menu)
            const dishData = { name, price: Number(price), mainSpice, category, description, isSpicy };
            
            const { data } = await axios.post(`/api/dishes`, dishData, {
                headers: { Authorization: `Bearer ${await getToken()}` }
            })
            
            if (data.success) {
                toast.success(data.message)
                setIsOwner(true) // Keeps your dashboard access logic
                setShowAddDish(false);
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm'>
       <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className='flex bg-white rounded-xl max-w-4xl w-full max-md:mx-4 shadow-2xl overflow-hidden'>
        
        {/* Left Side Image (Using your dishImg or a specific admin graphic) */}
        <div className='w-1/2 bg-gray-50 hidden md:block relative'>
            <img className='w-full h-full object-cover' src={assets.dishImg1} alt="add-dish-bg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <h2 className="text-white text-3xl font-playfair font-bold">Enrichir l'expérience Épik</h2>
            </div>
        </div>
        
        <div className='relative flex flex-col w-full md:w-1/2 p-8 md:p-10 max-h-[90vh] overflow-y-auto'>
            <img src={assets.closeIcon} alt="close-icon" className='absolute top-6 right-6 h-4 w-4 cursor-pointer opacity-50 hover:opacity-100 transition-opacity' onClick={() => setShowAddDish(false)}/>
            
            <p className='text-2xl font-playfair font-bold text-gray-800 mt-2 mb-6'>Ajouter un Plat</p>
            
            {/* Dish Name */}
            <div className='w-full mb-4'>
                <label htmlFor="name" className='text-sm font-bold text-gray-700 uppercase tracking-wide'>
                    Nom du Plat
                </label>
                <input id='name' onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='ex: Carpaccio Safrané' className='border border-gray-300 rounded-md w-full px-4 py-2.5 mt-1 focus:ring-2 focus:ring-[#C53030] focus:border-[#C53030] outline-none transition-all' required/>
            </div>
            
            {/* Category Dropdown (Replacing Cities) */}
            <div className='w-full mb-4'>
                <label htmlFor="category" className='text-sm font-bold text-gray-700 uppercase tracking-wide'>
                    Catégorie
                </label>
                <select onChange={(e) => setCategory(e.target.value)} value={category} id="category" className='border border-gray-300 rounded-md w-full px-4 py-2.5 mt-1 focus:ring-2 focus:ring-[#C53030] focus:border-[#C53030] outline-none transition-all bg-white' required>
                    <option value="" disabled>Sélectionner une catégorie</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div className='flex gap-4 mb-4'>
                {/* Price */} 
                <div className='w-1/2'>
                    <label htmlFor="price" className='text-sm font-bold text-gray-700 uppercase tracking-wide'>
                        Prix (TND)
                    </label>
                    <input id='price' onChange={(e) => setPrice(e.target.value)} value={price} type="number" min="0" placeholder='0.00' className='border border-gray-300 rounded-md w-full px-4 py-2.5 mt-1 focus:ring-2 focus:ring-[#C53030] focus:border-[#C53030] outline-none transition-all' required/>
                </div>

                {/* Main Spice */} 
                <div className='w-1/2'>
                    <label htmlFor="mainSpice" className='text-sm font-bold text-gray-700 uppercase tracking-wide'>
                        Épice Clé
                    </label>
                    <input id='mainSpice' onChange={(e) => setMainSpice(e.target.value)} value={mainSpice} type="text" placeholder='ex: Safran, Cannelle' className='border border-gray-300 rounded-md w-full px-4 py-2.5 mt-1 focus:ring-2 focus:ring-[#C53030] focus:border-[#C53030] outline-none transition-all' required/>
                </div>
            </div>

            {/* Description */}
            <div className='w-full mb-4'>
                <label htmlFor="description" className='text-sm font-bold text-gray-700 uppercase tracking-wide'>
                    Description de l'expérience
                </label>
                <textarea id='description' onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Décrivez les saveurs et l'expérience culinaire..." rows="3" className='border border-gray-300 rounded-md w-full px-4 py-2.5 mt-1 focus:ring-2 focus:ring-[#C53030] focus:border-[#C53030] outline-none transition-all resize-none' required></textarea>
            </div>

            {/* Spicy Toggle */}
            <div className='w-full mb-6 flex items-center gap-3'>
                <input id='isSpicy' type="checkbox" checked={isSpicy} onChange={(e) => setIsSpicy(e.target.checked)} className='w-5 h-5 accent-[#C53030] cursor-pointer'/>
                <label htmlFor="isSpicy" className='text-sm font-bold text-gray-700 cursor-pointer flex items-center gap-1'>
                    Plat Pimenté / Épicé 🌶️
                </label>
            </div>

            <button type="submit" className="bg-[#C53030] hover:bg-red-800 transition-colors text-white font-bold w-full py-3 rounded-md cursor-pointer shadow-md mt-auto">
                Ajouter au Menu
            </button> 
        </div>
       </form>
    </div>
  )
}

export default AddDish