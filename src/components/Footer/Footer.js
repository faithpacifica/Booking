import React from "react";
// import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className="site_footer">
      <div className="container">
        <div className="site_footer__inner_wrapper">
          <div className="about_us">
            <div className="">
              <a className="about_us_link" href="">
                About Us
              </a>
            </div>
            {/* TODO: Link qanday yoziladi? */}
            <div className="">
              <a className="about_us_link" href="">
                Advertising
              </a>
            </div>

            <p  className="all_rights">© 2021 Agoda LLC All rights reserved.</p>
          </div>

          <ul className="choices footer_list">
            <li className=" footer_list_item">
              <a className="footer_list_link"  href="">Countires</a>
            </li>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="">Cities</a>
            </li>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="">Hotels</a>
            </li>
          </ul>

          <ul className="more footer_list">
            <li className=" footer_list_item">
              <a className="footer_list_link" href="">Reviews</a>
            </li>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="">Articles</a>
            </li>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="">Ideas for Travel</a>
            </li>
          </ul>

          <ul className="socials footer_list">
            <li className=" footer_list_item">
              <a className="footer_list_link" href="">
              <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="">
              <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li className=" footer_list_item">
              <a className="footer_list_link" href="">
              <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
