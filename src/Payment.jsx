import './Payment.css';
import CheckoutSuccess from './CheckoutSuccess';
import ProgressBar from './ProgressBar';
import React, { useState } from 'react';


function Payment({ cart, checkoutAmountDetails, setCheckoutAmountDetails, setComponent, setCart, setOrderRecord }) {
    const [subtotal, shoppingFee, salesTax, grandTotal] = checkoutAmountDetails;

    const [selectedCard, setSelectedCard] = useState('visa'); 
    const handleCardSelect = (cardType) => {
      setSelectedCard(cardType); 
    };
  

  const handleSubmit = (e) => {
    const formatTimestamp = () => {
      const now = new Date();
      const day = now.getDate();
      const month = now.toLocaleString('default', { month: 'long' });
      const year = now.getFullYear();
      const time = now.toLocaleTimeString('en-US'); 

      const ordinalSuffix = (day) => {
          if (day > 3 && day < 21) return 'th'; 
          switch (day % 10) {
              case 1: return 'st';
              case 2: return 'nd';
              case 3: return 'rd';
              default: return 'th';
          }
      };

      return `${day}${ordinalSuffix(day)} ${month}, ${year} ${time}`;
    };
    const newOrder = {
      id: Date.now(),
      timestamp: formatTimestamp(),
      items: [...cart], 
      total: grandTotal, 
    };

    setOrderRecord((prevOrders) => [newOrder, ...prevOrders]);
    console.log('The new orders:', newOrder);

    e.preventDefault();
    console.log('Payment submitted with card:', selectedCard);
    
    setCart([]); 
    setCheckoutAmountDetails([]);
    setComponent(<CheckoutSuccess />); 
  };

    return (
        <div>
          <h2>Payment</h2>

          <ProgressBar steps={[
              { id: 1, name: 'Review Your Order' },
              { id: 2, name: 'Delivery Information' },
              { id: 3, name: 'Payment' },
              { id: 4, name: 'Complete!' },
          ]} currentStep={3} />

          <div className="payment-container">
            <div className='payment-container-flex payment-information'>
              <h2>Payment Information</h2>
              <form onSubmit={handleSubmit}>
              <div className="credit-card-container">
                <div
                    className={`visa-card ${selectedCard === 'visa' ? 'selected' : ''}`}
                    onClick={() => handleCardSelect('visa')}
                >
                    <img src="./src/assets/visaCardLogo.png" alt="Visa" className="card-logo" />
                </div>
                <div
                    className={`mastercard-card ${selectedCard === 'mastercard' ? 'selected' : ''}`}
                    onClick={() => handleCardSelect('mastercard')}
                >
                    <img src="./src/assets/masterCardLogo.jpg" alt="MasterCard" className="card-logo" />
                </div>
                <div
                    className={`amex-card ${selectedCard === 'amex' ? 'selected' : ''}`}
                    onClick={() => handleCardSelect('amex')}
                >
                    <img src="./src/assets/americaExpressCardLogo.jpg" alt="American Express" className="card-logo" />
                </div>
              </div>

              <br></br>

                      <div className="payment-form-group">
                        <div className='credit-card-info-container name-input-container'>
                            <div>
                              <label htmlFor="firstName">First Name</label>
                              <input
                                  type="text"
                                  id="firstName"
                                  placeholder='Mary'
                                  required
                              />
                            </div>

                            <div>
                              <label htmlFor="lastName">Last Name</label>
                              <input
                                  type="text"
                                  id="lastName"
                                  placeholder='Wong'
                                  required
                              />
                            </div>
                        </div>

                        <label htmlFor="credit-card-info-container zcardNumber">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            className='card-number-input'
                            maxLength="16"
                            pattern="\d{16}"
                            title="Card Number must be 16 digits"
                            placeholder='XXXX-XXXX-XXXX-XXXX'
                            required
                        />
                      </div>

                      <div className="payment-form-group expiry-date-container">
                          
                          <div className="credit-card-info-container expiry-date-input">
                            <div>
                              <label htmlFor="expiryMonthYear">Expiry Date:</label>
                              <input
                                  type="text"
                                  id="expiryMonthYear"
                                  name="expiryMonthYear"
                                  placeholder="MM/YY"
                                  maxLength="5"
                                  pattern="(0[1-9]|1[0-2])\/\d{2}"
                                  title="Month and Year must be 2 digits"
                                  required
                              />
                            </div>

                            <div>
                              <label htmlFor="cvv">CVV:</label>
                              <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                maxLength="3"
                                pattern="\d{3}"
                                title="CVV must be 3 digits"
                                placeholder='XXX'
                                required
                              />
                            </div>
                          </div>
                      </div>

                      <button type="submit" className="checkout-next-button">
                          Submit Payment
                      </button>
                    </form>
                

            </div>

            <div className="payment-container-flex payment-summary">
                    <h2>Payment Summary</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal:</td>
                                <td>${subtotal.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Shopping Fee:</td>
                                <td>${shoppingFee.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Sales Tax:</td>
                                <td>${salesTax.toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td><strong>Grand Total:</strong></td>
                                <td className='payment-grand-total-number'>${grandTotal.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
              </div>
          </div>
        </div>
    );
}

export default Payment;