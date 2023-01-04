import React from "react";
import "./Product.css";
const Product = ({ product, product: { img, name, price, category } }) => {
  console.log(product, " => Line No: 4");
  return (
    <div className="product">
      <h4>Name: {name}</h4>
      <img src={img} alt="" />
      <h4>Price: {price}</h4>
      <h4>Category: {category}</h4>
      <button>Add To Cart</button>
    </div>
  );
};

export default Product;
