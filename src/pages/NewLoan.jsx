import React from 'react'
import NewLoanData from '../components/NewLoanData'

function NewLoan() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-gray-700 text-3xl font-bold mr-[10%] sm:text-5xl'>Aply for a Loan</h2>
      <NewLoanData></NewLoanData>
    </div>
  )
}

export default NewLoan