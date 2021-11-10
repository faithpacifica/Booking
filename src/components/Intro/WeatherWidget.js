import React from 'react';
import "./Weatherwidget.css";
import {useState, useEffect} from "react";

const WeatherWidget = ({lat, long}) => {
    // const REACT_APP_API_URL = `https://api.openweathermap.org/data/2.5`
    const Weatherapi = `4497860ea86e515850b9a3269d67f6b0`;
    const [weatherData, setWeatherData] = useState([{}]);
    const [city, setCity] = useState("");

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
        if(lat != 0 && long != 0) {
            fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&appid=${Weatherapi}`)
                .then(res =>res.json())
                .then(result =>{
                    setWeatherData(result);
                });
        }
        
        
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
               
                <div className="column4"> 
                <div className="weather__card"> <span className="icon"><img className="weather__img"   src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}  /></span>  
                    <div className="weather__title">  
                    <p className="weather__name">{weatherData.name}<img className="weather__location-img" src="img/Locationred.png"/></p>
                    <div className="weather__temp">{Math.round(weatherData.main.temp)}<sup>&deg;</sup></div>
                    <div className="weather__temp">{weatherData.weather[0].main}</div>
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