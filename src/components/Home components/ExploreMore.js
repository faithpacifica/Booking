import React from 'react';
import CityCard from './CityCard'

const ExploreMore = () => {
    return (
        <div className='explore_more'>
            <div className='container'>
                <h2 className='explore_more__title'>Explore more destinations</h2>
                 <div className = 'explore_more__inner_wrapper'> 
                      <CityCard />
                      <CityCard />
                      <CityCard />
                      <CityCard />
                      <CityCard />
                 </div>
                
            </div>

        </div>
    );
};

export default ExploreMore;