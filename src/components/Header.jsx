import React from 'react'
import '../styles/style.css'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <>
      <header className='header w-full text-white text-2xl flex justify-center gap-20 items-center bg-custom-gradient px-4'>
        <Link to='/'><img className='w-32 h-32 rounded-full border-white border-2 cursor-pointer hover:scale-110 transition duration-500 ease-in-out hover:shadow hover:shadow-blue-900 hover:shadow-2xl' src="../src/assets/images/bank-icon.svg" alt="bank icon" /></Link>
        <button id="menu" onClick={props.toggleNav} className='bg-custom-gradient'>
          {props.showNav ? "x" : "≡"} 
        </button>
        <h1 className='text-3xl sm:text-5xl font-bold'>MindHub Bank</h1>
      </header>
      {props.children}
    </>
  )
}

export default Header