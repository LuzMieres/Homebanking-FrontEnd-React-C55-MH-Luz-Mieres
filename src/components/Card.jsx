import React from 'react'
import CardsData from '../components/CardsData'
import DataClients from './data'



function Card() {
  return (
    <div className='flex flex-col items-center gap-6 mt-12 min-h-screen'>
        <DataClients></DataClients>
        <CardsData></CardsData>
        
    </div>
  )
}

export default Card