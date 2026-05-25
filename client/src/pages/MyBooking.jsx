import React, { useState } from 'react'
import Title from '../components/Title'
// Make sure you import the new reservation data from your assets file
import { assets, tableReservationsDummyData } from '../assets/assets'

const MyBooking = () => {

    // Using the new restaurant reservations data
    const [reservations, setReservations] = useState(tableReservationsDummyData)

    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32 bg-[#FAF9F6] min-h-screen'>
            
            <Title 
                title='Mes Réservations' 
                subTitle='Gérez vos réservations de table passées et à venir chez L’Univers Épik. Préparez votre voyage gastronomique en toute simplicité.' 
                align='left'
            />
            
            <div className='max-w-6xl mt-8 w-full text-gray-800 bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
                
                {/* Desktop Header Grid */}
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-200 font-bold text-gray-900 text-sm uppercase tracking-wider py-4' > 
                    <div className='w-1/3'>Détails de la réservation</div>
                    <div className='w-1/3 pl-4'>Date & Heure</div>
                    <div className='w-1/3 pl-4'>Statut</div>
                </div>

                {/* Reservations List */}
                {reservations.map((booking) => (
                    <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-100 py-8 first:border-t-0 last:border-0 hover:bg-gray-50 transition-colors rounded-lg px-2'>
                        
                        {/* Restaurant & Dish Pre-order Details */}
                        <div className='flex flex-col md:flex-row gap-4'>
                            {/* We show the image of the first pre-ordered dish, or a default image */}
                            <img 
                                className='w-full md:w-40 h-28 rounded-xl shadow-md object-cover' 
                                src={booking.dishPreOrders[0]?.image || assets.dishImg1} 
                                alt="Plat précommandé" 
                            />
                            
                            <div className='flex flex-col gap-1.5 justify-center'>
                                <p className='font-playfair text-2xl font-bold text-gray-900'>
                                    L'Univers Épik 
                                    <span className='font-sans text-sm font-normal text-gray-500 ml-2'>
                                        (Table {booking.tableNumber})
                                    </span>
                                </p>
                                
                                <div className='flex items-center gap-2 text-sm text-gray-600 mt-1'>
                                    <span className='text-lg'>🍽️</span>
                                    {/* Displaying the names of the pre-ordered dishes */}
                                    <span className='line-clamp-1 italic'>
                                        {booking.dishPreOrders.map(dish => dish.name).join(', ')}
                                    </span>
                                </div>
                                
                                <div className='flex items-center gap-2 text-sm text-gray-600'>
                                    <img className='w-4 h-4 opacity-70' src={assets.guestsIcon} alt="guests-icon" />
                                    <span className='font-medium'>Personnes : {booking.guests}</span>
                                </div>
                                
                                <p className='text-sm font-bold text-[#C53030] mt-1'>
                                    Estimation : {booking.totalEstimatedPrice} TND
                                </p>
                            </div>
                        </div>

                        {/* Date & Timings */}
                        <div className='flex flex-row md:flex-col md:justify-center md:gap-2 mt-6 md:mt-0 gap-8 md:pl-4'>
                            <div className='flex flex-col gap-1'>
                                <p className='text-xs font-bold text-gray-400 uppercase tracking-wide'>Date Prévue</p>
                                <p className='text-gray-800 font-medium'>
                                    {/* Formatting date to standard French format */}
                                    {new Date(booking.reservationDate).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-xs font-bold text-gray-400 uppercase tracking-wide mt-2 md:mt-0'>Heure</p>
                                <p className='text-gray-800 font-medium text-lg'>
                                    {booking.timeSlot}
                                </p>
                            </div>
                        </div>

                        {/* Status (Formerly Payment Status) */}
                        <div className='flex flex-col items-start justify-center pt-5 md:pt-0 md:pl-4'>
                            <div className='flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 shadow-sm'>
                                {/* Dynamically changing color based on "confirmed" or "pending" status */}
                                <div className={`h-2.5 w-2.5 rounded-full shadow-sm ${booking.status === "confirmed" ? "bg-green-500" : "bg-orange-400"}`}></div>
                                <p className={`text-sm font-bold uppercase tracking-wider ${booking.status === "confirmed" ? "text-green-600" : "text-orange-500"}`}>
                                    {booking.status === "confirmed" ? "Confirmée" : "En attente"}
                                </p>
                            </div>

                            {/* Show a call to action if the reservation is pending */}
                            {booking.status === "pending" && (
                                <button className='px-4 py-2 mt-4 text-xs font-bold border-2 border-[#C53030] text-[#C53030] rounded-md hover:bg-[#C53030] hover:text-white transition-all cursor-pointer shadow-sm w-full md:w-auto text-center'>
                                    Confirmer l'acompte
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyBooking