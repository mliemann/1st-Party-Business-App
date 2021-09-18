import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart";
import Landing from "./pages/Landing/landing";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import RestaurantSignup from "./pages/RestaurantSignup";
import UserSignup from "./pages/UserSignup";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        
          <Header />
          <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/restaurant/signup" component={RestaurantSignup} />
            <Route exact path="/user/signup" component={UserSignup} />
            <Route component={Error404} />
          </Switch>
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
