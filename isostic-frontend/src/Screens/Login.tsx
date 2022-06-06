import React, { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth/AuthContext';

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
            <h1>
                Login Page
            </h1>
            <input
                type="text"
                value={email}
                placeholder="Insert your e-mail address"
                onChange={handleEmailInput}
            />

            <input
                type="password"
                value={password}
                placeholder="Insert your password"
                onChange={handlePasswordInput}
            />

            <button onClick={handleLogin}>
                Log in
            </button>
        </div>
    )
}


