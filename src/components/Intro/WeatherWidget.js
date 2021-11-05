import React from 'react';
import "./main.css"

const WeatherWidget = () => {
    return (
        <div className = 'weather__component'>
    
        <div class="row">
            <div class="column">
                <div class="weather-card"> <span class="icon"><img class="weather-img" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" /></span>
                    <div class="weather-title">
                        <p>Sydney</p>
                    </div>
                    <div class="temp">+20<sup>&deg;</sup></div>
                    <div class="row">
                        <div class="column4">
                            <div class="header">General</div>
                            <div class="value">Sunny</div>
                        </div>
                        <div class="column4">
                            <div class="header">Air pollution</div>
                            <div class="value">47</div>
                        </div>
                        <div class="column4">
                            <div class="header">Fire</div>
                            <div class="value">No</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        </div>
    );
};

export default WeatherWidget;