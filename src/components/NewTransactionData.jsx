import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';

export const transactionsArray = []; // Array para almacenar todas las transacciones

function NewTransactionData() {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    accountType: 'Own',
    sourceAccount: '',
    amount: '',
    description: ''
  });
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

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const dateTime = new Date().toISOString();
    const [date, time] = dateTime.split('T');
    const newTransaction = {
      accountType: formData.accountType,
      sourceAccount: formData.sourceAccount,
      amount: formData.amount,
      description: formData.description,
      date,
      time: time.slice(0, 8), // slice to remove milliseconds
      type: 'DEBIT',
      origin: formData.accountType === 'Own' ? 'Internal' : 'External'
    };
    transactionsArray.push(newTransaction); // Agregar la nueva transacción al array general
    
    console.log("Transaction data saved:", newTransaction);
    navigate('/transactions'); // Redirigir a la página de transacciones
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

  return (
    <div className='flex items-center justify-center w-[800px] h-[800px] pb-32 mr-32'>
      <div className='flex items-center justify-center w-[800px] h-[800px] pb-24'>
        <img className='w-[550px] h-[550px]' src="newTransaction.png" alt="newTransaction" />
        <form onSubmit={handleSubmit} className='bg-white flex flex-col items-center p-2 gap-5 w-[550px] h-[550px]'>
          <div>
            <label className='text-xl text-gray-700 mr-4' htmlFor="own">Own
              <input type="radio" name="accountType" id="own" value="Own" checked={formData.accountType === 'Own'} onChange={handleInputChange} />
            </label>
            <label className='text-xl text-gray-700' htmlFor="other">Other
              <input type="radio" name="accountType" id="other" value="Other" checked={formData.accountType === 'Other'} onChange={handleInputChange} />
            </label>
          </div>
          <div>
            <p className='text-gray-700 text-2xl'>Source account</p>
            <select className='w-96 bg-custom-gradient text-white text-2xl' id='sourceAccount' name="sourceAccount" value={formData.sourceAccount} onChange={handleInputChange}>
              {client.accounts.map(account => (
                <option key={account.id} value={account.id}>{account.number}</option>
              ))}
            </select>
          </div>
          <div>
            <p className='text-gray-700 text-2xl'>Amount $</p>
            <input className='w-96 bg-custom-gradient text-white text-2xl' type="number" id='amount' name="amount" value={formData.amount} onChange={handleInputChange} placeholder='$ 2000' />
          </div>
          <div>
            <p className='text-gray-700 text-2xl'>Description</p>
            <textarea className='w-96 h-24 bg-custom-gradient text-white text-2xl' name="description" id="description" value={formData.description} onChange={handleInputChange} cols="10" rows="100"></textarea>
          </div>
          <button type="submit" className='p-2 bg-blue-500 text-white rounded'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default NewTransactionData;