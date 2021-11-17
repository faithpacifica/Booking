import React from 'react';
import './MapBody.css'
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from  '@material-ui/core';
// import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// import Rating from '@material-ui/lab';

// import useStyles from './MapBody.css';


const MapBody = () => {
    // const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)')

    const coordinates = {lat : 0, lng : 0};
    const MY_API =  `AIzaSyB_cD8fEpqjxt8gxvviKjg3uO66KzO2L6I`
    return (
        <div 
        // className='classes.mapContainer'
        >
            <GoogleMapReact
            bootstrapURLKeys= {{key : MY_API }}
            defaultCenter = {coordinates}
            center = {coordinates}
            defaultZoom = {14}
            margin = {[50, 50, 50, 50]}
            options = {''}
            onChange = {''}
            onChildClick = {''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default MapBody
