import React, { Component } from 'react'

/*
A tutorial showing in short simple steps how to install the frameworks on your chosen platform. 
Back-end frameworks cannot be installed on the Ryerson servers, you will have to host on an external server. 
You can use shared hosting or better yet a VPS service or something similar, 
or set your own server on your own machine (must have permanant connection and be ip accessible). 
Digital Ocean is an inexpensive and versatile option. Provide installation instructions for both 
frameworks (if you use my link, you get a credit of a few dollars).
*/

class Tutorial extends Component {
  render() {
    return (
      <div className="block px-3 py-3">
        <div className="box">
          <h1 className="is-size-3 has-text-weight-semibold">Tutorial</h1>
          <hr className="my-3"></hr>
          <p>
            The two frameworks we used to develop this website are NodeJS and React. 
            We chose to use Digital Ocean as a hosting platform for our application.
            Below are the steps necessary to install and run an application using NodeJS and React, as well we
            will go over how to install other tools, libraries and API's we used in this application.
          </p>
          <div className="tile is-ancestor py-5">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child notification is-primary">
                  <p className="title">1) Install NodeJS</p>
                  <div className="content">
                    <ul className="is-size-5">
                      <li>The React front-end runs on top of NodeJS, we have to install that first.</li>
                      <li>Download the <a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">NodeJS</a> installer for your system and follow the instructions</li>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                  <p className="title">Middle tile</p>
                  <p className="subtitle">Sample text</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <p className="title">Last tile</p>
                  <p className="subtitle">Sample Text</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tutorial;