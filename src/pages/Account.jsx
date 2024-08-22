import React from 'react'
import AccountData from '../components/AccountData'
import '../styles/style.css'
function Account() {
  return (
    <div className='main min-h-screen w-[100%] flex flex-col items-center'>
      <div className='flex flex-wrap justify-center w-full mt-10'>
        <AccountData></AccountData>
      </div>
    </div>
  )
}

export default Account