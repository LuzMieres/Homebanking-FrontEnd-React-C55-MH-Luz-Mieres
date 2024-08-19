import React from 'react'
import TransactionsData from '../components/TransactionsData'

function Transactions() {
  return (
    <div className='min-h-screen w-[83%] flex flex-col items-center'>
      <h2 className='text-3xl'>Your Transactions</h2>
      <TransactionsData></TransactionsData>
    </div>
  )
}

export default Transactions