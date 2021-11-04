import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyTrips from "./pages/MyTrips";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/my-trips">
            <MyTrips />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/restaurants">
            <Restaurants />
          </Route>

          <Route path="/review">
            <Review />
          </Route>

          <Route path="/sign-in">
            <SignIn />
          </Route>

          <Route path="/things">
            <ThingsToDo />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
