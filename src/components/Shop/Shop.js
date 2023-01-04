import React from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  return (
    <div>
      <div className="shop">
        <Product></Product>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
