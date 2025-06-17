import './cart.css';
import React from 'react';
import Payment from './Payment';

function OrderRecord({ orderRecord =[]}) {
    return (
        <div className="order-records-container">
            <h2 className='order-detail-word-in-centre'>Order Records</h2>
            {orderRecord.length === 0 ? (
                <p className='order-detail-word-in-centre'>No orders have been placed yet.</p>
            ) : (
                orderRecord.map((order) => (
                    <div key={order.id} className="order-record-item">
                        <h3>{order.timestamp}</h3>
                        <table className="cart-table" style={{height: '30px'}}>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.items.map((item) => (
                                    <tr key={item.id} className='order-record-table'>
                                        <td className='cart-td-product-name'>{item.name}</td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td style={{color: 'black'}}>{item.amount}</td>
                                        <td style={{color: 'black'}}>${(item.price * item.amount).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='order-Record-total-text'>
                            <span>Subtotal: ${order.subtotal.toFixed(2)}</span>
                            <br />
                            <span>Shipping Fee: ${order.shippingFee.toFixed(2)}</span><br />
                            <span>Sales Tax: ${order.salesTax.toFixed(2)}</span><br />
                            <p style={{ textAlign: 'right' }}>
                                <strong>
                                    Order Total: ${order.grandTotal.toFixed(2)}
                                </strong>
                            </p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default OrderRecord;