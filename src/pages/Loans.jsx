import React from 'react'
import LoansData from '../components/LoansData'
import '../styles/style.css'
function Loans() {
  return (
    <div className='main min-h-screen w-[100%] flex flex-col items-center'>
      <h2 className='text-3xl text-gray-700 font-bold mr-[20%]'>Yours Loans</h2>
      <div className='flex flex-wrap justify-center w-full mt-10'>
        <LoansData></LoansData>
      </div>
    </div>
  )
}

export default Loans