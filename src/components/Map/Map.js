import React from "react";
import "./Map.css";
import { Link } from 'react-router-dom';

const Map = () => {
  return (
    //   TODO:KOMPONENTMI yoki Alohida Page ochamizmi?
    <Link className="map" to='/map-page'>
      <div className="container">
          MAP COMPONENT
      </div>
    </Link>
  );
};

export default Map;
