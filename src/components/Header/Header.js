import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";
import About from "../About/About";
import Home from "../Home/Home";

const Header = () => {
  return (
    <Router>
      <div>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </div>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route path="/About">
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;
