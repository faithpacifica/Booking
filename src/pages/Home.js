import React from "react";
import Intro from "../components/Intro/Intro";
import Navbar from '../components/Navbar/Navbar';
import PopularDestinations from '../components/PopularDestinations/PopularDestinations';
import { useState, useEffect } from "react";
import './Home.css';
import HomeRestaurants from "../components/HomeRestaurants/HomeRestaurants";

const Home = () => {

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  useEffect(() => {
        
    navigator.geolocation.getCurrentPosition(function(position){
      if(position.coords.latitude && position.coords.longitude) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      }
    });
    
  }, []);

  return (
    <div className="home_page">
        
        <Intro lat={lat} long={long} />
        <Navbar />
        <PopularDestinations />
        <HomeRestaurants lat={lat} long={long} />

    </div>
  );
};

export default Home;
