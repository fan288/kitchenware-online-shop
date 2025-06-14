import React, { useState } from 'react';
import Card from './Card.jsx';
import Registry from './Registry.jsx';

function Login({ setComponent }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        const members = JSON.parse(localStorage.getItem('members')) || [];

        const member = members.find(
            (m) => m.username === username && m.password === password
        );
        if (member) {
            setError('');
            alert(`Login successful. Welcome back, ${username}!`);
            setComponent(<Card />);
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">User Name:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-button">Login</button>
            </form>
            <button onClick={() => setComponent(<Registry setComponent={setComponent} />)} className="registry-button">
                Register
            </button>
        </div>
    );
}

export default Login;