import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';

export const loansArray = [];
export const newLoansArray = []; // Nuevo array para almacenar los nuevos préstamos

function NewLoanData() {
  const [client, setClient] = useState(null);

  const [formData, setFormData] = useState({
    number: 'VIN001',
    sourceAccount: '',
    amount: '',
    name: '',
    selectedLoan: null,
    payments: [], // Inicializar como array vacío
    loanType: '',
  });
  const navigate = useNavigate();

  function obtenerClient() {
    axios.get("http://localhost:8080/api/clients/1")
      .then(response => {
        setClient(response.data);
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
      [name]: value,
    }));
  }

  function handleLoanChange(event) {
    const { value } = event.target;
    const selectedLoan = client.loans.find(loan => loan.name === value);
    if (selectedLoan) {
      setFormData(prevState => ({
        ...prevState,
        selectedLoan,
        name: selectedLoan.name, // Actualizar el nombre del préstamo
        payments: selectedLoan.payments || [], // Asegurarse de que payments sea un array
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        selectedLoan: null,
        name: '',
        payments: [],
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newLoan = {
      name: formData.name,
      amount: formData.amount,
      payments: formData.payments,
    };
    loansArray.push(newLoan);
    newLoansArray.push(newLoan);
    console.log("Loan data saved:", newLoan);
    navigate('/loans');
  }

  if (!client || !client.accounts) {
    return <div>No accounts found.</div>;
  }

  return (
    <div className='flex items-center justify-center w-[800px] h-[800px] pb-28 mr-32'>
      <div className='flex items-center justify-center w-[900px] h-[900px] pb-28'>
        <img className='w-[550px] h-[550px]' src="newLoan.png" alt="newLoan" />
        <form onSubmit={handleSubmit} className='bg-white flex flex-col items-center p-2 gap-5 w-[500px] h-[550px]'>
          <div>
            <p className='text-gray-700 text-2xl'>Selected loan</p>
            <select className='w-96 bg-custom-gradient text-white text-2xl' id='number' name="number" value={formData.name} onChange={handleLoanChange}>
              {client.loans.map(loan => (
                <option key={loan.id} value={loan.name}>{loan.name}</option>
              ))}
            </select>
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
            <input className='w-96 bg-custom-gradient text-white text-2xl' type="number" id='amount' name="amount" value={formData.amount} onChange={handleInputChange}  />
          </div>
          <div>
            <p className='text-gray-700 text-2xl'>Payments</p>
            <select className='w-96 bg-custom-gradient text-white text-2xl'
              value={Array.isArray(formData.payments) ? formData.payments.join(',') : ''}
              onChange={handleInputChange}
              name="payments"
            >
              {Array.isArray(formData.payments) && formData.payments.map((payment, index) => (
                <option key={index} value={payment}>{payment}</option>
              ))}
            </select>
          </div>
          <button type="submit" className='p-2 bg-blue-500 text-white rounded'>Get a Loan</button>
        </form>
      </div>
    </div>
  );
}

export default NewLoanData;