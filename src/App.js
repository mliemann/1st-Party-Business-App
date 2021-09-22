import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./pages/cart/cart";
import Landing from "./pages/landing/landing";
// import Dashboard from "./pages/stats/stats";
// import Error404 from "./pages/Error404";
// import Home from "./pages/";
import Login from "./pages/login/login";
// import Menu from "./pages/menu/menu";
import Profile from "./pages/profile/profile";
import RestaurantSignup from "./pages/signuprest/signuprest";
import Contact from "./pages/contact/contact"
import SignUp from "./pages/signup/signup";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

function App() {
  return (
    <Router>
      <div>
        
          <Header />
          <div>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/cart" component={Cart} />
            {/* <Route exact path="/dashboard" component={Dashboard} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route exact path="/menu" component={Menu} /> */}
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/restaurant/signup" component={RestaurantSignup} /> 
            <Route exact path="/signup" component={SignUp} />
            {/* <Route component={Error404} /> */}
          </Switch>
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
