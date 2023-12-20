

import "./NavBar.css";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "../../assets/Cart1.svg";
import WishListIcon from "../../assets/Wishlist.svg";
import axios from "axios";

export default function NavBar() {
  const location = useLocation();
  const [showShadow, setShowShadow] = useState(false);
  const [search, setSearch] = useState("");



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowShadow(true);
    } else {
      setShowShadow(false);
    }
  };

  return (
    <div className={`NavBar ${showShadow ? "shadow" : ""}`}>
      <div className="NavContainer">
        <div className="NavWrapper">
          <h1 className="Logo">Exclusive</h1>
          <ul className="NavLinks">
            <li>
              <Link
                className={`link ${location.pathname === "/" ? "active" : ""}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  location.pathname === "/singup" ? "active" : ""
                }`}
                to="/singup"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="NavDetails">
          <div className="SearchBar">
            <input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="Search"
              type="text"
              placeholder="What are you looking for?"
            />
            <i className="bi bi-search"  onClick={()=>{handleSearch(search)}} ></i>
          </div>
          <Link to="/wishlist">
            <img src={WishListIcon} alt="" />
          </Link>
          <Link id="cart" to="/cart">
            <img src={CartIcon} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
