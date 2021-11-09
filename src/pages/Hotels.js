import React from 'react';
import './Hotels.css';
 import { Link } from 'react-router-dom';
 import SubNavbar from '../Subnavbar/Subnavbar';
 import Map from '../components/Map/Map';
 import FilterHotels from '../components/FilterHotels/FilterHotels';
 import SingleHotel from '../components/SingleHotel/SingleHotel';

const Hotels = () => {
    return (
        <Link className="hotels_page" to='/hotels'>
            <SubNavbar />
            <Map />
            <FilterHotels />
            <SingleHotel />
        </Link>
    );
};

export default Hotels;