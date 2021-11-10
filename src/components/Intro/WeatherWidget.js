import React from 'react';
import "./WeatherWidget.css";
import {useState, useEffect} from "react";

const WeatherWidget = () => {
    // const REACT_APP_API_URL = `https://api.openweathermap.org/data/2.5`
    const Weatherapi = `4497860ea86e515850b9a3269d67f6b0`;
    const [weatherData, setWeatherData] = useState([{}]);
    const [city, setCity] = useState("");
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    // const [data, setData] = useState([]);

    const getWeather = (event) =>{ 

        if (event.key == "Enter"){
          fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Weatherapi}`)
          .then(res =>res.json()
          ).then (data =>{ 
            setWeatherData(data);
            setCity("")  ;
            
          }
          
          )  
        }
      }

    useEffect(() => {
        
        navigator.geolocation.getCurrentPosition(function(position){
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
        
    }, []);
     
    useEffect(() => {
        
        fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&appid=${Weatherapi}`)
            .then(res =>res.json())
            .then(result =>{
                setWeatherData(result);
            });
        
    }, [lat, long]);
        
        
   
    
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
                <div class="weather__card"> <span class="icon"><img class="weather__img"   src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}  /></span>  
                    <div class="weather__title">  
                    <p className="weather__name">{weatherData.name}<img className="weather__location-img" src="img/Locationred.png"/></p>
                    <div class="weather__temp">{Math.round(weatherData.main.temp)}<sup>&deg;</sup></div>
                    <div class="weather__temp">{weatherData.weather[0].main}</div>
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