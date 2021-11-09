import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";



import "./Header.css";

const Header = () => {


  const { useState, useEffect } = React;

  const data = [{id: 0, label: "UZS"}, {id: 1, label: "DOLLAR"}];
  
  
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(null);
    
    const toggleDropdown = () => setOpen(!isOpen);
    
    const handleItemClick = (id) => {
      selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    }
  



  return (
    <header className="site__header">
      <div className="container  site__header__container">
        <Grid direction="row" justifyContent="space-between" alignItems="center" container spacing={4}>
          <Grid item xs={4}>
            <Link className="site-header-logo" to='/' >
              <img className="site-header-logo-img" src='img/agoda_logo.png' alt='site-header-logo' />
            </Link>
          </Grid>
          <Grid item xs={2}>
          <div className='dropdown'>
        <div className='dropdown-header currency' onClick={toggleDropdown}>
          {selectedItem ? items.find(item => item.id == selectedItem).label : "UZS"}
          <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
        </div>
        <div className={`dropdown-body ${isOpen && 'open'}`}>
          {items.map(item => (
            <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
              <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
              {item.label}
            </div>
          ))}
        </div>
      </div> {/* <button className="currency" type='button'>UZS</button> */}
            <button className="language" type='button'>
              <img className="language__image" src='img/russian-flag.png' />
              {/* <img src='img/anglish-flag.png'/> */}
            </button>
          </Grid>
          <Grid container direction="row" justifyContent="flex-end" alignItems="center" item xs={6}>
            <Link className="blog_pages__review site-header-link" to='/review'><i class="fas fa-pen"></i>Review</Link>
            <Link className="blog_pages__my_trips site-header-link" to='/my-trips'><i class="far fa-heart"></i>Trips</Link>
            <Link className="auth__registration site-header-link" to="/register">Register</Link>
            <Link className="auth__sign-in site-header-link" to="/sign-in">Sign In</Link>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default Header;
