import React from "react";
import Intro from "../components/Home components/Intro";
import ExploreMore from "../components/Home components/ExploreMore";
import Navbar from '../components/Home components/Navbar';
import PopularDestinations from '../components/Home components/PopularDestinations';


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
