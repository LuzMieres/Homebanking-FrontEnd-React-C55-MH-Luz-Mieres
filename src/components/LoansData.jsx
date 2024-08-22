import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';
import { loansArray } from './NewLoanData'; 

function LoansData() {
  const [client, setClient] = useState(null);
  const navigate = useNavigate();

  function obtenerClient() {
    axios.get("http://localhost:8080/api/clients/1")
      .then(response => {
        setClient(response.data);
      })
      .catch(error => {
        console.error("There was a problem with the request:", error);
      });
  }

  useEffect(() => {
    obtenerClient();
  }, []);

  function formatAmountToARS(amount) {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(amount);
  }

  if (!client) {
    return <div>Loading...</div>;
  }

  // Combinar los préstamos del cliente con los préstamos generados
  const loans = [...client.loans, ...loansArray];

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mr-[20%]">
      <div key={client.id} className="flex flex-wrap justify-center items-center w-full gap-2">
      <button onClick={() => navigate(-1)} className="w-12 h-12 mb-5 p-2 bg-blue-500 text-white rounded">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="RGB(255 255 255)"><path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" /></svg>
      </button>
        <table className='border w-full md:w-[700px] text-center text-sm md:text-lg lg:text-xl bg-custom-gradient'>
          <thead>
            <tr className='border'>
              {Object.keys(loans[0]).filter(key => key !== 'loanid' && key !== 'id').map(key => (
                 <th 
                 className={`border border-white h-[20px] ${key === 'amount' ? 'text-end w-[200px]' : ''}`} 
                 key={key}
               >
                 {key.toUpperCase()}
               </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, index) => (
              <tr key={index}>
                {Object.keys(loan).filter(key => key !== 'loanid' && key !== 'id').map(key => (
                   <td className={`border border-white h-[30px] ${key === 'amount' ? 'text-end w-[200px]' : ''}`}
                   key={key}>
                   {key === 'amount' ? formatAmountToARS(loan[key]) : loan[key]}
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

export default LoansData;