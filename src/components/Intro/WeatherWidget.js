import React from 'react';
import "./weather.css";
import {useState} from "react";

const WeatherWidget = () => {
    const Weatherapi = `4497860ea86e515850b9a3269d67f6b0`;
    const [weatherData, setWeatherData] = useState([{}]);
    const [city, setCity] = useState("");
   
   
    const getWeather = (event) =>{
        if (event.key == "Enter"){
          fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Weatherapi}`).then
          (res =>res.json()
          ).then (data =>{ 
            //   console.log(Window.navigatior.geolocation)
            setWeatherData(data);
            setCity("")
          }
          
          )  
        }
      }


    return (
        
        <div className = 'weather__component'>
               <input className="weather-input" type="text" placeholder="Enter City?" 
               onChange={e=> setCity(e.target.value)} value={city} onKeyPress={getWeather} />
               {typeof weatherData.main === 'undefined' ? (
                   <div>
                       <p>Welcome to weather app! Enter in a city to get the weather of.</p>
                   </div>
               ): (
               
                 <div class="column4">
                <div class="weather-card"> <span class="icon"><img class="weather-img" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" /></span>
                     <div className="row"> 
                     <div class="weather-title">  
                      <p className="weather-name">{weatherData.name}</p>
                     <div class="weather-temp">{Math.round(weatherData.main.temp)}<sup>&deg;</sup></div>
                    </div>
                        <div class="column4">
                            <div class="weather-descrip">General</div>
                            <div class="value">{weatherData.weather[0].main}</div>
                        </div>

                        {/* <div class="column4">
                            <div class="header">Air pollution</div>
                            <div class="value">{}</div>
                        </div>
                        <div class="column4">
                            <div class="header">Fire</div>
                            <div class="value">No</div>
                        </div> */}
                    </div>
                    </div>
               
            </div> 
             
        )}
        {weatherData.cod === "404" ? (
            <p>City not found.</p>
        ): (
          <>
          </>  
        )}
  
     
    
        </div>
    );
};

export default WeatherWidget;