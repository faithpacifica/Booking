import React from 'react';
import WeatherApp from './WeatherWidget';

const Intro = () => {
    return (
        <div className = 'intro'>
            <div className = 'container intro__container'>
                 This is Intro component 
                <input type="text" placeholder='Where To?' /> 
            </div>
           
            <div className='weather_app'><WeatherWidget /></div>
        </div>
    );
};

export default Intro;