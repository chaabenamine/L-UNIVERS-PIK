import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {
    // Make sure your assets.js dashboardDummyData uses the restaurant version we created!
    const [dashboardData, setDashboardData] = useState(dashboardDummyData)

  return (
    <div className='p-6 w-full'>
        <Title 
            align='left' 
            font='playfair' 
            title="Vue d'ensemble" 
            subTitle="Suivez vos réservations de tables, analysez le chiffre d'affaires prévisionnel et gérez le flux de votre service en temps réel."
        />
        
        {/* Key Metrics Row */}
        <div className='flex flex-wrap gap-6 my-8'>
            
            {/* Total Reservations */}
            <div className='bg-red-50 border border-red-100 rounded-xl flex items-center p-5 min-w-[240px] shadow-sm'>
                <div className='bg-white p-3 rounded-lg shadow-sm'>
                    <img src={assets.totalBookingIcon} alt="Réservations" className='h-8 w-8 opacity-80'/>
                </div>
                <div className='flex flex-col ml-5'>
                    <p className='text-[#C53030] font-bold text-sm uppercase tracking-wide'>Réservations (Aujourd'hui)</p>
                    <p className='text-gray-900 font-playfair font-bold text-2xl'>{dashboardData.totalReservations}</p>
                </div>
            </div>

            {/* Expected Revenue */}
            <div className='bg-red-50 border border-red-100 rounded-xl flex items-center p-5 min-w-[240px] shadow-sm'>
                <div className='bg-white p-3 rounded-lg shadow-sm'>
                    <img src={assets.totalRevenueIcon} alt="Revenus" className='h-8 w-8 opacity-80'/>
                </div>
                <div className='flex flex-col ml-5'>
                    <p className='text-[#C53030] font-bold text-sm uppercase tracking-wide'>Chiffre d'Affaires Prévu</p>
                    <p className='text-gray-900 font-playfair font-bold text-2xl'>{dashboardData.expectedRevenue} TND</p>
                </div>
            </div>
        </div>

        {/* Recent Reservations Table */}
        <h2 className='text-xl font-bold text-gray-800 mb-5 uppercase tracking-wide mt-10'>Réservations Récentes</h2>
        
        <div className='w-full max-w-4xl text-left border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white'>
            <div className='overflow-x-auto'>
                <table className='w-full whitespace-nowrap'>
                    <thead className='bg-gray-50 border-b border-gray-200'>
                        <tr>
                            <th className='py-4 px-6 text-gray-800 font-bold text-xs uppercase tracking-wider'>Client</th>
                            <th className='py-4 px-6 text-gray-800 font-bold text-xs uppercase tracking-wider max-sm:hidden'>Heure / Couverts</th>
                            <th className='py-4 px-6 text-gray-800 font-bold text-xs uppercase tracking-wider hidden md:table-cell'>Précommandes</th>
                            <th className='py-4 px-6 text-gray-800 font-bold text-xs uppercase tracking-wider text-center'>Estimation (TND)</th>
                            <th className='py-4 px-6 text-gray-800 font-bold text-xs uppercase tracking-wider text-center'>Statut</th>
                        </tr>
                    </thead>

                    <tbody className='text-sm divide-y divide-gray-100'>
                        {dashboardData.reservations.map((item, index) => (
                            <tr key={index} className='hover:bg-red-50/30 transition-colors'>
                                
                                {/* User Name */}
                                <td className='py-4 px-6 text-gray-900 font-medium flex items-center gap-3'>
                                    <img src={item.user?.image || assets.userIcon} alt="user" className='w-8 h-8 rounded-full bg-gray-100 p-1'/>
                                    {item.user?.username || "Client Inconnu"}
                                </td>

                                {/* Time and Guests */}
                                <td className='py-4 px-6 text-gray-600 max-sm:hidden'>
                                    <span className='font-bold text-gray-800'>{item.timeSlot}</span>
                                    <span className='text-xs text-gray-400 ml-2'>({item.guests} pers.)</span>
                                </td>

                                {/* Pre-orders Preview */}
                                <td className='py-4 px-6 text-gray-500 text-xs hidden md:table-cell truncate max-w-[200px]' title={item.dishPreOrders?.map(d => d.name).join(', ')}>
                                    {item.dishPreOrders?.length > 0 ? (
                                        <span className='italic'>
                                            {item.dishPreOrders.length} plat(s) : {item.dishPreOrders[0].name}...
                                        </span>
                                    ) : (
                                        <span className='text-gray-300'>Aucune</span>
                                    )}
                                </td>

                                {/* Total Amount */}
                                <td className='py-4 px-6 text-gray-900 font-bold text-center'>
                                    {item.totalEstimatedPrice}
                                </td>

                                {/* Status */}
                                <td className='py-4 px-6 text-center'>
                                    <button className={`py-1.5 px-3 text-xs font-bold rounded-full mx-auto uppercase tracking-wide border ${item.status === 'confirmed' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-orange-50 text-orange-600 border-orange-200'}`}>
                                        {item.status === 'confirmed' ? 'Confirmée' : 'En attente'}
                                    </button>
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

export default Dashboard