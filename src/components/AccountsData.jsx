import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/style.css';
import { registerArray } from './RegisterData'; // Importar el array registerArray

function AccountsData() {
  const [client, setClient] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();

  function obtenerClient() {
    axios.get("http://localhost:8080/api/clients/1")
      .then(response => {
        const clientData = response.data;
        console.log(clientData);

        setClient(clientData);
        setAccounts(clientData.accounts || []);
      })
      .catch(error => {
        console.error("There was a problem with the request:", error);
      });
  }

  useEffect(() => {
    obtenerClient();
  }, []);

  useEffect(() => {
    setAccounts(prevAccounts => [...prevAccounts, ...registerArray]);
  }, [registerArray]);

  function formatAmountToARS(amount) {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
  }

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full justify-center items-center gap-2">
      <div key={client.id} className="flex flex-wrap justify-center items-center w-full gap-2">
        <button onClick={() => navigate(-1)} className="p-2 bg-blue-500 text-white rounded w-12 h-12 md:w-12 md:h-12 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="RGB(255 255 255)"><path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" /></svg>
        </button>
        {accounts.map((account, index) => (
          <Link
            to={`/Account/${account.id || index}`}
            key={account.id || index}
          >
            <div className='hover:text-white hover:border-white hover:border-5 flex flex-col w-[300px] h-[150px] md:w-[400px] md:h-[250px] pl-4 justify-center gap-5 items-center text-xl font-bold text-white border border-white bg-custom-gradient rounded-2xl'>
              <p>Account Number: {account.number || account.accountNumber}</p>
              <div className='flex w-full flex-wrap justify-center text-2xl md:2xl font-bold'>
                <p className='w-full pl-4 text-2xl md:text-2xl font-bold'>Balance: </p>
                <p className='text-3xl md:text-3xl '> {formatAmountToARS(account.balance || 0)}</p>
              </div>
              <p className='text-2xl md:text-2xl font-bold'>Creation Date: {account.creationDate || new Date().toLocaleDateString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AccountsData;