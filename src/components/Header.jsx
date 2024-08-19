import React from 'react'

function Header(props) {
  return (
    <header className='flex flex-col items-center justify-center h-screen w-[17%]'>
      {props.children}
    </header>
  )
}

export default Header