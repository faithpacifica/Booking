import React from "react";
import Grid from '@material-ui/core/Grid';
import SubNavbar from "../components/Subnavbar/SubNavbar";
import Map from "../components/Map/Map";
import FilterRestaurants from "../components/FilterRestaurants/FilterRestaurants";
import SingleRestaurantCard from "../components/SingleRestaurantCard/SingleRestaurantCard";
import "./Restaurants.css";

const Restaurants = () => {
  return (
    <div className="restaurants__page__wrapper">
       <SubNavbar />

      <div className="container restaurant-container">
      <Grid container spacing={0} >

      <Grid item xs={4} spacing={0} direction="column" justifyContent="center" alignItems="center">
        <Map />
        <FilterRestaurants/>
      </Grid>
      <Grid item xs={8} direction="column" justifyContent="center" alignItems="center" >
        <div className="restaurant_page_heading">
        <h1 className="restaurant_page_heading"><span>Tashkent</span> Restaurant</h1>
        </div>
      <SingleRestaurantCard />
      </Grid>

      </Grid> 
      </div> 
    </div>
  );
};

export default Restaurants;
