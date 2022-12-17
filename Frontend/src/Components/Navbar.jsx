import React, { useState } from "react";
import "../CSS/Navbar.css";
import { CgProfile } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  return (
    <div className="navbar">
      <span>
        <a href="/">
          {" "}
          <img
            className="logoimg"
            src="https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png"
            alt="myntra"
          />
        </a>
      </span>

      <div className={`navitem ${isopen && "open"}`}>
        <a href="/mens">MEN</a>
        <a href="/">WOMEN</a>
        <a href="/">KIDS</a>
        <a href="/">HOME&LIVING</a>
        <a href="/">BEAUTY</a>
        <a href="/">STUDIO</a>
        <a href="/signup">
          <CgProfile size={20} />
        </a>
        <a href="/cart">
          <BsHandbag size={20} />
        </a>
      </div>
      <div
        className={`navtoggle ${isopen && "open"}`}
        onClick={() => setIsopen(!isopen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
