import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import HomeHeader from '../home/Header';
import './Signup.scss';
import { Row, Col } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Footer from '../home/Footer';

function Signup({ location }) {

  const [fireRedirect, setFireRedirect] = useState(false);

  // State for each input field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allowSubmission, setAllowSubmission] = useState(false);

  // Handlers to set state based on input changes
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the submission, for example, log the state
    console.log({ firstName, lastName, email, password });
  };

  useEffect(() => {


    if (email.length > 0 && password.length > 0) {
      setAllowSubmission(true);
    }
    else {
      setAllowSubmission(false);
    }
    // check if all of the values passed in exist
  }, [email, password])

  const validate = values => {
    let errors = {};
    let errorEmail = validateEmail(values.email);
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
  };

  const validateEmail = input => {
    if (!input) {
      return 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(input)) {
      return 'Enter a valid email address';
    }
    return false;
  };

  const submit = values => {
    fetch(`${process.env.FHR_API}/v1/league`, {
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
      setFireRedirect(true);
    });
  };

  const { from } = location.state || '/';

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
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      onChange={handleFirstNameChange}
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      onChange={handleLastNameChange}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={handlePasswordChange}
                    />

                    <button type="submit" disabled={!allowSubmission}>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {fireRedirect && (
        <Redirect to={from || '/log-in'} />
      )}
    </div>
  );
}

export default Signup;
