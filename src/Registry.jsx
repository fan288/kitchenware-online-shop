import React, { useState } from 'react';
import Login from './Login.jsx';
import './Register.css';

function Registry({ setComponent }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegistry = (e) => {
        e.preventDefault();

        if (username && password) {
            setError(""); 
            alert("Sign-up successful! Please log in."); 
            setComponent(<Login setComponent={setComponent} />);
        } else {
            setError("Please fill in all fields."); 
        }
    };

    return (

        <div className="register-container">
            <div>
                <img src='./src/assets/signUpPicture.webp'></img>   
            </div>
            <div className="register-input-div">
                <h2>Sign Up</h2>
                <div className='register-logo-div'>
                    <img src='./src/assets/logoBackgroundTransparent.png'></img>
                </div>

                <br></br>
                <div >
                    <form className="register-form-group" onSubmit={handleRegistry}>
                        <div className="register-form-group-item">
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
                        <div className="register-form-group-item">
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

                        
                        <div className='register-button-div register-button-summit-div'>
                            {error && <p className="error-message">{error}</p>}
                            <button type="submit" className="registry-button">Sign Up</button>
                        </div>
                    </form>

                    <br></br>
                    <div className='register-button-div'>
                        <p>Please log in if you already have an account.</p>
                        <button onClick={() => setComponent(<Login setComponent={setComponent} />)} className="registry-button">
                            Back to Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
        // <div className="registry-container">
        //     <h2>Sign Up</h2>
        //     <form onSubmit={handleRegistry}>
        //         <div className="form-group">
        //             <label htmlFor="username">Username:</label>
        //             <input
        //                 type="text"
        //                 id="username"
        //                 value={username}
        //                 onChange={(e) => setUsername(e.target.value)}
        //                 required
        //             />
        //         </div>
        //         <div className="form-group">
        //             <label htmlFor="password">Password:</label>
        //             <input
        //                 type="password"
        //                 id="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 required
        //             />
        //         </div>
        //         {error && <p className="error-message">{error}</p>}
        //         <button type="submit" className="registry-button">Sign Up</button>
        //     </form>
        //     <button
        //         onClick={() => setComponent(<Login setComponent={setComponent} />)}
        //         className="back-to-register-button"
        //     >
        //         Back to Login
        //     </button>
        // </div>
    );
}

export default Registry;