import Payment from "./Payment";
import ProgressBar from './ProgressBar';

function Delivery({ setComponent }) {
  const steps = [
    { id: 1, name: 'Review Your Order' },
    { id: 2, name: 'Delivery Information' },
    { id: 3, name: 'Payment' },
    { id: 4, name: 'Complete!' },
  ];

  const currentStep = 2;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Address submitted');
    setComponent(<Payment />); // Navigate to Payment component
  };

  return (
    <div>
      <h2>Delivery Information</h2>
      {/* Progress Bar */}
      <ProgressBar steps={steps} currentStep={currentStep} />

      <div className="delivery-address-form">
        <h2>Delivery Address</h2>

        {/* Address Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
              <label htmlFor="street">Street Address:</label>
              <input type="text" id="street" name="street" required />
          </div>

          <div className="form-group">
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" required />
          </div>

          <div className="form-group">
              <label htmlFor="state">State:</label>
              <input type="text" id="state" name="state" required />
          </div>

          <div className="form-group">
          < label htmlFor="postalCode">Postal Code:</label>
            <input 
                type="text" 
                id="postalCode" 
                name="postalCode" 
                maxLength="7" /* Limit input to 7 characters */
                pattern="\d{1,7}" /* Ensure only digits are allowed */
                title="Postal Code must be up to 7 digits" /* Tooltip for invalid input */
                placeholder="1234567" /* Placeholder for user guidance */
                required 
            />
          </div>

          <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input type="text" id="country" name="country" required />
          </div>

          {/* Button Wrapper */}
          <div className="button-wrapper">
              <button type="submit" className="checkout-next-button">
                  Next
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Delivery;