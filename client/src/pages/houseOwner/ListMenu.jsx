import React, { useState } from 'react'
// Make sure to import menuDummyData from assets!
import { menuDummyData } from '../../assets/assets'
import Title from '../../components/Title'

const ListMenu = () => {
    // Initializing state with your restaurant menu data
    const [menu, setMenu] = useState(menuDummyData)

    // Function to handle toggling dish availability (simulated for now)
    const handleToggleAvailability = (dishId) => {
        setMenu(prevMenu => 
            prevMenu.map(dish => 
                dish._id === dishId ? { ...dish, isAvailable: !dish.isAvailable } : dish
            )
        )
    }

  return (
    <div className='p-6 w-full'>
        <Title 
            align='left' 
            font='playfair'
            title='Gestion du Menu' 
            subTitle='Gérez les plats proposés à L’Univers Épik. Mettez à jour les disponibilités en temps réel pour offrir la meilleure expérience à vos convives.'
        />
        
        <p className='text-sm font-bold text-gray-700 uppercase tracking-wide mt-10'>Tous les Plats</p>
        
        <div className='w-full max-w-5xl text-left border border-gray-200 rounded-xl overflow-hidden mt-4 shadow-sm bg-white'>
            <div className='overflow-x-auto'>
                <table className='w-full whitespace-nowrap'>
                    <thead className='bg-gray-50 border-b border-gray-200'>
                        <tr>
                            <th className='py-4 px-6 text-gray-800 font-bold uppercase tracking-wider text-xs'>Nom du Plat</th>
                            <th className='py-4 px-6 text-gray-800 font-bold uppercase tracking-wider text-xs max-sm:hidden'>Catégorie</th>
                            <th className='py-4 px-6 text-gray-800 font-bold uppercase tracking-wider text-xs hidden md:table-cell'>Épice Clé</th>
                            <th className='py-4 px-6 text-gray-800 font-bold uppercase tracking-wider text-xs text-right'>Prix (TND)</th>
                            <th className='py-4 px-6 text-gray-800 font-bold uppercase tracking-wider text-xs text-center'>Disponible</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm divide-y divide-gray-100'>
                        {menu.map((item) => (
                            <tr key={item._id} className='hover:bg-red-50/30 transition-colors'>
                                
                                {/* Dish Name & Spicy Indicator */}
                                <td className='py-4 px-6 text-gray-900 font-medium flex items-center gap-2'>
                                    {/* Optional: Show a tiny image thumbnail here if you want! */}
                                    <img src={item.image} alt={item.name} className='w-10 h-10 rounded-md object-cover hidden sm:block shadow-sm' />
                                    <span>{item.name}</span>
                                    {item.isSpicy && <span title="Épicé">🌶️</span>}
                                </td>
                                
                                {/* Category */}
                                <td className='py-4 px-6 text-gray-600 max-sm:hidden'>
                                    <span className='px-2.5 py-1 bg-gray-100 rounded-full text-xs font-medium'>
                                        {item.category}
                                    </span>
                                </td>
                                
                                {/* Main Spice */}
                                <td className='py-4 px-6 text-[#C53030] font-medium hidden md:table-cell'>
                                    ✨ {item.mainSpice}
                                </td>
                                
                                {/* Price */}
                                <td className='py-4 px-6 text-gray-900 font-bold text-right'>
                                    {item.price}
                                </td>
                                
                                {/* Availability Toggle Action */}
                                <td className='py-4 px-6 text-center'>
                                    <label className='relative inline-flex items-center justify-center cursor-pointer text-gray-900'>
                                        <input 
                                            type="checkbox" 
                                            className='sr-only peer' 
                                            checked={item.isAvailable} 
                                            onChange={() => handleToggleAvailability(item._id)}
                                        />
                                        {/* Updated toggle color to Épik Red when active */}
                                        <div className='w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#C53030] transition-colors duration-300 shadow-inner'></div>
                                        <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5 shadow-sm"></span>
                                    </label>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ListMenu