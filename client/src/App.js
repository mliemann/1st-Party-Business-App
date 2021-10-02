import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./pages/cart/cart";
import Landing from "./pages/landing/landing";
import Dashboard from "./pages/stats/stats";
import Error from "./pages/error/error";
import Login from "./pages/login/login";
import menu from "./pages/menu/menu.js";
import Profile from "./pages/profile/profile";
import RestaurantSignup from "./pages/signuprest/signuprest";
import Contact from "./pages/contact/contact";
import SignUp from "./pages/signup/signup";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Forgot from "./pages/forgotlogin/forgotlogin";

// import PaymentPage from "./components/Payment/PaymentPage";
import { UserProvider } from "./providers/user";
// import Upload from './components/Upload/upload';
// import Dish from "../src/menu.json";
import "./App.css";
import StripeContainer from '../src/components/stripe/StripeContainer';
import { useState } from 'react';





function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <Router>
      <UserProvider>
        <Header />

        <Switch>
    
          <Route exact path="/" component={Landing} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/menu" component={menu} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/restaurant/signup" component={RestaurantSignup} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/checkout" component={StripeContainer} />
          <Route exact path="/forgotlogin" component={Forgot} />
          <Route path="*" component={Error} />
          
          
        </Switch>

        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
