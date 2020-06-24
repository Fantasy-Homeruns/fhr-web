import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import logo from '../images/logo.png';
import { simpleAction } from '../_actions/simpleAction';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

class HomeHeader extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-6 col-xs-6 pull-left">
              <div className="logo">
                <Link to="/"><img src={logo} alt="logo.png" /></Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 pull-right">
              <a className="red-button" href="https://admin.fantasyhomeruns.com/log-in">
                LOGIN
              </a>
              <a className="blue-button" href="https://admin.fantasyhomeruns.com/signup">
                SIGNUP
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
