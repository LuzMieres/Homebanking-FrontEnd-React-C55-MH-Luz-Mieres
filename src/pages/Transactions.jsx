import React from 'react'
import TransactionsData from '../components/TransactionsData'
import '../styles/style.css'

function Transactions() {
  return (
    <div className='main min-h-screen w-full flex flex-col items-center mt-5'>
      <h2 className='text-3xl text-gray-700 font-bold mr-[20%] text-center w-full'>Your Transactions</h2>
      <div className='flex flex-wrap justify-center w-full mt-10'>
        <TransactionsData></TransactionsData>
      </div>
    </div>
  )
}

export default Transactions