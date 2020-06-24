import React, { Component } from 'react';
import HomeHeader from './Header';
import './OpenSource.scss';
import Footer from './Footer'

class OpenSource extends Component {
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
                       <h1>Join Our Community</h1>
                     </div>
                   </div>
                 </div>
               </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dashboard-inner pad-none">
                  <div className="template-detail-box" style={{ color: '#fff' }}>
                    <div style={{ margin: '20' }}>
                      <h4>Help build the next generation of FHR software.</h4>
                      <br/>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', color: '#d1d1d1' }}>
                        Fantasy Homeruns is a not-for-profit baseball game that tracks one statistic, homeruns.  FHR is a season long game.   Recently in 2020, FHR decided to open source and collaborate with the community to build the next generation of FHR using serverless for API and latest React for the web application.
                      </p>
                      <br/>
                      <h4>Contribute</h4>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', color: '#d1d1d1' }}>
                        We are very excited to collaborate with you.<br/>
                        We're just getting started.  You can review our Open Issues in Github, fork the repos locally, create new feature branches and submit them for review.  We encourage all developers to include quality tests with all new features and improve the tests we currently have.
                      </p>
                      <br/>
                      <h4>Our new API and Web Application</h4>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', color: '#d1d1d1' }}>
                        We're in the beginning stages of a new serverless API & web application.<br/>
                        The serverless API runs in AWS with API Gateway, Lambdas, SQS, DynamoDB and is written with Javascript.  The new web application is the latest and greatest React App built from the create-react-app project.
                      </p>
                      <br/>
                      <h4>Mobile Applications Help Needed</h4>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', color: '#d1d1d1' }}>
                        We would like to build native mobile applications.<br/>
                        Our current mobile apps are web-based and we're looking for some contributers to lead an Android and iOS app projects.
                      </p>
                      <br/>
                      <h4>Join the Conversation on Slack</h4>
                      <p style={{ fontFamily: 'Arial', fontSize: '13pt', color: '#d1d1d1' }}>
                        Collaborate with us on Slack!  Click the button below.
                      </p>
                      <br/>
                      <a href='https://github.com/Fantasy-Homeruns' target='_blank' className='btn btn-large btn-primary' rel="noopener noreferrer"><b>JOIN US ON GITHUB</b></a>
                      &nbsp;&nbsp;&nbsp;
                      <a href='https://join.slack.com/t/fantasyhomeruns/shared_invite/zt-f5ldlv5z-gcEyGgJtVm1futrhmQ0ZiQ' target='_blank' className='btn btn-large btn-primary' rel="noopener noreferrer"><b>JOIN OUR SLACK COMMUNITY</b></a>
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

export default OpenSource;
