import React from 'react';
import RestaurantCard from './RestaurantCard';
// import styled from 'styled-components';
import './Accomodation.css'

const ExploreMore = () => {
    return (
        <div className='main-page-accomodation'>
            <div className='container'>
                <h2 className='main-page-accomodation__title component-heading'>You might like these</h2>
                <p  className='component-text'>More restaurants in <span className='local-city'>Tashkent</span></p>
                 <div className = 'main-page-accomodation__inner_wrapper'> 
                      <RestaurantCard />
                      <RestaurantCard />
                      <RestaurantCard />
                      <RestaurantCard />
                 </div>
                
            </div>

        </div>
    );
};

export default ExploreMore;