import Button from './Button.jsx';
import Cart from './Cart.jsx';
import Card from './Card.jsx';
import Login from './Login.jsx';
import OrderRecord from './OrderRecord.jsx';
import Home from './Home.jsx';

function Header({ setComponent, cart}) {

    return(
        <header>
            <nav>
                <div className="nav-container">
                    <div className="nav-container-align-left">
                        <img src="./src/assets/logoBackgroundTransparent.png" 
                            alt="Homecook Heaven Logo"
                            className='logo'
                        ></img>

                        <div className='header-website-name-container'>
                            <h1>Cook Heaven</h1>  
                        </div>      

                    </div>

                    <div className="nav-container-align-right">
                        <Button 
                            buttonName={
                                <span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="30" 
                                        height="30" 
                                        class="bi bi-house-door-fill" 
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                                    </svg>
                                    Home
                                </span>
                            }
                            setComponent={setComponent} 
                            newComponent={<Home />} 
                        />
                        <Button 
                            buttonName={
                                <span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                            width="30" 
                                            height="30" 
                                            fill="currentColor" 
                                            class="bi bi-fork-knife" 
                                            viewBox="0 0 16 16">
                                        <path d="M13 .5c0-.276-.226-.506-.498-.465-1.703.257-2.94 2.012-3 8.462a.5.5 0 0 0 .498.5c.56.01 1 .13 1 1.003v5.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM4.25 0a.25.25 0 0 1 .25.25v5.122a.128.128 0 0 0 .256.006l.233-5.14A.25.25 0 0 1 5.24 0h.522a.25.25 0 0 1 .25.238l.233 5.14a.128.128 0 0 0 .256-.006V.25A.25.25 0 0 1 6.75 0h.29a.5.5 0 0 1 .498.458l.423 5.07a1.69 1.69 0 0 1-1.059 1.711l-.053.022a.92.92 0 0 0-.58.884L6.47 15a.971.971 0 1 1-1.942 0l.202-6.855a.92.92 0 0 0-.58-.884l-.053-.022a1.69 1.69 0 0 1-1.059-1.712L3.462.458A.5.5 0 0 1 3.96 0z"/>
                                    </svg>
                                    Prodcuts
                                </span>
                            }
                            setComponent={setComponent} 
                            newComponent={<Card />} 
                        />

                        <Button 
                            buttonName={
                                <span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="30"
                                        height="30" 
                                        class="bi bi-cart4" 
                                        viewBox="0 0 16 16"
                                    >
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                                    </svg>
                                    Cart ({cart.length})
                                </span>
                            }
                            setComponent={setComponent} 
                            newComponent={<Cart />} 
                         />

                        <Button 
                            buttonName={
                                <span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="30" 
                                        height="30" 
                                        class="bi bi-card-checklist" 
                                        viewBox="0 0 16 16">
                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                        <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                                    </svg>
                                    Order
                                </span>
                            }
                            setComponent={setComponent} 
                            newComponent={<OrderRecord />} 
                         />
                        <Button 
                            buttonName={
                                <span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="30" 
                                        height="30" 
                                        class="bi bi-person-circle" 
                                        viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                    </svg>
                                    Login
                                </span>
                            }
                            setComponent={setComponent} 
                            newComponent={<Login />} 
                         />

                    </div>
                </div>
            </nav>
            <hr style={{ margin: 0}}></hr>
        </header>
    )
}

export default Header;