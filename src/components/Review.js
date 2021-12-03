import React, { Component } from 'react'

/*
Page 3. A short tutorial showing how to create a great looking page (or pages)
with text, images, and styles using your chosen Frameworks. 
The subject of your page(s) is entirely yours.
*/
class Review extends Component {
  render() {
    return (
      <div className="block px-3 py-3">
        <div className="box">
        <h1 className="is-size-3 has-text-weight-semibold"> Review </h1>
        <hr className="my-3"></hr>
          <div className = "title">
          </div>
          <p> 
            Here is our team members' review of our selected back and front ends.
          </p>
          <article class = "media px-3 py-6">
            <figure class = "media-left">
              <p class = "image is-128x128">
                <img src = "https://cdn.discordapp.com/attachments/885919712498810880/916147536341925978/IMG_20211202_210235_000.jpg" style={{width:128,height:170}}/>
              </p>
            </figure>
            <div class = "media-content">
              <div class = "content">
                <p>
                  <strong>Tiago Ribeiro</strong>
                  <br/> 
                    My expierience using React I would say is about neutral to neutral-positive. I was working
                    mostly on the back and front end and my responsibilities were setting up the project, organizing routing and
                    developing the Tutorial and Styling pages. As I was learning to use React I was slowly figuring out how the framework is organized and meant to be developed with. I like it's style but it can be quite difficult to learn if you aren't experienced with Javscript myself. React is meant to be used in a dynamic website setting where elements on the page are constantly changing and actions by the user change them immediately, in this case our website
                    doesn't fully meet that criteria so if given the chance to pick a different framework, I likely would to fit the static nature of our website. However we did make use of packages that are available through the of NodeJS's package manager (npm) to make use of animations, which was very easy to implement through ReactJS's dynamic nature.
                </p>
              </div>
            </div>
          </article>

          <article class = "media px-3 py-6">
            <figure class = "media-left">
              <p class = "image is-128x128">
                <img src = "https://cdn.discordapp.com/attachments/885919712498810880/916146240754941952/37740339_1848457898546973_8007523647839272960_n.jpeg" style={{width:128,height:170}}/>
              </p>
            </figure>
            <div class = "media-content">
              <div class = "content">
                <p>
                  <strong>Marco Bozic</strong>
                  <br/> 
                    This was my first time using React and overall I had a very positive experience. After spending some time learning what it's all about and then implementing 
                    Bulma as well, it was evident that we could make a very good website using this library and framework. React is very popular in the industry and one of my
                    favorite aspects of using React was that it makes it very easy to test and debug code. Everything compiles extremely quickly and I noticed how much faster
                    I got to test out code compared to all the other labs in this class. I was also a big fan of the presence of all the handy tools that come with it.
                    I am very excited to reapply these skills I've learned onto another project at some point in the future!
                </p>
              </div>
            </div>
          </article>

          <article class = "media px-3 py-6">
            <figure class = "media-left">
              <p class = "image is-128x128">
                <img src = "https://cdn.discordapp.com/attachments/440661911009492994/916182241594458142/image0.png" style={{width:128,height:170}}/>
              </p>
            </figure>
            <div class = "media-content">
              <div class = "content">
                <p>
                  <strong>Ernesto Siciliano</strong>
                  <br/> 
                    Overall, I had a very positive experience with React. Most of my experience relates to the usage of the Bulma framework, but within the React Library,
                    there were no further complications and Bulma worked within React perfectly. It's easy to see why React is the industry standard when it comes to Javascript
                    front end development. It was super easy to get started using the framework, and all the information I needed could be found online. I would definitely
                    look to use React for any projects I work on in the future.
                </p>
              </div>
            </div>
          </article>

        </div>
      </div>
    );
  }
}

export default Review;