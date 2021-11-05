import React from "react";
import WeatherWidget from "./WeatherWidget";
import "./main.css";


const Intro = () => {
  return (
    <section className="intro">
      <div className="container intro__container">
        <input className="intro-input" type="text" placeholder="Where To?" />
      </div>
      <div className="weather_widget">
        <WeatherWidget />
      </div>
    </section>
  );
};

export default Intro;
