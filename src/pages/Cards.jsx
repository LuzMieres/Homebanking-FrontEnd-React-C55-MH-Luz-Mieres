import React from 'react'
import '../styles/style.css'
import CardsData from '../components/CardsData'
function Cards() {
  return (
    <div className='main min-h-screen w-[100%] flex flex-col items-center'>
      <h2 className='text-3xl text-gray-700 font-bold'>Yours Cards</h2>
      <div className='flex flex-wrap justify-center w-full pb-[20%] h-[100vh]'>
        <CardsData></CardsData>
      </div>
    </div>
  )
}

export default Cards