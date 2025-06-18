import './index.css';
import { useState } from 'react';
import Kichenwares from './Kitchenwares';

function Card({ addToCart }) {
    const [amounts, setAmounts] = useState(
        Kichenwares.reduce((acc, item) => {
            acc[item.id] = 1;
            return acc;
        }, {})
    );

    const handleIncrement = (id) => {
        setAmounts((prevAmounts) => ({
            ...prevAmounts,
            [id]: prevAmounts[id] + 1,
        }));
    };

    const handleDecrement = (id) => {
        setAmounts((prevAmounts) => ({
            ...prevAmounts,
            [id]: prevAmounts[id] > 1 ? prevAmounts[id] - 1 : 1,
        }));
    };

    const handleInputChange = (id, value) => {
        if (value === "") {
            setAmounts((prevAmounts) => ({
                ...prevAmounts,
                [id]: "",
            }));
            return;
        }
    
        const numericValue = parseInt(value, 10);
        if (!isNaN(numericValue) && numericValue >= 1) {
            setAmounts((prevAmounts) => ({
                ...prevAmounts,
                [id]: numericValue, 
            }));
        }
    };

    const [addedToCart, setAddedToCart] = useState(
        Kichenwares.reduce((acc, item) => {
            acc[item.id] = false;
            return acc;
        }, {})
    );

    return (

        Kichenwares.map((Kichenware) => (
            <div className="card" key={Kichenware.id}>
                <div className='card-top-gap'></div>
                <img
                    src={Kichenware.image}
                    className="card-image"
                    alt={`${Kichenware.id} - ${Kichenware.name}`}
                >
                </img>
                <h2 className="card-title">{Kichenware.name}</h2>
                {/* <p className="card-description">{Kichenware.description}</p> */}
                <p className="card-price">{"HK$ " + Kichenware.price}</p>

                <div className="card-cart">
                    <div>
                        <button
                            className="card-amount-modify-button card-amount-decrease-button"
                            onClick={() => handleDecrement(Kichenware.id)}
                        >
                            -
                        </button>
                        <input
                            id={Kichenware.id}
                            type="numeric"
                            min="1"
                            value={amounts[Kichenware.id]}
                            onChange={(e) => handleInputChange(Kichenware.id, e.target.value)}
                        />
                        <button
                            className="card-amount-modify-button card-amount-increase-button"
                            onClick={() => handleIncrement(Kichenware.id)}
                        >
                            +
                        </button>
                    </div>

                    <button 
                        className="card-add-to-cart-button"
                        name = "add-to-cart-button"
                        onClick={() => {
                            addToCart({
                                id: Kichenware.id,
                                name: Kichenware.name,
                                description: Kichenware.description,
                                price: Kichenware.price,
                                image: Kichenware.image,
                                amount: amounts[Kichenware.id],
                                total: parseFloat((Kichenware.price * (amounts[Kichenware.id] || 1)).toFixed(2))
                            });
                            setAddedToCart((prevAdded) => ({
                                ...prevAdded,
                                [Kichenware.id]: true,
                            }));
                    
                            setTimeout(() => {
                                setAddedToCart((prevAdded) => ({
                                    ...prevAdded,
                                    [Kichenware.id]: false,
                                }));
                            }, 1500);
                        }}
                    >
                        {addedToCart[Kichenware.id] ? (
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16" 
                                height="16" 
                                fill="currentColor" 
                                class="bi bi-bag-check-fill" 
                                viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                            </svg>
                        ) : (
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="16"
                                height="16" 
                                class="bi bi-cart4" 
                                viewBox="0 0 16 16"
                            >
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        ))
    );
}

export default Card;