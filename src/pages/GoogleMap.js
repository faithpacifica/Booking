import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import './GoogleMap.css'
import MapHeader from '../components/MapHeader/MapHeader';
import MapList from '../components/MapList/MapList';
import MapBody from '../components/MapBody/MapBody';


const GoogleMap = () => {
   
   
    return (
        <div className='container'>
            
                <CssBaseline />
                    <MapHeader />

            <Grid container spacing={2}>
                
                <Grid item xs={12} md={4}>
                    <MapList />
                </Grid>
                <Grid item xs={12} md={8}>
                    <MapBody />
                </Grid>
            </Grid>

        </div>
    );
};

export default GoogleMap;