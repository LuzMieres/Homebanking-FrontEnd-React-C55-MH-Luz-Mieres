import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/style.css';


function LoansData() {
  const [accounts, setAccounts] = useState([]);

  function obtenerAccounts() {
    axios.get("http://localhost:8080/api/accounts/")
      .then(response => {
        const accountData = response.data;
        console.log(accountData);

        setAccounts(accountData);
      })
      .catch(error => {
        console.error("There was a problem with the request:", error);
      });

  } useEffect(() => {
    obtenerAccounts();
  }, []);
  function formatAmountToARS(amount) {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
  }
  return (
    <>
      <div className="flex flex-wrap gap-5 m-5 justify-center">
        {accounts.map(account => (
          <div key={account.id} className="flex justify-around items-center flex-col w-full gap-5">
            {account.transactions.map(transaction => (
              <table className='border w-[700px] h-[100px] text-center text-3xl'>
                <tr className='border'>
                  {Object.keys(transaction).filter(key => key !== 'accountid' && key !== 'id').map(key => (
                    <th className='border w-[200px]' key={key}>{key.toUpperCase()}</th>
                  ))}
                </tr>
                <tr>
                  {Object.keys(transaction).filter(key => key !== 'accountid' && key !== 'id').map(key => (
                    <td className='border' key={key}>
                      {key === 'amount' ? formatAmountToARS(transaction[key]) : transaction[key]}
                    </td>
                  ))}
                </tr>
              </table>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
export default LoansData