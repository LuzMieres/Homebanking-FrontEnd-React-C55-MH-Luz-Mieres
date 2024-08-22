import React from 'react';
import Data from '../components/data';
import AccountsData from '../components/AccountsData';
import '../styles/style.css'
function Accounts() {

  return (
    <>
      <div className='main min-h-screen w-[100%] flex flex-col items-center'>
        <Data></Data>
        <h2 className=' text-gray-700 text-3xl font-bold mr-[10%] sm:text-5xl'>Yours Accounts</h2>
        <div className='flex flex-wrap justify-center w-full'>
          <AccountsData></AccountsData>
          
        </div>
      </div>
    </>
  );
}

export default Accounts;