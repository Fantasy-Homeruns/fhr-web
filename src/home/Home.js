import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.scss';
import HomeHeader from './Header';
import Footer from './Footer'
import howItWork from '../images/how-it-work.png';
import howItWork2 from '../images/how-it-work-2.png';
import howItWork3 from '../images/how-it-work-3.png';
import borderRed from '../images/border-red.png';
import borderRed2 from '../images/border-red-2.png';

class Home extends Component {
  render() {
    let stats = "";
    return (
      <div>
        <section className="container-fluid main-outer pad-none responsive-screen">
        <div id="content">
          <HomeHeader />
          <div className="index">
            <div className="container">
              <div className="row">
                 <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 pad-none" >
                    <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                      <div className="carousel-inner text-center">
                        <div className="item active">
                          <div className="row">
                           <div className="col-lg-12 col-lg-12 col-lg-12 col-lg-12 slider-block pad-none">
                            <div className="row">
                               <h1><img src={borderRed2} alt="" className="top-border" />
                               <p><span>FANTASY BASEBALL</span> SIMPLIFIED</p>
                               <img src={borderRed} alt="" className="bottom-border" /></h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row how-it-work-outer">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 how-it-work pad-none">
                  <p style={{ fontFamily: 'Raleway-Black', color: '#d1d1d1' }}>
                    Who's READY for some baseball??!   Everyone at FHR sure is!<br/>
                    FHR will be BACK ONLINE and ready for your draft and the season once MLB defines it.  <br/>
                    Feel free to <a href="mailto:support@fantasyhomeruns.com" target="_blank" rel="noopener noreferrer">email us</a> with any questions.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row how-it-work-outer">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 how-it-work pad-none">
                <ul className="list-unstyled">
                  <li>
                    <div className="work-inner">
                      <Link to="/howitworks"><img src={howItWork} alt="How it Works" /></Link>
                      <p style={{ fontFamily: 'Raleway-Black', color: '#d1d1d1' }}>how does <br/>it work?</p>
                    </div>
                    <div className="learn-more-outer-left" style={{ fontFamily: 'Raleway-Black'}}>
                      <Link to="/howitworks" className="red-learn-more">learn more</Link>
                    </div>
                  </li>
                  <li>
                  <div className="work-inner">
                    <Link to="/faq"><img src={howItWork2} alt="Frequently Asked Questions"/></Link>
                    <p style={{ fontFamily: 'Raleway-Black', color: '#d1d1d1' }}>frequently asked</p>
                  </div>
                  </li>
                  <li>
                  <div className="work-inner">
                    <Link to="/"><img src={howItWork3} alt="Log in" /></Link>
                    <p style={{ fontFamily: 'Raleway-Black', color: '#d1d1d1' }}>2020 Season Coming Soon</p>
                  </div>
                  <div className="learn-more-outer-right" style={{ fontFamily: 'Raleway-Black'}}>
                    <a className="red-learn-more" href="mailto:support@fantasyhomeruns.com" target="_blank" rel="noopener noreferrer">
                      EMAIL SUPPORT
                    </a>
                  </div>
                  </li>
                </ul>
                </div>
              </div>
              {stats}
            </div>
          </div>
        </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;

// <div className="get-started-outer" style={{ fontFamily: 'Raleway-Black'}}>
//   <Link to="/" className="get-started">GET STARTED</Link>
// </div>
// <div className="work-inner">
//   <Link to="/log-in"><img src={howItWork3} alt="Log in" /></Link>
//   <p style={{ fontFamily: 'Raleway-Black', color: '#d1d1d1' }}>already have an account?</p>
// </div>
// <div className="learn-more-outer-right" style={{ fontFamily: 'Raleway-Black'}}>
//   <Link to="/log-in" className="red-learn-more">login now</Link>
// </div>
