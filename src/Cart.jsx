import './cart.css';
import Kitchenwares from './Kitchenwares';
import ReviewOrder from './ReviewOrder.jsx';

function Cart({ cart, setCart, setComponent, setCheckoutAmountDetails}) {
    const clearCart = () => {
        setCart([]); 
    };
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const shippingFee = 50;

    const subtotal = cart.reduce((acc, cartItem) => {
        const product = Kitchenwares.find((item) => item.id === cartItem.id);
        return parseFloat((acc + product.price * cartItem.amount).toFixed(2));
    }, 0);

    const salesTaxRate = 0.1; 
    const salesTax = parseFloat(((subtotal + shippingFee) * salesTaxRate).toFixed(2));
    const grandTotal = parseFloat((subtotal + shippingFee + salesTax).toFixed(2));

    const handleCheckout = () => {
        const checkoutAmountDetails = [subtotal, shippingFee, salesTax, grandTotal];
        setCheckoutAmountDetails(checkoutAmountDetails);
        setComponent(<ReviewOrder cart={cart} checkoutAmountDetails={checkoutAmountDetails} setComponent={setComponent} />);
    };

    const handleIncrement = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          amount: item.amount + 1, 
                          total: (item.price * (item.amount + 1)).toFixed(2), // Update the total
                      }
                    : item
            )
        );
    };


    const handleDecrement = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          amount: item.amount > 1 ? item.amount - 1 : 1, 
                          total: (item.price * (item.amount > 1 ? item.amount - 1 : 1)).toFixed(2),
                      }
                    : item
            )
        );
    };

    const handleInputChange = (id, value) => {
        if (value === "") {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              amount: "", 
                              total: 0, 
                          }
                        : item
                )
            );
            return;
        }
    
        const numericValue = parseInt(value, 10); 
        if (!isNaN(numericValue) && numericValue >= 1) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === id
                        ? {
                              ...item,
                              amount: numericValue,
                              total: (item.price * numericValue).toFixed(2), 
                          }
                        : item
                )
            );
        }
    };

    return (
        <div className="cart-title">
            <h2>{`Your Cart (${cart.length} item)`}</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <button className='clear-cart-button' onClick={() => clearCart()}>Clear Cart</button>
                    
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th name = "product-pictures">Items</th>
                                <th name="product-name"></th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((cartItem) => (
                                    <tr key={cartItem.id}>
                                        <td name='image'>
                                            <img src={cartItem.image} alt={cartItem.name} />
                                        </td>
                                        <td name='product name' className='cart-td-product-name'>{cartItem.name}
                                            <p className="cart-product-description">{cartItem.description}</p>
                                        </td>
                                        <td name='price'>${cartItem.price.toFixed(2)}</td>
                                        <td>
                                            <div className='card-cart'>
                                                <button
                                                    className="card-amount-modify-button card-amount-decrease-button"
                                                    onClick={() => handleDecrement(cartItem.id)}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    id={cartItem.id}
                                                    type="numeric"
                                                    min="1"
                                                    value={cartItem.amount}
                                                    onChange={(e) => handleInputChange(cartItem.id, e.target.value)}
                                                    
                                                />
                                                <button
                                                    className="card-amount-modify-button card-amount-increase-button"
                                                    onClick={() => handleIncrement(cartItem.id)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='cart-total-price-container'>
                                                <span name='total'>${cartItem.total} </span>
                                                <button className="cart-remove-item-button" onClick={() => removeFromCart(cartItem.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                                        width="20" 
                                                        height="20" 
                                                        class="bi bi-x-circle-fill" 
                                                        viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                            ))}
                        </tbody>
                    </table>
                    
                    <div class="cart-checkout-summary-container">
                        <table className="cart-checkout-summary-table">
                            <tbody>
                                <tr>
                                    <td>Subtotal:</td>
                                    <td>${subtotal.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Shipping Fee:</td>
                                    <td>${shippingFee.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Sales Tax (10%):</td>
                                    <td>${salesTax.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Grand Total:</td>
                                    <td><p className='cart-grand-total-number'>${grandTotal.toFixed(2)}</p></td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='cart-checkout-button'
                            onClick={handleCheckout}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="25" 
                                height="25" 
                                fill="currentColor" 
                                class="bi bi-check-circle-fill" 
                                viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;