import React from "react";
import WeatherWidget from "./WeatherWidget";
import "./intro.css";





const Intro = () => {

  return (
 
    <section className="intro">
      <div className="container intro__container">
        <div className="intro__search">
        <input className="intro__input" type="text" placeholder="Where To?" /><i class="fas fa-search intro__icon"></i>
        </div>
       <div className="weather__widget">
        <WeatherWidget />
      </div>
      </div>
     
    </section>
  );
};

export default Intro;
