import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="site__header">
      <div className="container  site__header__container">
        <Link to='/'>Logo</Link>
        <div>Currency</div>
        <div>Language</div>

        <div className="blog_pages">
          <Link to='/review'>Review</Link>
          <Link to='/my-trips'>Trips</Link>
        </div>

        <div className="authentification">
            <button type='button'>?</button>
          <Link to="/register">Register</Link>
          <Link to="/sign-in">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
