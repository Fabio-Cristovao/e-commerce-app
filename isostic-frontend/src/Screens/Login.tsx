import React, { ChangeEvent, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth/AuthContext';
import LoginImg from '../img/login.jpg'
export default function Login() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);

            if (isLogged) {
                console.log("is logged");
                navigate('/contacts');
            } else {
                alert("an error ocurred");
            }
        }
    }

    return (

        <div>
            <div className="relative w-full h-screen bg-zinc-900/60">
                <img className="absolute w-full h-full object-cover mix-blend-overlay" src={LoginImg} alt="" />
                <div className="flex justify-center items-center h-full">
                    <form className="max-w-[400px] h-full mx-auto bg-slate-50 p-8 px-8 rounded-lg" action="">
                        <h2 className="text-4xl dark:text-white font-bold text-center capitalize">signin</h2>
                        <div>
                            <input
                                className="rounded-lg bg-gray -700 mt-2 p-2 focus :border-blue-500 focus:bg-gray-800 focus:outline-none "
                                type="text"
                                value={email}
                                placeholder="Insert your e-mail address"
                                onChange={handleEmailInput}
                            />
                        </div>
                        <div>
                            <input
                                className="rounded-lg bg-gray -700 mt-2 p-2 focus :border-blue-500 focus:bg-gray-800 focus:outline-none "
                                type="password"
                                value={password}
                                placeholder="Insert your password"
                                onChange={handlePasswordInput}
                            />
                        </div>
                        <button onClick={handleLogin}>
                            Log in
                        </button>
                        <p>Not a member yet? Signup</p>
                    </form>
                </div>
            </div>
        </div>



    )
}


