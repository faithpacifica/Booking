
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyTrips from "./pages/MyTrips";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Restaurants from "./pages/Restaurants";
import Review from "./pages/Review";
import SignIn from "./pages/SignIn";
import ThingsToDo from "./pages/ThingsToDo";
import NotFound from "./pages/NotFound";
import Hotels from "./pages/Hotels";
import GoogleMap from "./pages/GoogleMap";
import HotelInfo from './pages/HotelInfo';
import 'swiper/swiper-bundle.css';
import Dashboard from "./pages/Dashboard"
import AddRestaurants from "./pages/AddRestaurants";
import AddHotels from "./pages/AddHotels";


function App() {
  
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Routes>
          <Route
           path="/" element={<Home />} />

          <Route path="/add-hotels" element={<AddHotels />} />

          <Route path="/add-restaurants" element={<AddRestaurants />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/my-trips" element={<MyTrips />} />

          <Route path="/register" element={<Register />} />

          <Route path="/restaurants" element={<Restaurants />} />

          <Route path="/hotels" element={<Hotels />} />
          
          <Route path="/hotel-info" element={<HotelInfo />} />

          <Route path="/map-page" element={<GoogleMap />} />

          <Route path="/review" element={<Review />} />

          <Route path="/sign-in" element={<SignIn />} />

          <Route path="/things" element={<ThingsToDo />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
