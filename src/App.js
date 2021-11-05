import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Home components/Header'
import Footer from "./components/Home components/Footer";
import MyTrips from "./pages/MyTrips";
import Home from "./pages/Home";
import Register from './pages/Register';
import Restaurants from './pages/Restaurants';
import Review from './pages/Review';
import SignIn from './pages/SignIn';
import ThingsToDo from './pages/ThingsToDo';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Routes>
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
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
