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
        console.log('writting')
        setPassword(event.target.value)
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);

            if (isLogged) {
                console.log("is logged");
                navigate('/');
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
                    <form className="max-w-[400px] h-full mx-auto p-8 px-8 rounded-lg flex flex-col items-center justify-center" action="">
                        <h2 className="text-4xl font-bold text-center text-slate-50 capitalize py-4">signin</h2>
                        <div className='flex flex-col mb-4 relative'>
                            <input
                                className="rounded-lg bg-slate-50 mt-2 p-2 focus:outline-none"
                                type="text"
                                placeholder="Insert your e-mail address"
                                onChange={handleEmailInput}
                            />
                        </div>
                        <div className='flex flex-col mb-4 relative'>
                            <input
                                className="rounded-lg mt-2 p-2  focus:outline-none "
                                type="password"
                                placeholder="Insert your password"
                                onChange={handlePasswordInput}
                            />
                        </div>
                        <button className='relative bg-sky-900 text-slate-50 rounded-lg py-2 w-48 ' onClick={handleLogin}>
                            Log in
                        </button>
                        <p className='relative text-slate-50 mt-2'>Not a member yet? Signup</p>
                    </form>
                </div>
            </div>
        </div>



    )
}


