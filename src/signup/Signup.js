import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import HomeHeader from '../home/Header';
import './Signup.scss';
import { Row, Col } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Footer from '../home/Footer'

class Signup extends Component {

  constructor () {
    super();
    this.state = {
      fireRedirect: false
    }
  }

  validate(values) {
    let errors = {};
    let errorEmail = this.validateEmail(values.email);
    if (errorEmail) errors.email = errorEmail;
    if (!values.leagueName) errors.leagueName = "Required";
    if (!values.firstName) errors.firstName = "Required";
    if (!values.lastName) errors.lastName = "Required";
    if (!values.password) errors.password = "Required";
    if (values.password !== values.vpassword) errors.password = "Passwords must match!";
    if (!values.address) errors.address = "Required";
    if (!values.zip) errors.zip = "Required";
    if (!values.cc) errors.cc = "Required";
    if (!values.csc) errors.csc = "Required";
    if (!values.expmon) errors.expmon = "Required";
    if (!values.expyear) errors.expyear = "Required";
    return errors;
  }

  validateEmail(input) {
    if (!input) {
      return 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input)
    ) {
      return 'Enter a valid email address';
    }
    return false;
  }

  submit(values) {
    fetch(process.env.FHR_API + '/v1/league', {
      method: 'post',
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(values)
    }).then((response) => {
      console.log(response);
      this.setState({ fireRedirect: true });
    });
  }

  render() {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state

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
                     <h1>SIGN UP</h1>
                   </div>
                 </div>
               </div>
             </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dashboard-inner pad-none">
                <div className="template-detail-box" style={{ color: '#fff' }}>
                  <div style={{ margin: '10'}}>
                    <Formik
                      initialValues={{
                        leagueName: '',
                        email: '',
                        password: '',
                        vpassword: '',
                        firstName: '',
                        lastName: '',
                        address: '',
                        zip: '',
                        cc: '',
                        csc: '',
                        expmon: '',
                        expyear: ''
                      }}
                      validate={values => this.validate(values)}
                      onSubmit={(values, { setSubmitting }) => this.submit(values)}
                    >
                      {({isSubmitting}) => (
                        <Form>
                          <Row>
                            <Col xs={12} sm={12} md={6} style={{ marginTop: 15 }}>
                              <label>Homerun League Name</label><br/>
                              <Field type="text" name="leagueName" placeholder="Your league name w/o the year" className="signup-input" />
                              <ErrorMessage name="leagueName" component="div" className="error-text" />
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} sm={12} md={6} style={{ marginTop: 15 }}>
                              <label>Email</label><br/>
                              <Field type="email" name="email" placeholder="Your email address" className="signup-input" />
                              <ErrorMessage name="email" component="div" className="error-text" />
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} sm={6} md={4} style={{ marginTop: 20 }}>
                              <label>Password</label>
                              <Field type="password" name="password" className="signup-input" />
                              <ErrorMessage name="password" component="div" className="error-text" />
                            </Col>
                            <Col xs={12} sm={6} md={4} style={{ marginTop: 20 }}>
                              <label>Verify Password</label>
                              <Field type="password" name="vpassword" className="signup-input" />
                              <ErrorMessage name="vpassword" component="div" className="error-text" />
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} sm={6} md={4} style={{ marginTop: 15 }}>
                              <label>First Name</label><br/>
                              <Field type="text" name="firstName" className="signup-input" />
                              <ErrorMessage name="firstName" component="div" className="error-text" />
                            </Col>
                            <Col xs={12} sm={6} md={4} style={{ marginTop: 15 }}>
                              <label>Last Name</label><br/>
                              <Field type="text" name="lastName" className="signup-input" />
                              <ErrorMessage name="lastName" component="div" className="error-text" />
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} sm={8} md={4} style={{ marginTop: 15 }}>
                              <label>Street Address</label><br/>
                              <Field type="text" name="address" className="signup-input" />
                              <ErrorMessage name="address" component="div" className="error-text" />
                            </Col>
                            <Col xs={12} sm={4} md={4} style={{ marginTop: 15 }}>
                              <label>Zip Code</label><br/>
                              <Field type="text" name="zip" className="signup-input" />
                              <ErrorMessage name="zip" component="div" className="error-text" />
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} sm={8} md={4} style={{ marginTop: 15 }}>
                              <label>Credit Card</label><br/>
                              <Field type="text" name="cc" placeholder="Numbers only" className="signup-input" />
                              <ErrorMessage name="cc" component="div" className="error-text" />
                            </Col>
                            <Col xs={12} sm={4} md={4} style={{ marginTop: 15 }}>
                              <label>Card Security Code</label><br/>
                              <Field type="text" name="csc" placeholder="### or ####" className="signup-input" />
                              <ErrorMessage name="csc" component="div" className="error-text" />
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} sm={4} md={4} style={{ marginTop: 15 }}>
                              <label>Expiration Month</label><br/>
                              <Field type="text" name="expmon" placeholder="01" className="signup-input" />
                              <ErrorMessage name="expmon" component="div" className="error-text" />
                            </Col>
                            <Col xs={12} sm={4} md={4} style={{ marginTop: 15 }}>
                              <label>Expiration Year</label><br/>
                              <Field type="text" name="expyear" placeholder="2020" className="signup-input" />
                              <ErrorMessage name="expyear" component="div" className="error-text" />
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} sm={2} md={2} style={{ marginTop: 15 }}>
                              <button type="submit" disabled={isSubmitting}>
                                Submit
                              </button>
                            </Col>
                          </Row>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <Footer />
        {fireRedirect && (
          <Redirect to={from || '/log-in'}/>
        )}
      </div>
    );
  }
}

export default Signup;
