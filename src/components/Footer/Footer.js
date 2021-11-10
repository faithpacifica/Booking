import React from "react";
// import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="site_footer">
      <div className="container">
        <div className="site_footer__inner_wrapper">
          <div className="about_us">
            <h4 className="site_footer__title">About Agoda</h4>

            <a className="about_us_link" href="#">
              {" "}
              About Us{" "}
            </a>
            <a className="about_us_link" href="#">
              {" "}
              Advertising
            </a>
            <p className="all_rights">© 2021 Agoda LLC All rights reserved.</p>
          </div>

          <ul className="choices footer_list">
          <h4 className="site_footer__title">Destinations</h4>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="#">
                Countrires
              </a>
            </li>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="#">
                Cities
              </a>
            </li>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="#">
                Hotels
              </a>
            </li>
          </ul>

          <ul className="more footer_list">
          <h4 className="site_footer__title">Explore more</h4>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="#">
                {/* TODOhreflarni tuldirish */}
                Reviews
              </a>
            </li>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="#">
                Articles
              </a>
            </li>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="#">
                Ideas for Travel
              </a>
            </li>
          </ul>

          <ul className="socials footer_list">
            <li className=" footer_list_item">
              <a className="footer_list_link" href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
