import React from 'react'
import { menuDummyData } from '../assets/assets' 
import DishCard from './DishCard' 
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const SignatureDishes = () => {
  const navigate = useNavigate()
  
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-[#FAF9F6] py-20'>
      
      <Title 
        title='Plats Signatures' 
        subTitle='Découvrez notre sélection de créations exceptionnelles, où chaque assiette est un voyage au cœur des épices.' 
      />
      
        {/* FIX APPLIED: Replaced flex-wrap with a 4-column grid layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mt-16 w-full max-w-[1400px]'>
            {menuDummyData.slice(0,4).map((dish, index)=>(
                <DishCard key={dish._id} dish={dish} index={index}/>
            ))}
        </div>

        <button 
          onClick={()=>{navigate('/menu'); scrollTo(0,0)}} 
          className='my-16 px-8 py-3 text-sm font-semibold border-2 border-[#C53030] text-[#C53030] rounded hover:bg-[#C53030] hover:text-white transition-all duration-300 cursor-pointer uppercase tracking-wider'
        >
          Voir tout le menu
        </button>

    </div>
  )
}

export default SignatureDishes