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
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 header-inner pull-left">
               <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 logo">
                 <Link to="/"><img src={logo} alt="logo.png" /></Link>
               </div>
             </div>
           </div>
       </div>
      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
