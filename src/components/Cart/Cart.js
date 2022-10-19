import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h5>Order Summary</h5>
                <p>Selected Item: {cart.length}</p>

        </div>
    );
};

export default Cart;