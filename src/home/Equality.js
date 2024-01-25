import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeHeader from './Header';
import Footer from './Footer'

class Equality extends Component {
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
                       <h1>Equality for All</h1>
                     </div>
                   </div>
                 </div>
               </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dashboard-inner pad-none">
                  <div className="template-detail-box" style={{ color: '#fff' }}>
                    <div className="equality">
                      <p>
                        June 27, 2020
                      </p>
                      <p>
                        Dear Fantasy Homeruns Community,
                      </p>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', margin: '20px' }}>
                        We at Fantasy Homeruns stand with our fellow Americans to demand justice, opportunity and equality for all people.
                      </p>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', margin: '20px' }}>
                        Beginning today and every season forward, Fantasy Homeruns will operate as a not-for-profit organization donating 100% of all profits.  From 2020-23, we donated to the Jackie Robinson Foundation.  Jackie Robinson broke barriers in sports, media and business and was a baseball legend.  He was a leader who believed that opportunity is a right for everyone. We strongly endorse that philosophy.  We believe in the Jackie Robinson Foundation and their mission to facilitate change through education and giving people the same opportunities given to us.  Starting in 2024, we plan to donate profits to other organizations and will continue the not-for-profit mission.
                      </p>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', margin: '20px' }}>
                        We are seeking to grow our community to have greater impact.  We invite you to join our open source community to build the next generation software for FHR.  By open sourcing our projects, we hope to enable everyone and anyone in the community to directly contribute in support of this mission.
                      </p>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', margin: '20px' }}>
                        We thank you for being customers of Fantasy Homeruns and love building this fun homerun game every year.  We're excited that baseball is coming back in 2020 and hope you can join us.
                      </p>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', margin: '20px' }}>
                        With the best regards,<br/>
                        Marc Urbaitel
                      </p>
                      <br/>
                      <a href='https://www.jackierobinson.org/event/donatenow/' target='_blank' className='btn btn-large btn-primary' rel="noopener noreferrer"><b>DONATE to Jackie Robinson Foundation</b></a>
                      &nbsp; &nbsp;
                      <Link to="/jackie-robinson" className="btn btn-large btn-secondary">Watch a Video about JRF</Link>
                      &nbsp; &nbsp;
                      <Link to="/open-source" className="btn btn-large btn-warning">JOIN our Community</Link>
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

export default Equality;
