import React from 'react'
import NewTransactionData from '../components/NewTransactionData'

function NewTransaction() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-gray-700 text-3xl font-bold mr-[10%] sm:text-5xl'>Make a Transaction</h2>
      <NewTransactionData></NewTransactionData>
    </div>
  )
}

export default NewTransaction