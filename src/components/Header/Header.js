import React from "react";
import "./Header.css";
import logo from "../../logo.svg";
const Header = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/shop">SHOP</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
