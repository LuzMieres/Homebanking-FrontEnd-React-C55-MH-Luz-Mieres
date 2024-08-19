import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Data({to}) {
    const [clients, setClients] = useState([]);
    

    function obtenerClients() {
        axios.get('http://localhost:8080/api/clients/')
            .then(response => {
                const clientData = response.data;
                console.log(clientData);
                setClients(clientData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(() => {
        obtenerClients();
    }, []);

    return (
        <div>
            {clients.length > 0 && (
                <p className='text-3xl font-bold'>Welcome, {clients[0].firstName}</p>
            )} 

        </div>
    );
}

export default Data;