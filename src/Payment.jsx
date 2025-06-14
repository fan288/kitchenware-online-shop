import './Payment.css';
import CheckoutSuccess from './CheckoutSuccess';
import ProgressBar from './ProgressBar';
import React, { useState } from 'react';


function Payment({ cart, checkoutAmountDetails, setCheckoutAmountDetails, setComponent, setCart, setOrderRecord }) {
    const [subtotal, shoppingFee, salesTax, grandTotal] = checkoutAmountDetails;

    const [selectedCard, setSelectedCard] = useState('visa'); // Default selected card
    const handleCardSelect = (cardType) => {
      setSelectedCard(cardType); // Update the selected card
    };
  

  const handleSubmit = (e) => {
    const formatTimestamp = () => {
      const now = new Date();
      const day = now.getDate();
      const month = now.toLocaleString('default', { month: 'long' }); // Full month name
      const year = now.getFullYear();
      const time = now.toLocaleTimeString('en-US'); // Format time as 12-hour clock with AM/PM

      // Add ordinal suffix to the day
      const ordinalSuffix = (day) => {
          if (day > 3 && day < 21) return 'th'; // Handle 11th, 12th, 13th
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
      id: Date.now(), // Unique ID based on timestamp
      timestamp: formatTimestamp(),
      items: [...cart], // Copy of the current cart
      total: grandTotal, // Grand total of the order
    };

    // Add the new order to the order records
    setOrderRecord((prevOrders) => [newOrder, ...prevOrders]);
    console.log('The new orders:', newOrder);

    e.preventDefault();
    console.log('Payment submitted with card:', selectedCard);
    
    setCart([]); // Clear the cart
    setCheckoutAmountDetails([]);
    setComponent(<CheckoutSuccess />); // Navigate to CheckoutSuccess component
  };

    return (
        <div>
          <h2>Payment</h2>
          {/* Progress Bar */}
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

              {/* <form onSubmit={handleSubmit}> */}
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

    // 
    //     <div className="payment-container">
          // <h2>Payment</h2>
          //   {/* Progress Bar */}
          //   <ProgressBar steps={[
          //       { id: 1, name: 'Review Your Order' },
          //       { id: 2, name: 'Delivery Information' },
          //       { id: 3, name: 'Payment' },
          //       { id: 4, name: 'Complete!' },
          //   ]} currentStep={3} />

    //         <div className="payment-content">
    //           {/* Left-hand side: Credit Card Form */}
    //           <div className="payment-form">
    //               <h2>Payment Information</h2>
    //               <form onSubmit={handleSubmit}>
    //     {/* First Line: Credit Card Logos with Radio Buttons */}
    //     <div className="payment-form-group card-selection">
    //         <label>
    //             <input type="radio" name="cardType" value="visa" required />
    //             <img src="/path/to/visa-logo.png" alt="Visa" className="card-logo" />
    //         </label>
    //         <label>
    //             <input type="radio" name="cardType" value="mastercard" required />
    //             <img src="/path/to/mastercard-logo.png" alt="MasterCard" className="card-logo" />
    //         </label>
    //         <label>
    //             <input type="radio" name="cardType" value="amex" required />
    //             <img src="/path/to/amex-logo.png" alt="American Express" className="card-logo" />
    //         </label>
    //     </div>

    //     {/* Second Line: Card Number Input */}
    //     <div className="payment-form-group">
    //         <label htmlFor="cardNumber">Card Number:</label>
    //         <input type="text" id="cardNumber" name="cardNumber" maxLength="16" pattern="\d{16}" title="Card Number must be 16 digits" required />
    //     </div>

    //     {/* Third Line: Expiry Date Inputs */}
    //     <div className="payment-form-group expiry-date">
    //         <label htmlFor="expiryDate">Expiry Date:</label>
    //           <div>
    //             <input type="text" id="expiryMonth" name="expiryMonth" placeholder="MM" maxLength="2" pattern="\d{2}" title="Month must be 2 digits" required />
    //           </div>
    //           <div>
    //             <input type="text" id="expiryYear" name="expiryYear" placeholder="YY" maxLength="2" pattern="\d{2}" title="Year must be 2 digits" required />
    //           </div>
    //     </div>

    //     {/* Fourth Line: CVV Input */}
    //     <div className="payment-form-group">
    //         <label htmlFor="cvv">CVV:</label>
    //         <input type="text" id="cvv" name="cvv" maxLength="3" pattern="\d{3}" title="CVV must be 3 digits" required />
    //     </div>

    //     <button type="submit" className="checkout-next-button">Submit Payment</button>
    // </form>
    //           </div>

    //             {/* Right-hand side: Checkout Summary */}
              //   <div className="payment-summary">
              //     <h2>Payment Summary</h2>
              //     <table>
              //         <tbody>
              //             <tr>
              //                 <td>Subtotal:</td>
              //                 <td>${subtotal.toFixed(2)}</td>
              //             </tr>
              //             <tr>
              //                 <td>Shopping Fee:</td>
              //                 <td>${shoppingFee.toFixed(2)}</td>
              //             </tr>
              //             <tr>
              //                 <td>Sales Tax:</td>
              //                 <td>${salesTax.toFixed(2)}</td>
              //             </tr>
              //             <tr>
              //                 <td><strong>Grand Total:</strong></td>
              //                 <td className='payment-grand-total-number'>${grandTotal.toFixed(2)}</td>
              //             </tr>
              //         </tbody>
              //     </table>
              // </div>
    //         </div>
    //     </div>
    );
}

export default Payment;






// import CheckoutSuccess from "./CheckoutSuccess";
// import ProgressBar from './ProgressBar';



// function Payment({ setComponent }) {
//   const steps = [
//     { id: 1, name: 'Review Your Order' },
//     { id: 2, name: 'Delivery Information' },
//     { id: 3, name: 'Payment' },
//     { id: 4, name: 'Complete!' },
//   ];

//   const currentStep = 3; 

//     return (
//       <div className="review-order">
//         <h2>Payment</h2>

//         {/* Progress Bar */}
//         <ProgressBar steps={steps} currentStep={currentStep} />
  
//         <button 
//             className="checkout-return-button" 
//             onClick={() => setComponent(<CheckoutSuccess />)} // Redirect to the Card component
//           >Next</button>
  
//       </div>
//     );
//   }
  
//   export default Payment;