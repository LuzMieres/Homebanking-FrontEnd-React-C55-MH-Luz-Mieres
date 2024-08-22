import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';
import { transactionsArray } from './NewTransactionData'; // Importar el array de transacciones

function TransactionsData() {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function obtenerClient() {
    axios.get("http://localhost:8080/api/clients/1")
      .then(response => {
        const clientData = response.data;
        console.log(clientData);

        setClient(clientData);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was a problem with the request:", error);
        setError(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    obtenerClient();
  }, []);

  function formatAmountToARS(amount) {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
  }

  function formatDateTime(dateTime) {
    const [date, time] = dateTime.split('T');
    return { date, time: time.slice(0, 8) }; // slice to remove milliseconds if present
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!client || !client.accounts) {
    return <div>No accounts found.</div>;
  }

  const transactions = [
    ...client.accounts.flatMap(account => account.transactions.map(transaction => {
      const { date, time } = formatDateTime(transaction.date);
      return { ...transaction, date, time };
    })),
    ...transactionsArray // Agregar las transacciones del array
  ];

  const transactionKeys = transactions.length > 0 ? Object.keys(transactions[0]).filter(key => key !== 'accountid' && key !== 'id' && key !== 'date' && key !== 'time') : [];

  return (
    <div className="flex w-full flex-wrap justify-center items-center gap-2 mr-[20%]">
      <div className="flex justify-around items-center w-full gap-2">
        <button onClick={() => navigate(-1)} className="p-2 bg-blue-500 text-white rounded w-12 h-12 md:w-12 md:h-12 flex items-center justify-center mr-20">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="RGB(255 255 255)"><path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" /></svg>
        </button>
        <table className=' w-full text-white text-center text-xs sm:text-xl border border-white bg-custom-gradient'>
          <thead>
            <tr className='border border-white'>
              <th className='border border-white'>DATE</th>
              <th className='border border-white'>HOUR</th>
              {transactionKeys.map(key => (
                <th 
                  className={`border border-white h-[20px] ${key === 'amount' ? 'text-end w-[100px]' : ''} ${key === 'description' ? 'text-start w-[190px]' : ''} ${key === 'date' ? 'w-[150px]' : ''} ${key === 'hour' ? 'w-[100px]' : ''}`} 
                  key={key}
                >
                  {key.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td className='border border-white h-[30px]'>{transaction.date}</td>
                <td className='border border-white h-[30px]'>{transaction.time}</td>
                {transactionKeys.map(key => (
                  <td className={`border border-white h-[30px] ${key === 'type' ? (transaction[key] === 'DEBIT' ? 'text-red-800 w-[120px]' : 'text-green-800 w-[120px]') : ''} ${key === 'amount' ? 'text-end w-[120px]' : ''} ${key === 'description' ? 'text-start w-[190px]' : ''}  ${key === 'date' ? 'w-[150px]' : ''} ${key === 'hour' ? 'w-[100px]' : ''}`}
                    key={key}>
                    {key === 'amount' ? formatAmountToARS(transaction[key]) : transaction[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionsData;