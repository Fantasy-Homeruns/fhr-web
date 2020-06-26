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
                            <div className="get-started-outer" style={{ fontFamily: 'Raleway-Black'}}>
                              <a href="https://admin.fantasyhomeruns.com/signup" className="get-started">GET STARTED!</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" style={{ marginTop: '-60px', marginBottom: '-100px' }}>
              <div className="row how-it-work-outer">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 how-it-work pad-none">
                  <p style={{ fontFamily: 'Arial', fontSize: '13pt', color: '#d1d1d1', margin: '20px' }}>
                    Fantasy Homeruns is now a not-for-profit organization donating 100% of its profits to the Jackie Robiinson Foundation.  FHR's call to action is to invest in future generations through education.  We're open sourcing our software and asking the community to contribute and help.
                  </p>
                  <p>
                    <div className="get-started-outer" style={{ fontFamily: 'Raleway-Black', marginTop: '10px', marginBottom: '20px' }}>
                      <a href="/equality" className="get-started">READ WHY FROM OUR FOUNDER</a>
                    </div>
                  </p>
                  <p style={{ fontFamily: 'Arial', fontSize: '13pt', color: '#d1d1d1', margin: '20px' }}>
                    Baseball is Back!   The shortened season brings its own challenges on drafting homerun players.  Get in touch with friends and family and sign up your league today!   We're fully operational.. let's play!
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
                    <p style={{ fontFamily: 'Raleway-Black', color: '#d1d1d1' }}>already have an account?</p>
                  </div>
                  <div className="learn-more-outer-right" style={{ fontFamily: 'Raleway-Black'}}>
                    <a className="red-learn-more" href="https://admin.fantasyhomeruns.com/log-in">
                      LOGIN NOW
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
