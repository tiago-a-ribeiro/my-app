import React from "react";
import Home from "./components/Home.js"
import Tutorial from "./components/Tutorial.js"
import Styling from "./components/Styling.js"
import Finance from "./components/Finance.js"
import Review from "./components/Review.js"
import About from "./components/About.js"
import './Routers.css';

// Icons
import companyLogo from './media/logo_white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, 
  faChartLine, 
  faGraduationCap, 
  faPalette,
  faPen,
  faUser
} from '@fortawesome/free-solid-svg-icons'

import { 
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons'

// Add new components here 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Routers() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <div>
      <Router>
      <nav className="bd-navbar navbar is-link is-spaced has-shadow">
        <div className="navbar-brand is-flex-grow-0">
          <Link className="navbar-item mr-5" to="/">
            <img src={companyLogo} alt="RyeFinance"/>
          </Link>
          <div onClick={() => {
              setisActive(!isActive);
            }} role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false"  data-target="mainNav">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div id="mainNav" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-start has-text-weight-semibold">
            <Link className="navbar-item mr-1" to="/"><FontAwesomeIcon icon={faHome} />&nbsp;Home</Link>
            <Link className="navbar-item mr-1" to="/tutorial"><FontAwesomeIcon icon={faGraduationCap} />&nbsp;Tutorial</Link>
            <Link className="navbar-item mr-1" to="/styling"><FontAwesomeIcon icon={faPalette} />&nbsp;Styling</Link>
            <Link className="navbar-item mr-1" to="/review"><FontAwesomeIcon icon={faPen} />&nbsp;Review</Link>
            <Link className="navbar-item mr-1" to="/finance"><FontAwesomeIcon icon={faChartLine} />&nbsp;Finance</Link>
            <Link className="navbar-item mr-1" to="/about"><FontAwesomeIcon icon={faUser} />&nbsp;About</Link>
            {/* Add new links here */}
          </div>
          <div className="navbar-end">
            
          <a className="navbar-item mr-1 has-text-weight-semibold" href="https://github.com/tiago-a-ribeiro/my-app" target="_blank"><FontAwesomeIcon className="is-size-5" icon={faGithubAlt} />&nbsp;Github</a>
          </div>
        </div>
      </nav>
      
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tutorial" component={Tutorial} />
          <Route path="/styling" component={Styling} />
          <Route path="/finance" component={Finance} />
          <Route path="/review" component={Review} />
          <Route path="/about" component={About} />
          {/* Add paths here, link components (top of this file) */}
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default Routers;