import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AccountsData() {
    const [accounts, setAccounts] = useState([]);

    function obtenerAccounts() {
        axios.get(`http://localhost:8080/api/accounts/`)
            .then(response => {
                const accountData = response.data;
                console.log(accountData);
                setAccounts(accountData);
            })
            .catch(error => {
                console.error('Error fetching accounts:', error);
            });
    }
    useEffect(() => {
        obtenerAccounts();
    }, []);

    return (
        <div className='flex flex-wrap justify-center gap-5'>
            {accounts.length > 0 && (
                <div className='flex flex-col pl-4 justify-around items-center text-xl font-bold pt-2 border border-white bg-gradient-to-r from-[#e08b1c] to-[#e96c05] w-[400px] h-[250px] rounded-2xl'>
                    <p>Account Number: {accounts[0].number}</p>
                    <div className='flex w-full flex-wrap justify-center'>
                        <p className='w-full pl-4 text-xl font-bold'>Balance: </p>
                        <p className='text-3xl'> ${accounts[0].balance}</p>
                    </div>
                    <p>Creation date: {accounts[0].creationDate}</p>
                    <Link to='/transactions'><button className='bg-gradient-to-r from-[#e08b1c] to-[#e96c05] text-white border border-white'>Transactions</button></Link>
                </div>

            )}
            {accounts.length > 0 && (
                <div className='flex flex-col pl-4 justify-around items-center text-xl font-bold pt-2 border border-white bg-gradient-to-r from-[#e08b1c] to-[#e96c05] w-[400px] h-[250px] rounded-2xl'>
                    <p>Account Number: {accounts[1].number}</p>
                    <div className='flex w-full flex-wrap justify-center'>
                        <p className='w-full pl-4 text-xl font-bold'>Balance: </p>
                        <p className='text-3xl'> ${accounts[1].balance}</p>
                    </div>
                    <p>Creation date: {accounts[1].creationDate}</p>
                    <Link to='/transactions'><button className='bg-gradient-to-r from-[#e08b1c] to-[#e96c05] text-white border border-white'>Transactions</button></Link>
                </div>
            )}
        </div>
    )
}

export default AccountsData