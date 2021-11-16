import React from "react";
import "./Map.css";
import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";

const Map = () => {
  return (
  
    <Link className="map" to='/map-page'>
     
      <Grid item xs={9}  >
        <div className="map-inner-wrapper">
            < img className="map-img"  src="/../img/googlemap.jpg" alt="google map" />
            <button className="ui_button secondary">
            <i className="fas fa-map-marker-alt"></i><span> View map</span>
            </button>
        </div>
         
      </Grid>
    
    </Link>
  );
};

export default Map;
