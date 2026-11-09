import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          cartItems.map((item, index) => (
            <li key={`${item}-${index}`}>{item} is in your cart.</li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Cart
