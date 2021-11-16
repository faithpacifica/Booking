import React from 'react';
import './AddHotels.css';
import Grid from "@material-ui/core/Grid";
import ListingToolbar from '../components/ListingToolbar/ListingToolbar';
import AddHotelsBody from '../components/AddHotelsBody/AddHotelsBody';

const AddHotels = () => {
    return (
        <div className= 'add-hotels'>
           <Grid container spacing={0}>
        
        <Grid item xs={2}
          spacing={0}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <ListingToolbar />
        </Grid>

        <Grid
          item
          xs={10}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
         
          <AddHotelsBody />
        </Grid>
      </Grid>
        </div>
    );
};

export default AddHotels;