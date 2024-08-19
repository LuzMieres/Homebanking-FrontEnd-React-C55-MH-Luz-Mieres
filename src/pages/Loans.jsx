import React from 'react'
import Data from '../components/data'
import LoansData from '../components/LoansData'

function Loans() {
  return (
    <div className='min-h-screen w-[83%] flex flex-col items-center'>
      <h2 className='text-3xl'>Yours Loans</h2>
      <LoansData></LoansData>
    </div>
  )
}

export default Loans