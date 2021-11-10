import React from "react";
import WeatherWidget from "./WeatherWidget";
import "./Intro.css";

const Intro = ({lat, long}) => {

  return (
 
    <section className="intro">
      <div className="container intro__container">
        <div className="intro__search">
        <input className="intro__input" type="text" placeholder="Where To?" /><i className="fas fa-search intro__icon"></i>
        </div>
       <div className="weather__widget">
        <WeatherWidget lat={lat} long={long} />
      </div>
      </div>
     
    </section>
  );
};

export default Intro;
