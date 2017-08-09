import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as svgs from '../../constants/svgs.js';

class Layout extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.navigation.title !== this.props.navigation.title) {
      document.title = nextProps.navigation.title;
    }
  }

  render() {
    return (
      <div id="app-wrapper" className={`layout ${this.props.navigation.page}`}>
        <div id="header" className="layout__header">
          <div className="page-wrapper">
            <h1 className="logo">
                <img src='./static/img/logo.png'/>
            </h1>
            <nav id="menu">
              <ul>
                <li>
                  <Link to="/">
                    Join us as a beauty partner
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div id="content" className="layout__content">
          {this.props.children}
        </div>
        <div id="footer" className="layout__footer">
          <div className="page-wrapper">
            <p>Follow us!</p>
            <ul className="social-icons">
              <li>
                <a href="#">
                  {svgs.facebookLogo}
                </a>
              </li>
              <li>
                <a href="#">
                 {svgs.instagramLogo}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
  };
}

// Passing the pure parameter as false as this component is wrapping a wrapper. This is likely not
// needed for other uses of connect(). More about connect:
// https://github.com/reactjs/react-redux/blob/master/docs/api.md
export default connect(mapStateToProps, null, null, { pure: false })(Layout);
