import React, { useState } from 'react';
import Card from './Card.jsx';
import Registry from './Registry.jsx';
import './Login.css';

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
            <div className="login-input-div">
                <h2>Login</h2>
                <div className='login-logo-div'>
                    <img src='./src/assets/logoBackgroundTransparent.png'></img>
                </div>

                <br></br>
                <div >
                    <form className="login-form-group" onSubmit={handleLogin}>
                        <div className="login-form-group-item">
                            <label htmlFor="username">User Name:</label> 
                            <br></br>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-form-group-item">
                            <label htmlFor="password">Password:</label> 
                            <br></br>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            {error && <p className="error-message">{error}</p>}
                        </div>

                        
                        <div className='login-button-div login-button-summit-div'>
                            <button type="submit" className="login-button">Login</button>
                        </div>
                    </form>

                    <br></br>
                    <div className='login-button-div'>
                        <p>Please sign up if you do not have an account.</p>
                        <button onClick={() => setComponent(<Registry setComponent={setComponent} />)} className="registry-button">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <img src='./src/assets/loginUtensilsPicture.jpeg'></img>   
            </div>
        </div>
    );
}

export default Login;