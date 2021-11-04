import React from 'react';
import { Link } from 'react-router-dom';

const CityCard = () => {
    return (
        <Link to='/city:id'>
            <div className='city_card'>
                City Card Component
            </div>
        </Link>
    );
};

export default CityCard;