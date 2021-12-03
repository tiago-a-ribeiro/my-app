import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';
import { fadeInUp, bounce, swing, headShake } from 'react-animations';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFontAwesome, 
  faFontAwesomeAlt, 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faChevronDown,
  faPaintBrush,
  faBrush
} from '@fortawesome/free-solid-svg-icons';

const FadeInUpAnimation = keyframes`${fadeInUp}`;
const BounceAnimation = keyframes`${bounce}`;
const SwingAnimation = keyframes`${swing}`;
const HeadShakeAnimation = keyframes`${headShake}`;

const FadeInUpDiv = styled.div`
  animation: 2s ${FadeInUpAnimation};
`;
const BounceDiv = styled.div`
  animation: infinite 3s ${BounceAnimation};
`;
const SwingDiv = styled.div`
  animation: infinite 6s ${SwingAnimation};
`;
const HeadShakeDiv = styled.div`
  animation: infinite 4s ${HeadShakeAnimation};
`;

/*
Page 3. A short tutorial showing how to create a great looking page (or pages)
with text, images, and styles using your chosen Frameworks. 
The subject of your page(s) is entirely yours.
*/
class Styling extends Component {
  render() {
    return (
      <div>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <FadeInUpDiv>
          <div class="my-6 columns is-centered">
            <div class="column is-4 mr-6">
              <h1 className="has-text-left has-text-weight-bold is-size-1 has-text-primary is-family-secondary" >
                How to make a website look great!
              </h1>
            </div>
            <div class="column is-6">
              <p className="has-text-grey has-text-centered is-size-3">
                One of the best ways to make a website look great is by making use of a <b>CSS library</b>. The most popular CSS library is Bootstrap but for this website we decided
                to make use of a different, pure CSS libary called <b className="has-text-primary">Bulma</b>.
              </p>
            </div>
          </div>
          <br /><br />
          <BounceDiv>
            <p class="has-text-centered is-size-1" ><FontAwesomeIcon icon={faChevronDown} /></p>
          </BounceDiv>
        </FadeInUpDiv>
        <br /><br /><br /><br />
        <section class="hero is-medium is-link">
          <div class="hero-body has-text-centered">
            <p class="title">
              How can Bulma make my site look good?
            </p>
            <br />
            <div class="columns is-centered">
              <div class="column is-6">
                <p class="subtitle">
                  Bulma comes with a library of tools that automatically styles elements for you.
                  To change elements all you have to do is add names to the class of elements and Bulma automatically changes multiple properties
                  of the element. CSS libraries are not only a great way to make a website look good, but also take a lot of the work out of your hands.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="hero is-medium is-danger">
          <div class="hero-body has-text-centered">
            <HeadShakeDiv>
              <p class="title">
                Animations...animations are cool.
              </p>
            </HeadShakeDiv>
            <br />
            <div class="columns is-centered">
              <div class="column is-6">
                <p class="subtitle">
                  Another great way of making a website look good is by using animations. React is awesome as many
                  packages have been created to easily add animations to your website. In this case we are using the <b>"react-animations"</b> package,
                  it allows you to wrap elements into animation div objects and every element in it gets the animation, very easy and fun to use!
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section class="hero is-medium is-white">
          <div class="hero-body has-text-centered">
            <p class="title">
              <FontAwesomeIcon icon={faPaintBrush} />&nbsp;&nbsp;&nbsp;Icons look great everywhere.&nbsp;&nbsp;<FontAwesomeIcon icon={faBrush} />
            </p>
            <br />
            <div class="columns is-centered">
              <div class="column is-6">
                <p class="subtitle">
                  Icons not only look good but are a great way to organize your website into sections and visually communicate to your
                  users what a part of your website leads to or does. The most popular icon library is <FontAwesomeIcon icon={faFontAwesome} /> Font Awesome, which we used
                  for this website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Styling;