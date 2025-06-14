import React, { useState } from 'react';
import Login from './Login.jsx';

function Registry({ setComponent }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegistry = (e) => {
        e.preventDefault();

        const members = JSON.parse(localStorage.getItem('members')) || [];

        const existingMember = members.find((m) => m.username === username);
        if (existingMember) {
            setError('Username already exists. Please choose a different username.');
            setSuccess('');
            return;
        }

        const newMember = { username, password };
        members.push(newMember);
        localStorage.setItem('members', JSON.stringify(members));

        setError('');
        setSuccess('Registration successful! You can now log in.');
        setUsername('');
        setPassword('');
    };

    return (
        <div className="registry-container">
            <h2>Register</h2>
            <form onSubmit={handleRegistry}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
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
                {success && <p className="success-message">{success}</p>}
                <button type="submit" className="registry-button">Register</button>
            </form>
            <button onClick={() => setComponent(<Login setComponent={setComponent} />)} className="back-to-login-button">
                Back to Login
            </button>
        </div>
    );
}

export default Registry;