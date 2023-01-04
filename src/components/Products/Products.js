import React from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = ({ products }) => {
  let newProducts = [...products];
  newProducts.length = 10;
  return (
    <div className="products">
      {newProducts.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
