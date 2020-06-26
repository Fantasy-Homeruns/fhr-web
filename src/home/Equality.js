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
                        Dear Fantasy Homeruns Community,
                      </p>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', margin: '20px' }}>
                        We at Fantasy Homeruns are listening to the events happening all around our country and stand with our fellow Americans to demand justice, opportunity and equality for all people.
                      </p>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', margin: '20px' }}>
                        Not many of you may know this, but my father, one of the co-founders of Fantasy Homeruns migrated to America when he was six years old.  Our family was living in Poland when World War II broke out.  They dealt with religious persecution and genocide first hand, fleeing their homes, families split up and many losing their lives in concentation camps.
                      </p>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', margin: '20px' }}>
                        We believe in the American dream, and being white, have been fortunate to grow our families and businesses and make a new home for our families in America.  But injustice still occurs in the world everyday and continues here.  It's time for us to take action.
                      </p>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', margin: '20px' }}>
                        Beginning today and every season forward, Fantasy Homeruns will operate as a not-for-profit organization donating 100% of all profits to the Jackie Robinson Foundation.  Jackie Robinson broke barriers in sports, media and business and was a baseball legend.  He was a leader who believed that opportunity is a right for everyone. We strongly endorse that philosophy.  We believe in the Jackie Robinson Foundation and their mission to facilitate change through funding education for our youth, investing in future generations and giving minority children the same opportunities given to me.
                      </p>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', margin: '20px' }}>
                        Currently, our community is not very large and our impact will be small.  This is why we also have decided to open source our software and ask for community help to build the next generation software for FHR.  This baseball website has been a side project of mine, along with my father for twelve years.  Unfortunately, I have not had the time or resources to invest in growing our community or software.  By open sourcing our projects, we can enable everyone and anyone in the community to directly contribute.
                      </p>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', margin: '20px' }}>
                        We thank you for being customers of Fantasy Homeruns and are love building this fun homerun game and supporting it every year.  We're excited that baseball is coming back in 2020 and hope you can join us.
                      </p>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', margin: '20px' }}>
                        We are committed in supporting Black Lives Matter, criminal justice reform and investing our youth's education.
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
