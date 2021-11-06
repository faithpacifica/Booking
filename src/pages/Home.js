import React from "react";
import Intro from "../components/Intro/Intro";
import ExploreMore from "../components/ExploreMore/ExploreMore";
import Navbar from '../components/Navbar/Navbar';
import PopularDestinations from '../components/PopularDestinations/PopularDestinations';


const Home = () => {
  return (
    <div className="home_page">

        
        <Intro />
        <Navbar />
        <PopularDestinations />
        <ExploreMore />
      
     
    </div>
  );
};

export default Home;
