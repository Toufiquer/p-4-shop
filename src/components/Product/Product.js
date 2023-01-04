import React from "react";
import "./Product.css";
const Product = ({ addToCart, product, product: { img, name, price, category, id } }) => {
  return (
    <div className="product">
      <h4>Name: {name}</h4>
      <img src={img} alt="" />
      <h4>Price: ${price}</h4>
      <h4>Category: {category}</h4>
      <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  );
};

export default Product;
