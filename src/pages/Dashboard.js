import React from "react";
import "./Dashboard.css";
import Grid from "@material-ui/core/Grid";
import ListingToolbar from "../components/ListingToolbar/ListingToolbar";
import DashboardBody from "../components/DashboardBody/DashboardBody";

const Dashboard = () => {
  return (
    <div className="dashboard">
    
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
         
          <DashboardBody />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
