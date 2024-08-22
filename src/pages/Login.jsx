import React from 'react'
import LoginData from '../components/LoginData'

function Login() {
  return (
    <div className='flex flex-col justify-center items-center'>
    <h2 className='text-gray-700 text-3xl font-bold mr-[10%] sm:text-5xl'>Login</h2>
    <LoginData></LoginData>
  </div>
  )
}

export default Login