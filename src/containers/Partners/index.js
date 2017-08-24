import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../../components/Modal';
import BeautyPartnerForm from '../../components/BeautyPartnerForm';
import classNames from 'classnames';

import setActivePage from '../../actions/navigation';

class Partners extends Component {
  static propTypes = {
    setActivePage: PropTypes.func,
  };

  state = {
    isModalOpen: false,
  };

  componentWillMount() {
    this.props.setActivePage('Beauty Partner | Dashing', 'partners');
  }
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {

    return (
      <div className={classNames(
          'partners',
          {
           'modal-open': this.state.isModalOpen,
          }
      )}>

        <section className="intro-text">
          <div className="wrapper">
            <h1>
              Holis a todos bebes :)
            </h1>
            <p>
             Discover beauty students and experts with their own prices, ratings &<br/> portfolio <span>all in 1 platform.</span>
            </p>
            <h3>Become a beauty partner</h3>
            <a onClick={this.toggleModal} href="javascript:void(0)">Join us as a beauty partner </a>
          </div>
        </section>
        <section className="benefits">
          <div className="wrapper">
            <h2>All things we take care of for you</h2>
            <ul>
              <li>
                <h3>Benefit1</h3>
                <p>This is the explanation about why</p>
              </li>
              <li>
                <h3>Benefit1</h3>
                <p>This is the explanation about why</p>
              </li>
              <li>
                <h3>Benefit1</h3>
                <p>This is the explanation about why</p>
              </li>
              <li>
                <h3>Benefit1</h3>
                <p>This is the explanation about why</p>
              </li>
              <li>
                <h3>Benefit1</h3>
                <p>This is the explanation about why</p>
              </li>
              <li>
                <h3>Benefit1</h3>
                <p>This is the explanation about why</p>
              </li>

            </ul>

          </div>
        </section>
        <section className="why">
            <div className="column yellow overlay">
              <h1>Why <br />dashing?</h1>
            </div>
            <div className="column">
              <ul>
                <li>
                  <h3>Best solution for foreigners</h3>
                  <p>Discover trusted and rated stylists in an unknown city</p>
                </li>
                <li>
                  <h3>Get to know your stylist upfront</h3>
                  <p> Choose according to the exact prices, reviews and past work</p>
                </li>
                <li>
                  <h3>Exposure for beauty freelancers</h3>
                  <p>Give experts, student stylists and anyone who is passionate about hair & beauty a chance to build their portfolio and improve their skills </p>
                </li>
              </ul>
            </div>
        </section>
        <section className="notify">
          <div className="wrapper">
            <h2>We are still in our development phase</h2>
            <p>We are just 2 girls trying to make this happen!</p>
            <p>Leave us your email and we'll let you know once we are ready!</p>
            <p>Don't worry, we hate spam too! (Anyway, we are too busy building this platform)</p>
            <h3>Get Notified <br/> & invited to our launching party!</h3>

          </div>
        </section>
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

export default connect(null, {
  setActivePage,
})(Partners)
