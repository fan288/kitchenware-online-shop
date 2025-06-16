import Button from './Button.jsx';
import Cart from './Cart.jsx';
import Card from './Card.jsx';
import Login from './Login.jsx';
import OrderRecord from './OrderRecord.jsx';
import AboutUs from './AboutUs.jsx';    
import ContactUs from './ContactUs.jsx';
import FAQs from './FAQs.jsx';

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

                        <h1>Cook Heaven</h1>        

                    </div>

                    <div className="nav-container-align-right">
                    <   Button 
                            buttonName={
                                <span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="30" 
                                        height="30" 
                                        class="bi bi-question-circle-fill" 
                                        viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                </svg>
                                    FAQs
                                </span>
                            }
                            setComponent={setComponent} 
                            newComponent={<FAQs />} 
                        />
                        <Button 
                            buttonName={
                                <span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="30" 
                                        height="30" 
                                        class="bi bi-info-circle-fill" 
                                        viewBox="0 0 16 16">
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                                    </svg>
                                    About Us
                                </span>
                            }
                            setComponent={setComponent} 
                            newComponent={<AboutUs />} 
                        />
                        <Button 
                            buttonName={
                                <span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="30" 
                                        height="30" 
                                        class="bi bi-envelope-at-fill" 
                                        viewBox="0 0 16 16">
                                        <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                                        <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                                    </svg>
                                    Contact Us
                                </span>
                            }
                            setComponent={setComponent} 
                            newComponent={<ContactUs />} 
                        />
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
            <hr></hr>
        </header>
    )
}

export default Header;