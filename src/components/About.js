import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className="block px-3 py-3">
        <div className="box">
          <div className = "title">
            <h1 className="is-size-4 has-text-weight-semibold"> About </h1>
            <hr className="my-3"></hr>
          </div>
          <div className = "tile is-ancestor py-3">
            <div className = "tile is-4 is-vertical">
              <div className = "tile is-child box">
                <article className = "has-text-centred">
                  <h2 className = "is-size-2 has-text-weight-semibold has-text-centered"> Ernesto Siciliano </h2>
                  <br/>
                  <img src = "https://cdn.discordapp.com/attachments/440661911009492994/916182241594458142/image0.png" style={{width:600,height:820}}/>
                  <h3 className = "is-size-3 has-text-weight-semibold has-text-centered"> Responsibilities </h3>
                  <br/>
                  <p>
                    I was responsible for completing the Home, Review, and Responsibilities pages. My main goal was to make the pages I worked on look clean and professional 
                    using the various tools and frameworks at my disposal, and I believed I was successful in that, especially considering it was my first time using most of this
                    software. An added bonus was learning how to use Github. 
                  </p>
                </article>
              </div>
            </div>
            <div className = "tile is-4 px-3">
              <div className = "tile is-child box">
                <article className = "has-text-centred">
                  <h2 className = "is-size-2 has-text-weight-semibold has-text-centered"> Marco Bozic </h2>
                  <br/>
                  <img src = "https://cdn.discordapp.com/attachments/916205918235009026/916210379619717120/unknown.png" style={{width:600,height:820}}/>
                  <h3 className = "is-size-3 has-text-weight-semibold has-text-centered"> Responsibilities </h3>
                  <br/>
                  <p>
                    Most of my responsibilities for this assignment were working on the main Finance page. When we were brainstorming what we wanted to do on this assignment, 
                    I came up with the idea that we should have a page that tracks how the world's richest people's wealth changes live so that investors would have comprehensive 
                    information on what their CEOs are doing. Typically a lot of estimates online are inaccurate and outdated, so we thought it would be interesting have their net 
                    worth change in real-time according to all the public knowledge out there (stocks sold, options granted, etc.) I wanted to make this the most comprehensive website
                    out there by even adding sections for shares sold today, controversies relating to the CEO or company, and even having the numbers update within seconds instead of 
                    daily but unfortunately, I ran out of time. I do plan on adding these features in my own time because I think this will help a lot of investors who invest in these 
                    fortune 500 companies.
                  </p>
                </article>
              </div>
            </div>
            <div className = "tile is-4">
              <div className = "tile is-child box">
              <article className = "has-text-centred">
                  <h2 className = "is-size-2 has-text-weight-semibold has-text-centered"> Tiago Ribeiro</h2>
                  <br/>
                  <img src = "https://cdn.discordapp.com/attachments/885919712498810880/916147536341925978/IMG_20211202_210235_000.jpg" style={{width:600,height:820}}/>
                  <h3 className = "is-size-3 has-text-weight-semibold has-text-centered"> Responsibilities </h3>
                  <br/>
                  <p>
                    My goal was to learn how to develop a react application from scratch and get it functioning as a website anyone could access. To achieve this I took the 
                    responsibility of developing the code base and routing of the web app and then creating the server and hosting it. I also wanted to learn how to code with
                    React so I worked on two pages, the Styling page and the Tutorial page.
                  </p>
              </article>
              </div>
            </div>
          </div>
          <div className = "title">
            <h1 className="is-size-4 has-text-weight-semibold"> References </h1>
            <hr className="my-3"></hr>
          </div>
          <a href="https://bulma.io/" target="_blank">Bulma</a>
          <br/>
          <a href="https://github.com/FormidableLabs/react-animations" target="_blank">React Animations</a>
          <br/>
          <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>
          <br/>
          <a href="https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" target="_blank">Full React Tutorial</a>
          <br/>
          <a href="https://v5.reactrouter.com/web/guides/quick-start" target="_blank">Declaritive Routing For React</a>
          <br/>
          <a href="https://rapidapi.com/blog/how-to-use-an-api-with-react/" target="_blank">How To Use an API With React</a>
          <br/>
          <a href="https://www.w3schools.com/whatis/whatis_npm.asp" target="_blank">What Is NPM</a>
          <br/>
          <a href="https://www.koombea.com/blog/react-pros-and-cons-what-are-the-advantages-and-disadvantages-of-reactjs/" target="_blank">Pros and Cons of ReactJS</a>
          <br/>
          <a href="https://www.npmtrends.com/angular-vs-react-vs-vue" target="_blank">Javascript Livrary Downloads Chart</a>
          <br/>
          <a href="https://www.hntrends.com/2019/dec-another-year-on-top-for-react.html" target="_blank">Software Hiring Trends Grapht</a>
          
        </div>
      </div>
    );
  }
}

export default About;