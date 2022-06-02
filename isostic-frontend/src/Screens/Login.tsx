import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth/AuthContext';

export default function Login() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleLogin = () => {
        console.log(email, password)
        if (email && password) {
            const isLogged = auth.signin(email, password);
            console.log(isLogged)
            if (isLogged) {
                navigate("/")
            } else {
                alert("error")
            }
        }

        console.log(email, password);
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
                onChange={e => setEmail(e.target.value)}
            />

            <input
                type="password"
                value={password}
                placeholder="Insert your password"
                onChange={e => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>
                Log in
            </button>
        </div>
    )
}
