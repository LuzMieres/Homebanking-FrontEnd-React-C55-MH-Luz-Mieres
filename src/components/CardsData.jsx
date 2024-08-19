import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/style.css';


function CardsData() {
    const [clients, setClients] = useState([]);

    function obtenerClients() {
        axios.get("http://localhost:8080/api/clients/")
            .then(response => {
                const clientData = response.data;
                console.log(clientData);

                setClients(clientData);
            })
            .catch(error => {
                console.error("There was a problem with the request:", error);
            });

    } useEffect(() => {
        obtenerClients();
    }, []);

    return (
        <>
            <div className="flex flex-wrap gap-5 m-10 justify-center">
                {clients.map(client => (
                    <div key={client.id} className="flex justify-around flex-wrap w-full gap-5">
                        {client.cards.map(card => (
                            (card.color === "GOLD") ? (
                                <div className='flex flex-wrap gap-10'>
                                    <div key={card.id} className="backgroundCard1 relative flex flex-col justify-end pb-12 items-center gap-5">
                                        <div className='flex flex-col justify-between items-center h-20'>
                                            <p className="text-3xl font-bold">{card.number}</p>
                                            <p className="text-2xl font-bold">{card.cardholder}</p>
                                            <p className="text-xl font-bold flex gap-2"><span className='text-xs'>FROM</span> {card.fromDate} <span className='text-xs'>THRU</span> {card.thruDate}</p>
                                        </div>
                                    </div>
                                    <div className='backgroundCardDorso1 relative flex flex-col justify-end pb-12 items-center gap-5'>
                                        <p className='text-black text-xl font-bold absolute top-20 right-8 pt-14'><span className='text-xs'>CVV </span> {card.cvv}</p>
                                    </div>
                                </div>

                            ) : (
                                <div className='flex flex-wrap gap-10'>
                                    <div className='backgroundCard2 relative flex flex-col justify-end pb-7 items-center gap-5'>
                                        <p className="text-2xl font-bold absolute top-5 right-8 text-5xl family-serif">{card.type}</p>
                                        <div className='visible flex flex-col justify-between items-center h-20'>
                                            <p className="text-3xl font-bold">{card.number}</p>
                                            <p className="text-3xl font-bold">{card.cardholder}</p>
                                            <p className="text-xl font-bold flex gap-2"><span className='text-xs'>FROM</span> {card.fromDate} <span className='text-xs'>THRU</span> {card.thruDate}</p>
                                        </div>
                                    </div>
                                    <div className='backgroundCardDorso2 relative flex flex-col justify-end pb-12 items-center gap-5'>
                                    <p className='text-black text-xl font-bold absolute bottom-20 pb-6 right-8'><span className='text-xs'>CVV </span> {card.cvv}</p>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}



export default CardsData