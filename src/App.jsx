import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import Cart from './Cart';
import Login from './Login';
import ReviewOrder from './ReviewOrder';
import Delivery from './Delivery';
import Payment from './Payment';
import CheckoutSuccess from './CheckoutSuccess';
import OrderRecord from './OrderRecord';
import Registry from './Registry';
import AboutUs from './AboutUs';
import ContactThank from './ContactThank';
import { useState, useEffect } from 'react';
import ContactUs from './ContactUs';

function App(){

    const [currentComponent, setCurrentComponent] = useState(<Home />); 

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : []; 
    });
    const [orderRecord, setOrderRecord] = useState(() => {
        const savedOrders = localStorage.getItem("orderRecord");
        return savedOrders ? JSON.parse(savedOrders) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("orderRecord", JSON.stringify(orderRecord));
    }, [orderRecord]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { 
                            ...item, 
                            amount: item.amount + product.amount, 
                            total: parseFloat((item.price * (item.amount + 1)).toFixed(2)),
                        }
                        : item
                );
            } else {
                const newCartItem = {
                    ...product,
                    total: parseFloat((product.price * product.amount).toFixed(2)),
                };
                return [...prevCart, newCartItem];
            }
        });
    };

    const [checkoutAmountDetails, setCheckoutAmountDetails] = useState([]);
    window.cart = cart;

    return(
        <>
            <main>
                <Header setComponent={setCurrentComponent} cart={cart} />
                
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
                    />
                ) : currentComponent.type === Login ? (
                    <Login setComponent={setCurrentComponent} />
                ) : currentComponent.type === Registry ? (
                    <Registry setComponent={setCurrentComponent} />
                ) : currentComponent.type === AboutUs ? (
                    <AboutUs setComponent={setCurrentComponent} />
                ) : currentComponent.type === ContactUs ? (
                    <ContactUs setComponent={setCurrentComponent} />
                ) : (
                    
                    currentComponent
                )}

            </main>

            <Footer setComponent={setCurrentComponent} />
        </>
    )
}

export default App;