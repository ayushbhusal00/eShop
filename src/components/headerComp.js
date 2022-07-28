import React from "react";
import "./HeaderComp.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function HeaderComp() {
  /* eslint-disable no-unused-vars */

  return (
    <div className="header">
      <Link to="/" className="RouterLink">
        <div className="header__logo">
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">eShop</h2>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" className="RouterLink">
          <div className="nav__item">
            <span className="nav__itemLineTwo">
              <ShoppingBasketIcon />0
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HeaderComp;
