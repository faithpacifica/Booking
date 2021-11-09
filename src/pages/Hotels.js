import React from "react";
import Grid from '@material-ui/core/Grid';

import "./Hotels.css";
//  import { Link } from 'react-router-dom';
import SubNavbar from "../components/Subnavbar/SubNavbar";
import Map from "../components/Map/Map";
import FilterHotels from "../components/FilterHotels/FilterHotels";
import SingleHotel from "../components/SingleHotel/SingleHotel";

const Hotels = () => {
  return (
      <div  className="hotels_page">
            <SubNavbar />
          <div className="container">
            <Grid container spacing={2} >

            <Grid item xs={4} spacing={1} direction="column" justifyContent="center" alignItems="center">
                <Map />
                <FilterHotels />
            </Grid>

            <Grid item xs={8} direction="column" justifyContent="center" alignItems="center" >
                <SingleHotel />
            </Grid>

            </Grid> 
          </div>
      

      </div>
    
  );
};

export default Hotels;
