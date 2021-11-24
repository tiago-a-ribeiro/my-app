import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import reactLogo from '../media/react.png';
import jordanWalke from '../media/jordanWalke.jpg';
import react_graph from '../media/react_graph.png';
import react_graph2 from '../media/react_graph2.png';

/*
Page 1. A summary snapshot presentation of the chosen FRONTEND Framework: 
Popularity, strengths, weaknesses, which developers mostly use it and for what kind of websites.

A summary snapshot presentation of the chosen BACKEND Framework: 
Popularity, strengths, weaknesses, which developers mostly use it and for what kind of websites.
*/ 
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
            <div className = "tile is-3">
              <div className = "tile is-child box">
                <img src = {jordanWalke} alt="Jordan Walke portrait"/>
                <div className = "caption has-text-centered">
                  <p>Pictured above: Jordan Walke</p>
                </div>
              </div>
            </div>
          </div>
          <p> For the past few years, React has consitantly been the most downloaded of the big 3 npm packages by a wide margin. It is also the most searched for according
            to google trends, and according to a stateofjs survey, 89% of pragrammers are interested in using it. In addition to this, react is sought after in the job market.
            According to hntrends, 29.4% of job postings in 2020 sought programmers with knowledge of React. 
          </p>
          <div className="tile box is-9 py-5">
            <img src = {react_graph} alt="Graph of react downloads"/>
          </div>
          <div className="tile box is-9 py-5">
            <img src = {react_graph2} alt="Graph of react downloads"/>
          </div>
          <p> While react is extremely popular, it isn't perfect. Here are the advantages and disadvantages of React. 
          </p>
          <div className = "tile is-ancestor py-6">
            <div className = "tile is-4 is-vertical">
              <div className = "tile is-child box">
                <div className = "title has-text-centered py-5">
                  <p>Advantages:</p>
                </div>
              </div>
            </div>
            <div className = "tile is-4 is-vertical">
              <div className = "tile is-child box">
                <div className = "title has-text-centered py-5">
                  <p>Disdvantages:</p>
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