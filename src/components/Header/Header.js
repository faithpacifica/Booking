import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="site__header">
      <div className="container  site__header__container">
  
          <Link className="site-header-logo" to='/' >
            <img className="site-header-logo-img" src='img/agoda_logo.png' alt='site-header-logo' />
          </Link>
      
        <div className="site__header__currency_and_language">
          <button className="currency" type='button'>UZS</button>

          <button className="language" type='button'>
            <img className="language__image" src='img/russian-flag.png' />
            {/* <img src='img/anglish-flag.png'/> */}
          </button>
        </div>

        <div className="site-header__subgroup">
          <div className="blog_pages">
            <Link className="blog_pages__review site-header-link" to='/review'><i class="fas fa-pen"></i>Review</Link>
            <Link className="blog_pages__my_trips site-header-link"to='/my-trips'><i class="far fa-heart"></i>Trips</Link>
          </div>
          <div className="auth">
            <Link className="auth__registration site-header-link" to="/register">Register</Link>
            <Link className="auth__sign-in site-header-link"  to="/sign-in">Sign In</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
