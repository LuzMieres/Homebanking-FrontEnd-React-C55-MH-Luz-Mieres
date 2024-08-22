import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/style.css';

function AccountData() {
  const { accountId } = useParams();
  const navigate = useNavigate();
  const [account, setAccount] = useState(null);
  const [additionalTransactions, setAdditionalTransactions] = useState([]);

  function obtenerAccount() {
    axios.get(`http://localhost:8080/api/accounts/${accountId}`)
      .then(response => {
        const accountData = response.data;
        console.log(accountData);

        setAccount(accountData);
      })
      .catch(error => {
        console.error("There was a problem with the request:", error);
      });
  }

  function obtenerAdditionalTransactions() {
    axios.get("http://localhost:8080/api/clients/1/accounts/1/transactions")
      .then(response => {
        const transactionsData = response.data;
        console.log(transactionsData);

        setAdditionalTransactions(transactionsData);
      })
      .catch(error => {
        console.error("There was a problem with the request:", error);
      });
  }

  useEffect(() => {
    obtenerAccount();
    obtenerAdditionalTransactions();
  }, [accountId]);

  function formatAmountToARS(amount) {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
  }

  function formatDateTime(dateTime) {
    const [date, time] = dateTime.split('T');
    return { date, time: time.slice(0, 8) }; // slice to remove milliseconds if present
  }

  if (!account) {
    return <div>Loading...</div>;
  }

  const transactions = [
    ...account.transactions.map(transaction => {
      const { date, time } = formatDateTime(transaction.date);
      return { ...transaction, date, time };
    }),
    ...additionalTransactions.map(transaction => {
      const { date, time } = formatDateTime(transaction.date);
      return { ...transaction, date, time };
    })
  ];

  return (
    <div className="flex flex-wrap m-5 justify-center">
      <div key={account.id} className="flex justify-around items-center flex-wrap w-full gap-2">
        <button onClick={() => navigate(-1)} className="mb-5 p-2 bg-blue-500 text-white rounded h-12 w-12">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="RGB(255 255 255)"><path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" /></svg>
        </button>
        <table className='text-white text-center text-sm sm:text-2xl border border-white bg-custom-gradient'>
          <thead>
            <tr className='border border-white'>
              <th className='border border-white w-[100px] sm:w-[150px] h-[20px]'>DATE</th>
              <th className='border border-white w-[80px] sm:w-[120px] h-[20px]'>HOUR</th>
              {Object.keys(transactions[0]).filter(key => key !== 'accountid' && key !== 'id' && key !== 'date' && key !== 'time').map(key => (
                <th
                  className={`border border-white h-[20px] ${key === 'amount' ? 'text-end w-[100px] sm:w-[130px]' : ''} ${key === 'description' ? 'text-start w-[200px] sm:w-[300px]' : ''}`}
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
                {Object.keys(transaction).filter(key => key !== 'accountid' && key !== 'id' && key !== 'date' && key !== 'time').map(key => (
                  <td className={`border border-white h-[30px] ${key === 'type' ? (transaction[key] === 'DEBIT' ? 'text-red-800 w-[80px] sm:w-[120px]' : 'text-green-800 w-[80px] sm:w-[120px]') : ''} ${key === 'amount' ? 'text-end w-[80px] sm:w-[120px]' : ''} ${key === 'description' ? 'text-start w-[200px] sm:w-[300px]' : ''}`}
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

export default AccountData;