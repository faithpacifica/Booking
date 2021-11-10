import React from 'react';
import RestaurantCard from './RestaurantCard';
// import styled from 'styled-components';
import './HomeRestaurants.css';

import {useState, useEffect } from 'react';

const getApiOptions = {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
		"x-rapidapi-key": "617581803fmshd0bc5f048941cabp138c17jsnce730a8b802f"
	}
};

const HomeRestaurants = ({lat, long}) => {

    const [restaurantList, setRestaurantList] = useState([]);


    useEffect(()=>{
        if(lat != 0 && long !=0) {
            fetch(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${long}&limit=50&currency=USD&lang=en_US`, getApiOptions )
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data.data);
                setRestaurantList(data.data);
                
            })
            .catch(err => {
                console.error(err);
            });
        }


    }, [lat, long]);



    return (
        <div className='main-page-accomodation'>
            <div className='container'>
                <h2 className='main-page-accomodation__title component-heading'>You might like these</h2>
                <p  className='component-text'>More restaurants in <span className='local-city'>Tashkent</span></p>
                 <div className = 'main-page-accomodation__inner_wrapper'> 
                  {restaurantList.map((el, i)=>(<div key={i}><RestaurantCard restaurantobj={el} /></div>))} 
                 </div>
                
            </div>

        </div>
    );
};

export default HomeRestaurants;