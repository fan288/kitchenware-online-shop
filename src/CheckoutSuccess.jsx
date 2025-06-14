import Card from './Card.jsx';
import ProgressBar from './ProgressBar.jsx';

function CheckoutSuccess({ setComponent}) {
  const steps = [
    { id: 1, name: 'Review Your Order' },
    { id: 2, name: 'Delivery Information' },
    { id: 3, name: 'Payment' },
    { id: 4, name: 'Complete!' },
  ];

  const currentStep = 4; 

    return (
      <div className="checkoutMessage">
        <h2>Checkout Successfully!</h2>

        <ProgressBar steps={steps} currentStep={currentStep} />

        <p className='checkoutThankMessage'>Thank you for your purchase!</p>
        <p>We've received your order will ship in 2-5 business days.</p>

        <img src='./src/assets/shippingPack.avif' alt='Shipping Pack' className='shipping-pack-image'></img>

        <p>We hope you enjoy your kitchenwares!</p>

        <button 
          className="checkout-return-button" 
          onClick={() => {
            setComponent(<Card />); 
          }}
        >
          Return to Home
        </button>
      </div>
    );
  }
  
  export default CheckoutSuccess;