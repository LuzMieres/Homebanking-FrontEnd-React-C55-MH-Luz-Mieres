import React from 'react'

function Header(props) {
  return (
    <header className='flex flex-col items-start h-screen'>
      <img src="" alt="" />
      {props.children}
    </header>
  )
}

export default Header