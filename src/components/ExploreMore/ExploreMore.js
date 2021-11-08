import React from 'react';
import RestaurantCard from './RestaurantCard';
// import styled from 'styled-components';
import './ExploreMore.css'

const ExploreMore = () => {
    return (
        <div className='explore_more'>
            <div className='container'>
                <h2 className='explore_more__title component-heading'>You might like these</h2>
                <p  className='component-text'>More restaurants in <span className='local-city'>Tashkent</span></p>
                 <div className = 'explore_more__inner_wrapper'> 
                      <RestaurantCard />
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