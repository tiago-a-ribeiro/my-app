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
                </article>
              </div>
            </div>
            <div className = "tile is-4">
              <div className = "tile is-child box">
              <article className = "has-text-centred">
                  <h2 className = "is-size-2 has-text-weight-semibold has-text-centered"> Thiago Ribeiro</h2>
                  <br/>
                  <img src = "https://cdn.discordapp.com/attachments/885919712498810880/916147536341925978/IMG_20211202_210235_000.jpg" style={{width:600,height:820}}/>
                  <h3 className = "is-size-3 has-text-weight-semibold has-text-centered"> Responsibilities </h3>
              </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;