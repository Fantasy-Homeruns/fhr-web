import React, { Component } from 'react';
import HomeHeader from './Header';
import './Jackie.scss';
import Footer from './Footer'

class Jackie extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid template-main pad-none responsive-screen">
        <HomeHeader />
        <div id="content">
          <div className="container">
             <div className="row margin-none">
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center responsive-screen-block">
                 <div className="container">
                   <div className="row faq-banner">
                     <div>
                       <h1>FHR Donates to JRF</h1>
                     </div>
                   </div>
                 </div>
               </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dashboard-inner pad-none">
                  <div className="template-detail-box" style={{ color: '#fff' }}>
                    <div style={{ margin: '20' }}>
                      <p>
                        Starting in the 2020 Season and for every season after, Fantasy Homeruns will operate as a not-for-profit organization, donating all profits to the Jackie Robinson Foundation.
                      </p>
                      <br/>
                      <p>
                        Here's a short video about the Jackie Robinson Foundation.
                      </p>
                      <div className="videoWrapper">
                        <iframe width="420" height="315" title="JRF" src="https://www.youtube.com/embed/rIGdxAqHrIM" frameBorder="0" allowFullScreen></iframe>
                      </div>

                      <br/>
                      <center>
                        <h3><a href='http://www.jackierobinson.org/' target='_blank' rel="noopener noreferrer" style={{ color: '#fff'}}>Find out more on JackieRobinson.org</a></h3>
                        <br/>Disclaimer Notice: FantasyHomeruns.com is not affiliated with The Jackie Robinson Foundation.
                      </center>
                    </div>
                   </div>
                </div>
              </div>
            </div>
        </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Jackie;
