import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'



function MainLayout() {
    return (
        <div className='flex flex-col items-center justify-between w-full'>
            <div className='flex'>
                <Header>
                    <Nav />
                </Header>
                

                <Outlet />
            </div>
            <Footer>

            </Footer>
        </div>

    )
}

export default MainLayout