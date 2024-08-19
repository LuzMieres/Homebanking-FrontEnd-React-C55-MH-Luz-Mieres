import React from 'react';
import Data from '../components/data';
import AccountsData from '../components/AccountsData';

function Accounts() {

  return (
    <>
      <div className='min-h-screen w-[80%] flex flex-col items-center h-[80vh]'>
        <Data></Data>
        <h2 className='text-3xl'>Yours Accounts</h2>
        <div className='flex flex-wrap'>
          <AccountsData></AccountsData>
        </div>
      </div>
    </>
  );
}

export default Accounts;