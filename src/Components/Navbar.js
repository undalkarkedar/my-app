import React from "react";
import "./Navbar.css";
import logo from '../images/logo192.png'
export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="image--logo">
          <img src={logo} width="45%" alt="logo"   />
        </div>
        <div className="image--logo">
          <h2> ReactFacts</h2>
        </div>
        <div className="nav--title">
          <h3>React Course - Project - 1</h3>
        </div>
      </nav>
    </div>
  );
}
