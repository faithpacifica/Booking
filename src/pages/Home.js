import React from "react";
import Header from "../components/Home components/Header";
import Intro from "../components/Home components/Intro";
import ExploreMore from "../components/Home components/ExploreMore";
import Footer from "../components/Home components/Footer";

const Home = () => {
  return (
    <div className="home_page">
      <div className = 'container'>
        
        <Intro />
        <Navbar />
        <PopularDestinations />
        <ExploreMore />
      
      </div>
    </div>
  );
};

export default Home;
