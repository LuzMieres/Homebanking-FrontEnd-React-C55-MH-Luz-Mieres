import React from 'react';
import Carrousel from '../components/Carrousel';
import '../styles/style.css';

function Home() {
  return (
    <>
      <main className='main h-[60vh] w-full sm:w-[100%] flex flex-col items-center'>
        <Carrousel />
      </main>
    </>
  );
}

export default Home;