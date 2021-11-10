import React from "react";
import {NavLink, Link } from "react-router-dom";
import "./SubNavbar.css";

const SubNavbar = () => {
  return (
    <div className="subnavbar">
      <div className="container">
        <ul className="subnavbar-list">
          <li className="subnavbar-item">
            <NavLink  activeClassName="selected" className="subnavbar-link" to="/hotels">
              <i className="fas fa-hotel"></i> 
              <span className="subnavbar-text"> Hotels</span>
            </NavLink>
          </li>
          <li className="subnavbar-item">
            <NavLink  activeClassName="selected" className="subnavbar-link" to="/things_to_do">
              <i className="far fa-calendar-check"></i>
              <span className="subnavbar-text"> Things to Do</span>
            </NavLink>
          </li>
          <li className="subnavbar-item">
            <NavLink  activeClassName="selected" className="subnavbar-link" to="/restaurants">
              <i className="fas fa-utensils"></i>
              <span className="subnavbar-text">Restaurants</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubNavbar;
