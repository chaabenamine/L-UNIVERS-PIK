import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-[#FAF9F6] pt-20 pb-30'>
        
        <Title 
          title="L'Avis de nos Épicuriens" 
          subTitle="Découvrez les retours de nos convives et critiques culinaires sur leur voyage inoubliable au cœur des épices." 
        />
        
        <div className="flex flex-wrap justify-center gap-8 mt-16 w-full max-w-7xl">
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 max-w-[380px] w-full flex flex-col">
                    
                    {/* Decorative Quote Mark */}
                    <div className="text-[#C53030] text-6xl font-serif opacity-20 mb-[-30px] leading-none">
                        &ldquo;
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-gray-600 mt-6 mb-8 italic flex-grow leading-relaxed z-10 relative">
                        {testimonial.review}
                    </p>
                    
                    {/* Reviewer Profile */}
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                        <img className="w-14 h-14 rounded-full object-cover shadow-sm" src={testimonial.image} alt={testimonial.name} />
                        <div>
                            <p className="font-playfair text-xl font-bold text-gray-900">{testimonial.name}</p>
                            {/* In assets.js, 'address' now holds titles like "Critique Culinaire" */}
                            <p className="text-xs text-[#C53030] font-bold uppercase tracking-wider mt-1">
                                {testimonial.address}
                            </p>
                        </div>
                    </div>
                    
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mt-4">
                        <StarRating/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonial