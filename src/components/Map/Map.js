import React from "react";
import "./Map.css";
import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";

const Map = () => {
  return (
  
    <Link className="map" to='/map-page'>
     
      <Grid item xs={9}  >
          < img className="map-img"  src="/../img/googlemap.jpg" alt="" />
      </Grid>
    
    </Link>
  );
};

export default Map;
