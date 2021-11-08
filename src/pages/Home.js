import React from "react";
import Intro from "../components/Intro/Intro";
import Accomodation from "../components/HomeAccomodation/Accomodation";
import Navbar from '../components/Navbar/Navbar';
import PopularDestinations from '../components/PopularDestinations/PopularDestinations';
import './Home.css';

const Home = () => {
  return (
    <div className="home_page">

        
        <Intro />
        <Navbar />
        <PopularDestinations />
        <Accomodation />
      
     
    </div>
  );
};

export default Home;
