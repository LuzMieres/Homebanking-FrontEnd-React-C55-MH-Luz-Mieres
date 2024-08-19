import React from 'react'
import Carrousel from '../components/Carrousel'


function Home() {
  return (
    <>
      <main className='min-h-screen w-[83%] flex flex-col items-center'>
        <h1 className='text-white text-3xl font-bold text-center'>Welcome to new bank MindHub</h1>
        <Carrousel></Carrousel>
      </main>
    </>
  )
}

export default Home