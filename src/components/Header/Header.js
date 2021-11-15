import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";



import "./Header.css";

const Header = () => {


  // Dropdown function//

  const { useState} = React;

  const dataCurrency = [{ id: 0, label: "UZS" }, { id: 1, label: "DOLLAR" }];


  const [isCurrencyOpen, setCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState(dataCurrency);
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const currencyDropdown = () => setCurrencyOpen(!isCurrencyOpen);

  const handleCurrencyClick = (id) => {
    selectedCurrency === id ? setSelectedCurrency(null) : setSelectedCurrency(id);
    setCurrencyOpen(false);
  }


  const dataLanguage = [{ id: 0, img: '/img/russian-flag.png' }, { id: 1, img: '/img/english-flag.png' }];


  const [isLanguageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState(dataLanguage);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languageDropdown = () => setLanguageOpen(!isLanguageOpen);


  const handleLanguageClick = (id) => {
    selectedLanguage === id ? setSelectedLanguage(null) : setSelectedLanguage(id);
    setLanguageOpen(false);
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
          <Grid direction="row" alignItems="center" container item xs={2}>
            <div className='dropdown'>
              <div className='dropdown-header currency' onClick={currencyDropdown}>
                {selectedCurrency ? currency.find(item => item.id == selectedCurrency).label : "UZS"} { /*TODO: */}
                <i className={`fa fa-chevron-right icon ${isCurrencyOpen && "open"}`}></i>
              </div>
              <div className={`dropdown-body ${isCurrencyOpen && 'open'}`}>
                {currency.map((item,i) => (
                  <div className="dropdown-item" onClick={e => handleCurrencyClick(e.target.id)} id={item.id}>
                    <span className={`dropdown-item-dot ${item.id == selectedCurrency && 'selected'}`}>• </span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            <div className='dropdown'>
              <div className='dropdown-header language' onClick={languageDropdown}>
                <img className="language__image" src={selectedLanguage ? language.find(item => item.id == selectedLanguage).img : "/img/russian-flag.png"} />
                <i className={`fa fa-chevron-right icon ${isLanguageOpen && "open"}`}></i>
              </div>
              <div className={`dropdown-body ${isLanguageOpen && 'open'}`}>
                {language.map((item,i) => (
                  // <div className="dropdown-item" onClick={e => handleLanguageClick(e.target.id)} id={item.id}>
                    <img className={` dropdown__image ${item.id !== selectedLanguage && 'selected'}`} onClick={e => handleLanguageClick(e.target.id)} id={item.id} src={`${item.img}`} />  
                ))}
              </div>
              </div>
              </Grid>
          <Grid container direction="row" justifyContent="flex-end" alignItems="center" item xs={6}>
            <Link className="blog_pages__review site-header-link" to='/review'><i className="fas fa-pen"></i>Review</Link>
            <Link className="blog_pages__my_trips site-header-link" to='/my-trips'><i className="far fa-heart"></i>Trips</Link>
            <Link className="auth__registration site-header-link" to="/register">Register</Link>
            <Link className="auth__sign-in site-header-link" to="/sign-in">Sign In</Link>
          </Grid>
       
        </Grid>
      </div>
    </header>
  );
};

export default Header;
// fetch(`https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng?latitude=${lat}&longitude=${long}&lang=en_US&limit=30&currency=USD&`,getHotelApiOptions )