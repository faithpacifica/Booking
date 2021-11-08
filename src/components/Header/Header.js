import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="site__header">
      <div className="container  site__header__container">
        <Link className="site-header-logo" to='/' >
          <img className="site-header-logo-img" src='img/logo.svg' alt='site-header-logo' />
        </Link>
        <div className="currency-rates">
          <button className="" type='button'>
            UZS
          </button>
          <button type='button'>
            <img src='img/russian-flag.png' />
            {/* <img src='img/anglish-flag.png'/> */}
          </button>
          <div className="blog_pages">
            <Link to='/review'>Review</Link>
            <Link to='/my-trips'>Trips</Link>
          </div>
          <div className="authentification">
            <Link to="/register">Register</Link>
            <Link to="/sign-in">Sign In</Link>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
