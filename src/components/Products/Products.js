import React from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = ({ products, addToCart }) => {
  let newProducts = [...products];
  newProducts.length = 30;
  return (
    <div className="products">
      {newProducts.map((product) => (
        <Product addToCart={addToCart} key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
