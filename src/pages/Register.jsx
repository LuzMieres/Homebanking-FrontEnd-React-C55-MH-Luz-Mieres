import React from 'react'
import RegisterData from '../components/RegisterData'

function Register() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <h2 className='text-gray-700 text-3xl font-bold mr-[10%] sm:text-5xl'>Register</h2>
    <RegisterData></RegisterData>
  </div>
  )
}

export default Register