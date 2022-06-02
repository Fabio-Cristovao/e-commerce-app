import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h1>
                Login Page
            </h1>
            <input type="text" value={email} placeholder="Insert your e-mail address" />
            <input type="password" value={password} placeholder="Insert your password" />
            <button onClick={handleLogin}>
                Log in
            </button>
        </div>
    )
}
