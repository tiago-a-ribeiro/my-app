import React from "react";
import Home from "./components/Home.js"
import Tutorial from "./components/Tutorial.js"
import Finance from "./components/Finance.js"
import About from "./components/About.js"
import './Routers.css';
import companyLogo from './media/logo_white.png';

// Add new components here 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Routers() {
  return (
    <div>
      <Router>
      <nav className="bd-navbar navbar is-info">
        <div className="navbar-brand is-flex-grow-0">
          <Link className="navbar-item" to="/">
            <img src={companyLogo} alt="RyeFinance" width="100%" height="25"/>
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start has-text-weight-semibold">
            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/tutorial">Tutorial</Link>
            <Link className="navbar-item" to="/finance">Finance</Link>
            <Link className="navbar-item" to="/about">About</Link>
            {/* Add new links here */}
          </div>
          <div className="navbar-end">
            <a href="/#" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </nav>
      
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tutorial" component={Tutorial} />
          <Route path="/finance" component={Finance} />
          <Route path="/about" component={About} />
          {/* Add paths here, link components (top of this file) */}
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default Routers;