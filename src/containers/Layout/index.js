import React, { Component } from 'react';
// import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../../components/Modal';
import BeautyPartnerForm from '../../components/BeautyPartnerForm';
import { Link } from "react-router-dom";

import * as svgs from '../../constants/svgs.js';

class Layout extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  state = {
    isModalOpen: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.navigation.title !== this.props.navigation.title) {
      document.title = nextProps.navigation.title;
    }
  }
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  render() {
    const activePage = this.props.navigation.page;
    return (

      <div
        id="app-wrapper"
        className={`layout ${this.props.navigation.page}`}
        // className={classNames(
        //   'layout',
        //   this.props.navigation.page,
        //   {
        //     'modal-open': this.state.isModalOpen,
        //   }
        // )}
      >
        <div id="header" className="layout__header">
          <div className="page-wrapper">
            <div className="top-nav">
              <Link to="/">
                <h1 className="logo">
                  <img src='./static/img/logo.png'/>
                </h1>
              </Link>
              <nav id="menu">
                <Link to="/partners" className={activePage === 'partners' ? 'active' : ''}>Join us as a beauty partner</Link>
                {/*<a onClick={this.toggleModal} href="javascript:void(0)">
                  Join us as a beauty partner
      </a>*/}
              </nav>
            </div>
          </div>
        </div>
        <div id="content" className="layout__content">
          {this.props.children}
        </div>
        <div id="footer" className="layout__footer">
          <div className="page-wrapper">
            <div className="info">
              <p>Porcelænshaven 26, 2000 Frederiksberg, DK</p>
              <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#100;&#097;&#115;&#104;&#105;&#110;&#103;&#046;&#100;&#107;">&#104;&#101;&#108;&#108;&#111;&#064;&#100;&#097;&#115;&#104;&#105;&#110;&#103;&#046;&#100;&#107;</a>
            </div>

            <p>Follow us!</p>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/dashingdotdk" target="_blank" rel="noopener noreferrer">
                  {svgs.facebookLogo}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dashingclub" target="_blank" rel="noopener noreferrer">
                 {svgs.instagramLogo}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen}>
          <div>
            <buttom onClick={this.toggleModal} className="close">Close</buttom>
            <BeautyPartnerForm />
          </div>
        </Modal>
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
