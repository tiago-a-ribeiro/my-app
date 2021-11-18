import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import reactLogo from '../media/react.png';

class Home extends Component {
  render() {
    return (
      <div className="block px-3 py-3">
        <div className="box">
          <div className = "title">
          <h1>Home Page</h1>
          </div>
          <p> The front-end program we’ve chosen to use for this project is React. React is an open-source Javascript library,
            and one of the most downloaded front-ends in the industry.
          </p>
          <div className = "tile is-ancestor py-6">
            <div className = "tile is-3 is-vertical">
              <div className = "tile is-child box">
                <img src = {reactLogo} alt="React logo"/>
              </div>
            </div>
            <div className = "tile is-3 px-3">
              <div className = "tile is-child box">
                <div className = "title has-text-centered py-5">
                  <p>Release Date:</p>
                  <p>May 29th, 2013</p>
                </div>
                <div className = "title has-text-centered py-5">
                  <p>Author:</p>
                  <p>Jordan Walke</p>
                </div>
                <div className = "title has-text-centered py-5">
                  <p>Developer:</p>
                  <p>Meta(Formerly Facebook)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;