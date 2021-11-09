import React from "react";
import { Link } from "react-router-dom";
import "./SubNavbar.css";

const SubNavbar = () => {
  return (
    <div className="subnavbar">
      <div className="container">
        <ul className="subnavbar-list">
          <li className="subnavbar-item">
            <Link className="subnavbar-link" to="/hotels">
              <i class="fas fa-hotel"></i> 
              <span className="subnavbar-text"> Hotels</span>
            </Link>
          </li>
          <li className="subnavbar-item">
            <Link className="subnavbar-link" to="/things_to_do">
              <i class="far fa-calendar-check"></i>
              <span className="subnavbar-text"> Things to Do</span>
            </Link>
          </li>
          <li className="subnavbar-item">
            <Link className="subnavbar-link" to="/restaurants">
              <i class="fas fa-utensils"></i>
              <span className="subnavbar-text">Restaurants</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubNavbar;
