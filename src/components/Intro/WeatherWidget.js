import React from 'react';
import "./weather.css";
import {useState, useEffect} from "react";

const WeatherWidget = () => {
    const Weatherapi = `4497860ea86e515850b9a3269d67f6b0`;
    const [weatherData, setWeatherData] = useState([{}]);
    const [city, setCity] = useState("");
    const [img, setImg] = useState("");

    const getWeather = (event) =>{
        if (event.key == "Enter"){
          fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Weatherapi}`).then
          (res =>res.json()
          ).then (data =>{ 
            //   console.log(Window.navigatior.geolocation)
            setWeatherData(data);
            setCity("")  ;
            setImg("");
            
            
          }
          
          )  
        }
      }
     


    return (
        
        <div className = 'weather__component'>
               <input className="weather__input" type="text" placeholder="Enter City?" 
               onChange={e=> setCity(e.target.value)} value={city} onKeyPress={getWeather} />
               {typeof weatherData.main === 'undefined' ? (
                   <div>
                       <p>Welcome to weather app! Enter in a city to get the weather of.</p>
                   </div>
               ): (
               
                 <div class="column4">
                <div class="weather__card"> <span class="icon"><img class="weather__img"   src={weatherData.main.icon}  /></span>
                     <div className="row"> 
                     <div class="weather__title">  
                      <p className="weather__name">{weatherData.name}<img className="weather__location-img" src="img/Locationred.png"/></p>
                     <div class="weather__temp">{Math.round(weatherData.main.temp)}<sup>&deg;</sup></div>
                    </div>
                        <div class="column4">
                            <div class="weather__descrip">General</div>
                            <div class="weather__temp">{weatherData.weather[0].main}</div>
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