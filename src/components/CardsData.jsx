import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/style.css';

function CardsData() {
  const [client, setClient] = useState(null);
  const [flipped, setFlipped] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.client) {
      setClient(location.state.client);
    } else {
      obtenerClient();
    }
  }, [location.state]);

  function obtenerClient() {
    axios.get("http://localhost:8080/api/clients/1")
      .then(response => {
        setClient(response.data);
      })
      .catch(error => {
        console.error("There was a problem with the request:", error);
      });
  }

  const handleFlip = (cardId) => {
    setFlipped(prevState => ({
      ...prevState,
      [cardId]: !prevState[cardId]
    }));
  };

  const formatDate = (date) => {
    if (date.includes('/')) {
      const [month, year] = date.split('/');
      return `${month}/${year}`;
    } else if (date.includes('-')) {
      const [year, month] = date.split('-');
      return `${month}/${year.slice(-2)}`;
    }
    return date;
  };

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full flex-wrap justify-center items-center gap-2">
      <div key={client.id} className="flex flex-wrap justify-around items-center w-full gap-2 h-[70vh] mb-[20%]">
        <button onClick={() => navigate(-1)} className="p-2 bg-blue-500 text-white rounded w-12 h-12 md:w-12 md:h-12 flex items-center justify-center mr-20 mt-44">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="RGB(255 255 255)">
            <path d="m313-440 196 196q12 12 11.5 28T508-188q-12 11-28 11.5T452-188L188-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l264-264q11-11 27.5-11t28.5 11q12 12 12 28.5T508-715L313-520h447q17 0 28.5 11.5T800-480q0 17-11.5 28.5T760-440H313Z" />
          </svg>
        </button>
        {client.cards.map(card => (
          <div className={`card-container pb-[8%] ${flipped[card.id] ? 'flipped' : ''}`} key={card.id} onClick={() => handleFlip(card.id)}>
            <div className="card">
              <div className="card-front" style={{ backgroundImage: `url(${card.color === 'GOLD' ? 'CreditCardGoldFrente' : card.color === 'SILVER' ? 'CreditCardSilverFrente' : 'CreditCardTitaniumFrente'})` }}>
                <div className={`backgroundCard${card.color === "GOLD" ? '1' : card.color === "TITANIUM" ? '2' : '3'} relative flex flex-col justify-end pb-12 items-center gap-2 text-white`}>
                  {card.color === "TITANIUM" && (
                    <p className="text-5 md:text-3xl font-bold absolute left-[30px] top-[20px]">{card.type}</p>
                  )}
                  <div className={`content flex flex-col justify-between items-center ${card.color === "GOLD" ? 'h-20 pt-6' : 'h-24 pt-14'} `}>
                    <p className={`text-xl md:text-3xl font-bold ${card.color === 'SILVER' ? 'text-gray-700' : ''}`}>{card.number}</p>
                    <p className={`text-lg md:text-2xl font-bold ${card.color === 'SILVER' ? 'text-gray-700' : ''}`}>{card.cardholder}</p>
                    <p className={`text-md md:text-xl font-bold flex gap-2 ${card.color === 'SILVER' ? 'text-gray-700' : ''}`}><span className='text-xs'>FROM</span> {formatDate(card.fromDate)} <span className='text-xs'>THRU</span> {formatDate(card.thruDate)}</p>
                  </div>
                </div>
              </div>
              <div className="card-back" style={{ backgroundImage: `url(${card.color === 'GOLD' ? 'CreditCardGoldDorso' : card.color === 'SILVER' ? 'CreditCardSilverDorso' : 'CreditCardTitaniumDorso'})` }}>
                <div className={`backgroundCardDorso${card.color === "GOLD" ? '1' : card.color === "TITANIUM" ? '2' : '3'} relative flex flex-col justify-end pb-12 items-center gap-5`}>
                  <p className={`cvv text-black text-md md:text-xl font-bold absolute ${card.color === "GOLD" ? 'top-36 right-4' : card.color === "SILVER" ? 'top-[90px] right-8 pb-8' : 'top-[120px] right-8 pb-8'}`}>
                    <span className='text-xl'>CVV </span> {card.cvv}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}

export default CardsData;