import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/style.css';

function NewCardData() {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    cardType: 'DEBIT',
    cardColor: 'GOLD',
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
      [name]: value
    }));
  }

  function generateCardNumber() {
    return 'xxxx xxxx xxxx xxxx'.replace(/x/g, () => Math.floor(Math.random() * 10));
  }

  function generateCVV() {
    return Math.floor(100 + Math.random() * 900).toString();
  }

  function generateCardDates() {
    const now = new Date();
    const fromDate = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getFullYear()).slice(-2)}`;
    const thruDate = `${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getFullYear() + 5).slice(-2)}`;
    return { fromDate, thruDate };
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { fromDate, thruDate } = generateCardDates();
    const newCard = {
      id: Date.now(), // Generar un ID único
      type: formData.cardType,
      color: formData.cardColor,
      number: generateCardNumber(),
      cardholder: client.name,
      fromDate: fromDate,
      thruDate: thruDate,
      cvv: generateCVV()
    };

    // Guardar la nueva tarjeta en el array de tarjetas del cliente
    const updatedClient = {
      ...client,
      cards: [...client.cards, newCard]
    };

    setClient(updatedClient);

    // Redirigir a la página de CardsData
    navigate('/cards', { state: { client: updatedClient } });
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className='backgroundNewCard flex items-center justify-center w-[800px] h-[800px] pb-32 mr-20'>
        <img className='w-[550px] h-[550px] bg-white' src="newCard.png" alt="newCard" />
        <form onSubmit={handleSubmit} className='bg-white flex flex-col items-center p-10 gap-20 w-[550px] h-[550px]'>
          <div>
            <p className='text-gray-700 text-2xl'>Selected card type</p>
            <select className='w-96 bg-custom-gradient text-white text-2xl' id='cardType' name="cardType" value={formData.cardType} onChange={handleInputChange}>
              <option className='w-96 bg-custom-gradient text-white text-2xl' value="DEBIT">Debit</option>
              <option className='w-96 bg-custom-gradient text-white text-2xl' value="CREDIT">Credit</option>
            </select>
          </div>
          <div>
            <p className='text-gray-700 text-2xl'>Selected card membership (color)</p>
            <select className='w-96 bg-custom-gradient text-white text-2xl' id='cardColor' name="cardColor" value={formData.cardColor} onChange={handleInputChange}>
              <option className='w-96 bg-custom-gradient text-white text-2xl' value="GOLD">Gold</option>
              <option className='w-96 bg-custom-gradient text-white text-2xl' value="SILVER">Silver</option>
              <option className='w-96 bg-custom-gradient text-white text-2xl' value="TITANIUM">Titanium</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Get a Card</button>
        </form>
      </div>
    </div>
  );
}

export default NewCardData;