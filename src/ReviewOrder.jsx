import Kitchenwares from './Kitchenwares';
import ProgressBar from './ProgressBar';
import Delivery from './Delivery';


function ReviewOrder({ cart, checkoutAmountDetails, setComponent }) {

  const [subtotal, shippingFee, salesTax, grandTotal] = checkoutAmountDetails; 
  window.checkoutAmountDetails = checkoutAmountDetails;

  
  const steps = [
    { id: 1, name: 'Review Your Order' },
    { id: 2, name: 'Delivery Information' },
    { id: 3, name: 'Payment' },
    { id: 4, name: 'Complete!' },
  ];

  const currentStep = 1;

  return (
    <div className="review-order">
      <h2>Review Your Order</h2>

      <ProgressBar steps={steps} currentStep={currentStep} />

      <table className='cart-table'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem) =>  (
              <tr key={cartItem.id}>
                <td className='cart-td-product-name'>{cartItem.name}</td>
                <td>${cartItem.price}</td>
                <td>{cartItem.amount}</td>
                <td>${parseFloat(cartItem.total).toFixed(2)}</td>
              </tr>
          ))}
        </tbody>
      </table>

      <div class="cart-checkout-summary-container">
          <table className="cart-checkout-summary-table">
              <tbody>
                  <tr>
                      <td>Subtotal:</td>
                      <td>${subtotal}</td>
                  </tr>
                  <tr>
                      <td>Shipping Fee:</td>
                      <td>${parseFloat(shippingFee).toFixed(2)}</td>
                  </tr>
                  <tr>
                      <td>Sales Tax (10%):</td>
                      <td>${salesTax}</td>
                  </tr>
                  <tr>
                      <td>Grand Total:</td>
                      <td><p className='cart-grand-total-number'>${grandTotal}</p></td>
                  </tr>
              </tbody>
          </table>

          <button className='checkout-next-button'
              onClick={() => setComponent(<Delivery/>)}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="25" 
                height="25" 
                fill="currentColor" 
                class="bi bi-arrow-right-circle-fill" 
                viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
              </svg>
              Next
          </button>
      </div>
    </div>
  );
}

export default ReviewOrder;