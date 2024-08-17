import React from 'react';
import DataClients from '../components/data';
import AccountsData from '../components/AccountsData';

function Accounts() {

  return (
    <div className='flex flex-col items-center gap-6 mt-12 min-h-screen'>
      <div >
        <DataClients></DataClients>
      </div>
      <div>
        <AccountsData></AccountsData>
      </div>
    </div>
  );
}

export default Accounts;