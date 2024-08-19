import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'



function MainLayout() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex h-screen">
        <Header>
          <Nav />
        </Header>

        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout