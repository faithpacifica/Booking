import React from 'react';
import { Link } from 'react-router-dom';

const CityCard = () => {
    return (
        <Link to='/city'>
            <div className='restaurant_card'>
                City Card Component
            </div>
        </Link>
    );
};

export default CityCard;