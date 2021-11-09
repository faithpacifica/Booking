import React from "react";
import PopularDestinationCard from './PopularDestinationsCard';
// import styled, { css } from 'styled-components';
import './PopularDestinations.css'


const PopularDestinations = () => {
  return (
    <div className="popular__destinations">
      <div className="container">
        <div className="popular__destinations__inner__box">
          <h2 className="popular__destinations__title component-heading">Popular Destinations</h2>
          <p className="popular__destinations__text component-text">Recommended based on your activity</p>
          <PopularDestinationCard />
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
