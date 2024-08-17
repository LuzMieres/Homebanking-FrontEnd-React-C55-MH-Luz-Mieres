import React from 'react'
import Data from '../components/data'
import LoansData from '../components/LoansData'

function Loans() {
  return (
    <div className='min-h-screen'>Loans
      <Data></Data>
      <LoansData></LoansData>
    </div>
  )
}

export default Loans