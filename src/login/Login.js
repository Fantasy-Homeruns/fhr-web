import React, { Component } from 'react';
import { Formik } from 'formik';
import { Row, Col } from 'reactstrap';


import HomeHeader from '../home/Header';
import Footer from '../home/Footer'

class Login extends Component {
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
                     <h1>LOGIN</h1>
                   </div>
                 </div>
               </div>
             </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 dashboard-inner pad-none">
                <div className="template-detail-box" style={{ color: '#fff' }}>
                  <div style={{ margin: '20'}}>
                    <Formik
                      initialValues={{ email: '', password: '' }}
                      validate={values => {
                        let errors = {};
                        if (!values.email) {
                          errors.email = 'Required';
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                          errors.email = 'Invalid email address';
                        }
                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                          setSubmitting(false);
                        }, 400);
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit}>
                        <Row>
                          <Col xs={9} sm={4} md={3} style={{ marginTop: 15 }}>
                            <label>Email</label><br/>
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={9} sm={4} md={3} style={{ marginTop: 15 }}>
                            <label>Password</label>
                            <input
                              type="password"
                              name="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={3} sm={2} md={2} style={{ marginTop: 15 }}>
                            <button type="submit" disabled={isSubmitting}>
                              Submit
                            </button>
                          </Col>
                        </Row>
                        </form>
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
      </div>
    );
  }
}

export default Login;
