import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/style.css';
export const registerArray = [];

function RegisterData() {
    const [client, setClient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
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

    function generateAccountNumber() {
        const prefix = "VIN";
        const randomNumber = Math.floor(100 + Math.random() * 900); // Genera un número aleatorio de 3 dígitos
        return `${prefix}${randomNumber}`;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newAccount = {
            name: formData.name,
            lastName: formData.lastName,
            password: formData.password,
            accountNumber: generateAccountNumber(), // Generar el número de cuenta
        };

        // Agregar la nueva cuenta al array registerArray
        registerArray.push(newAccount);

        console.log("Account created:", newAccount);
        navigate('/Accounts'); // Redirigir a la página de cuentas
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <div className='backgroundNewCard flex items-center justify-center w-[800px] h-[850px] pb-40 mr-32'>
                <img className='w-[550px] h-[550px]' src="login.png" alt="register" />
                <form onSubmit={handleSubmit} className='bg-white flex flex-col items-center p-2 gap-5 w-[550px] h-[550px]'>
                    <img className='w-20 h-20' src="banking-icon.svg" alt="banking-icon" />
                    <div>
                        <div>
                            <p className='text-gray-700 text-2xl'>Name</p>
                            <label htmlFor="name">
                                <input
                                    className='w-96 bg-custom-gradient text-white text-2xl'
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>
                        <div>
                            <p className='text-gray-700 text-2xl'>LastName</p>
                            <label htmlFor="lastName">
                                <input
                                    className='w-96 bg-custom-gradient text-white text-2xl'
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>
                        <div>
                            <p className='text-gray-700 text-2xl'>Email</p>
                            <label htmlFor="email">
                                <input
                                    className='w-96 bg-custom-gradient text-white text-2xl'
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password">
                                <p className='text-gray-700 text-2xl'>Password</p>
                                <input
                                    className='w-96 bg-custom-gradient text-white text-2xl'
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
                    <div className='flex flex-col items-center gap-1'>
                        <p className='text-gray-700 text-2xl'>O</p>
                        <Link className='text-2xl' to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterData;