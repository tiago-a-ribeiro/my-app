import React, { Component } from 'react'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faExternalLinkAlt 
} from '@fortawesome/free-solid-svg-icons'

//Images
import tut0 from '../media/tutorial_step0.png';
import tut1 from '../media/tutorial_step1.png';
import tut2 from '../media/tutorial_step2.png';
import tut3 from '../media/tutorial_step3.png';


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
                  <p className="title mb-3">1) Install Locally</p>
                  <hr className="my-2" />
                  <p className="is-size-5">
                    The React front-end runs on top of NodeJS, we have to install that first.
                    Download the <a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">NodeJS<FontAwesomeIcon icon={faExternalLinkAlt} transform="shrink-5" /></a> installer for your system and follow the instructions
                  </p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                  <p className="title mb-3">2) Hosting Setup</p>
                  <hr className="my-2" />
                  <p className="subtitle">
                    We chose to host our website using <b>Digital Ocean</b>. Our main reason for this is that Digital Ocean 
                    has an option to host a Web Application live from a repository. This took a lot of work
                    out of our hands because we do not need to manage a server. We have the steps below for setting up a Web App with Digital Ocean. 
                  </p>
                  <br/><br/>
                  <p className="subtitle">
                    1) First you want to select the "Deploy your source code on App Platform" option.
                  </p>
                  <img src={tut0} alt="RyeFinance"/>
                  <br/><br/>
                  <p className="subtitle">
                    2) Next you need to pick which repository your source code is hosted from, in our case we used Github.
                  </p>
                  <img src={tut1} alt="RyeFinance"/>
                  <br/><br/>
                  <p className="subtitle">
                    3) Afterwards, there are more configuration options, but the most important to point out is the type of site.
                    In our case we decided to use a static site as there isn't any need for our website to be a web service (write why maybe?).
                  </p>
                  <img src={tut2} alt="RyeFinance"/>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <p className="title mb-3">Last tile</p>
                  <hr className="my-2" />
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