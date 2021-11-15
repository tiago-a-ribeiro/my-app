import React from "react";
import Home from "./components/Home.js"
import Finance from "./components/Finance.js"
import About from "./components/About.js"
import './index.css';
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
      <nav>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/finance">Finance</Link></p>
        <p><Link to="/about">About</Link></p>
        {/* Add new links here */}
      </nav>
      
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
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