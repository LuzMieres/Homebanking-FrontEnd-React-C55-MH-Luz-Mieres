import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function LoginData() {
const navigate = useNavigate();

function handleSubmit(event) {
    event.preventDefault();

    navigate('/');
}

    return (
        <div>
            <div className='backgroundNewCard flex items-center justify-center w-[800px] h-[800px] pb-28 mr-32'>
                <img className='w-[550px] h-[550px]' src="login.png" alt="register" />
                <form onSubmit={handleSubmit} className='bg-white flex flex-col items-center p-2 gap-14 w-[550px] h-[550px]'>
                    <img className='w-20 h-20' src="banking-icon.svg" alt="banking-icon" />
                    <div>
                        <div>
                            <p className='text-gray-700 text-2xl'>Email</p>
                            <label htmlFor="email">
                                <input
                                    className='w-96 bg-custom-gradient text-white text-2xl'
                                    type="email"
                                    name="email"
                                    id="email"
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
                                />
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
                    <div className='flex flex-col items-center gap-1'>
                        <p className='text-gray-700 text-2xl'>O</p>
                        <Link className='text-2xl' to="/register">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginData