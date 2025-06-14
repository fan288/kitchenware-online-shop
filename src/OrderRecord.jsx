import './cart.css';
import React from 'react';
import Payment from './Payment';

function OrderRecord({ orderRecord =[]}) {
    return (
        <div className="order-records">
            <h2>Order History</h2>
            {orderRecord.length === 0 ? (
                <p>No orders have been placed yet.</p>
            ) : (
                orderRecord.map((order) => (
                    <div key={order.id} className="order-record">
                        <h3>Order Placed Date: {order.timestamp}</h3>
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
                                        <td>{item.amount}</td>
                                        <td>${(item.price * item.amount).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p style={{ textAlign: 'right' }}><strong>Order Total:</strong> ${order.total.toFixed(2)}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default OrderRecord;