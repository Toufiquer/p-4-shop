import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    fetch("ema.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (product) => {
    const newCart = [...cartProduct, product];
    setCartProduct(newCart);
  };
  return (
    <div>
      <div className="shop">
        <Products addToCart={addToCart} uct products={products}></Products>
        <Cart cartProduct={cartProduct}></Cart>
      </div>
    </div>
  );
};

export default Shop;
