import Header from './Header';
import Footer from './Footer';
// import Kichenware from './Kitchenwares.js'
import Card from './Card';
import Cart from './Cart';
import Login from './Login.jsx';
import Button from './Button.jsx';
import ReviewOrder from './ReviewOrder.jsx';
import Delivery from './Delivery.jsx';
import Payment from './Payment.jsx';
import CheckoutSuccess from './CheckoutSuccess.jsx';
import OrderRecord from './OrderRecord.jsx';
import Registry from './Registry.jsx';
import { useState, useEffect } from 'react';

function App(){

    const [currentComponent, setCurrentComponent] = useState(<Card />); 

    const [cart, setCart] = useState(() => {
        // Retrieve cart from localStorage if it exists
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : []; // Default to an empty array if no cart exists
    });

    // Effect to save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // const addToCart = (product) => {
    //     setCart((prevCart) => {
    //         const existingProduct = prevCart.find((item) => item.id === product.id);
    //         if (existingProduct) {
    //             // Update the amount if the product is already in the cart
    //             return prevCart.map((item) =>
    //                 item.id === product.id
    //                     ? { ...item, 
    //                         amount: item.amount + product.amount,
    //                     }
    //                     : item
    //             );
    //         } else {
    //             // Add the product to the cart
    //             return [...prevCart, product];
    //         }
    //     });
    // };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                console.log('Existing Product:', existingProduct.price);
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { 
                            ...item, 
                            amount: item.amount + product.amount, 
                            total: item.total + product.price * product.amount }
                        : item
                );
            } else {
                const newCartItem = {
                    ...product,
                    total: product.price * product.amount,
                };
                return [...prevCart, newCartItem];
            }
        });
    };

    const [checkoutAmountDetails, setCheckoutAmountDetails] = useState([]);

    const [orderRecord, setOrderRecord] = useState([]);

    window.cart = cart;

    return(
        <>

            {/* Pass the cart and setComponent function to Header */}
            <Header setComponent={setCurrentComponent} cart={cart} />
            
            <main>
                {currentComponent.type === Cart ? (
                    <Cart 
                        cart={cart} 
                        setCart={setCart} 
                        setCheckoutAmountDetails={setCheckoutAmountDetails} 
                        setComponent={setCurrentComponent} 
                    />
                ) : currentComponent.type === Card ? (
                    <Card addToCart={addToCart} />
                ) : currentComponent.type === ReviewOrder ? (
                    // eslint-disable-next-line no-undef
                    <ReviewOrder 
                        cart={cart} 
                        checkoutAmountDetails={checkoutAmountDetails} 
                        setComponent={setCurrentComponent} 
                    />
                ) : currentComponent.type === Delivery ? (
                    <Delivery setComponent={setCurrentComponent} />
                ) : currentComponent.type === Payment ? (
                    <Payment 
                        cart={cart}
                        // eslint-disable-next-line no-undef
                        checkoutAmountDetails={checkoutAmountDetails} 
                        // eslint-disable-next-line no-undef
                        setCheckoutAmountDetails={setCheckoutAmountDetails} 
                        setComponent={setCurrentComponent} 
                        setCart={setCart}
                        setOrderRecord={setOrderRecord} />
                ) : currentComponent.type === CheckoutSuccess ? (
                    <CheckoutSuccess setComponent={setCurrentComponent} />
                ) : currentComponent.type === OrderRecord ? (
                    <OrderRecord 
                        orderRecord={orderRecord}
                        // setOrderRecord={setOrderRecord}
                        // orderRecords={orderRecord}
                    />
                ) : currentComponent.type === Login ? (
                    <Login setComponent={setCurrentComponent} />
                ) : currentComponent.type === Registry ? (
                    <Registry setComponent={setCurrentComponent} />
                ) : (
                    currentComponent
                )}

            </main>

            <Footer />
        </>
    )
}

export default App;