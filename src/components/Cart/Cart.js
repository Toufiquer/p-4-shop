import React from "react";
import "./Cart.css";
const Cart = ({ cartProduct }) => {
  return (
    <div className="cart">
      <div className="content">
        Cart <hr />
        <h3>Total Item: {cartProduct.length}</h3>
      </div>
    </div>
  );
};

export default Cart;
