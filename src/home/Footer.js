import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const year = new Date().getFullYear();

class Footer extends Component {
  render() {
    return (
      <footer>
      <ul>
        <li>
          <a href="https://twitter.com/fantasyhomeruns" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/FantasyHomeRuns/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
        </li>
      </ul>
       <p>Copyright © 1984-{year}</p>
       <center>
          <a href='https://play.google.com/store/apps/details?id=com.urbaitel.www.fantasyhomeruns' target='_blank' rel="noopener noreferrer"><img src='https://lh3.googleusercontent.com/QefR571DEVM5dq-NrqSHenAS88RkmgqVbiJ8dxiD4JJMSYNWI-fZiOPgPm_yTEva=s170' height='50' alt='' /></a>
          &nbsp;&nbsp;
          <a href='https://itunes.apple.com/us/app/fantasy-homeruns/id1097273426' target='_blank' rel="noopener noreferrer"><img src='https://lh3.googleusercontent.com/p5-Kini9uj67FLq22D4wh9jRZKvYDlk7H3pk6Xzk_uF5EkFQbs1QxtoVpjG0s1Q_PwnmMQ=s170' height='50' alt='' /></a>
        </center>
      </footer>
    );
  }
}

export default Footer;
