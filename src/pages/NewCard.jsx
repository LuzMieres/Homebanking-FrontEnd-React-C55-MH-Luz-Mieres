import React from 'react'
import NewCardData from '../components/NewCardData'

function NewCard() {
  

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-gray-700 text-3xl font-bold mr-[10%] sm:text-5xl'>Aply for a Card</h2>
      <NewCardData></NewCardData>
    </div>
  )
}

export default NewCard