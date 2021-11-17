import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faHome} />
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default Home;