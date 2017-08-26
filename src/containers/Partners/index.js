import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from '../../components/Modal';
import BeautyPartnerForm from '../../components/BeautyPartnerForm';
import classNames from 'classnames';

import setActivePage from '../../actions/navigation';
import * as svgs from '../../constants/svgs.js';

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
              Being a hairdresser can be difficult, <br/>getting more clients shouldn’t be.
            </h1>
            <p>
              Get the attention that your skills deserve with just 1 platform
            </p>
            <div className="cta">
              <a onClick={this.toggleModal} href="javascript:void(0)">Join as a beauty partner </a>
            </div>
          </div>
        </section>
        <section className="about">
        <div className="wrapper">
          <p>
          It’s time for beauty and wellness professionals to have their Dashing platform, where thousands of future clients can easily discover you.
         </p>
          <p>
          We love small businesses and want you to have a platform similar to ‘Airbnb’ to give you more freedom to promote your profile. You can build your reputation, skills and clients-list while doing what you love.
          </p>
        </div>
      </section>
        <section className="benefits">
          <div className="wrapper">
            <h2>Focus on what you do best in your job</h2>
            <h3>We take care of the rest</h3>
            <ul>
              <li>
                <div>{svgs.costumers}</div>
                <h3>Get More Clients</h3>
                <p>We connect you to many new clients including those who are too busy working and are not available at regular hours, so you can fill those empty time slots in your calendar</p>
              </li>
              <li>
                <div>{svgs.pictures}</div>
                <h3>Professional Pictures</h3>
                <p>We take beautiful photographs of you, your work and salon (if applicable) for your profile
                </p>
              </li>
              <li>
                <div>{svgs.profile}</div>
                <h3>A face to your business</h3>
                <p>People love people and we want to know more about YOU so clients can discover you as both a wonderful person and a professional
                </p>
              </li>
              <li>
                <div>{svgs.pr}</div>
                <h3>Your own PR</h3>
                <p>We will promote your services on social media, exclusive events, e-mails and collaborations with partner companies
                </p>
              </li>

            </ul>
            <div className="cta">
              <p>Are you a professional or a beauty student?</p>
              <a onClick={this.toggleModal} href="javascript:void(0)">Become a partner</a>
            </div>


          </div>
        </section>
        <section className="why">
            <div className="column yellow overlay">
              <h2>How to join our community </h2>
            </div>
            <div className="column">
              <ol>
                <li>
                  <p>Submit “Become a partner” form</p>
                </li>
                <li>
                  <p> Our team will contact you within 3 days to get you started</p>
                </li>
                <li>
                  <p>Free photography session will be organized (if desired)</p>
                </li>
                <li>
                  <p>Your individual profile will be created</p>
                </li>
              </ol>
            </div>
        </section>
        <section className="profile">
          <div className="profile-mock">
            <img src='./static/img/profile-mock.jpg' className="desktop" />
            <img src="./static/img/profile-mobile.jpg" className="mobile" />
            <ul className="mobile features">
              <li>
                <h3>1. STUNNING PICTURES</h3>
                <p>If you do not have as good photos of your work as you would like to, we have our team member who would arrange a photo-shoot for you for free. </p>
              </li>
              <li>
                <h3>2. CONTACT INFORMATION</h3>
                <p>Make sure to include a phone number and e-mail to allow clients to get in touch and request an appointment.</p>
              </li>

              <li>
                <h3>3. DESCRIPTION</h3>
                <p>We know that you are unique and that’s what we love about you. So have the freedom to express yourself and let your clients know what makes you the artist and professional you were born to be.</p>
              </li>
              <li>
                <h3>4. LANGUAGES</h3>
                <p>Surprise your clients with different languages that you speak, so they can choose the language that they are the most comfortable in when contacting you. </p>
              </li>
              <li>
                <h3>5. SERVICES AND PRICES</h3>
                <p>Indicate your price menu so the client knows exactly how much he or she will be charged for the fabulous service that they get from you. </p>
              </li>
            </ul>
            <div className="cta">
              <a onClick={this.toggleModal} href="javascript:void(0)">Create your profile!</a>
            </div>
          </div>
        </section>
        <section className="we-care">
          <div className="wrapper">
            <h3>We care a lot about our beauty partners’ individual growth and want to be as supportive as possible.</h3>
            <p>
              Get in touch with us by e-mail <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#100;&#097;&#115;&#104;&#105;&#110;&#103;&#046;&#100;&#107;">&#104;&#101;&#108;&#108;&#111;&#064;&#100;&#097;&#115;&#104;&#105;&#110;&#103;&#046;&#100;&#107;</a> or by phone <span>+45 52 60 82 01</span></p>
            <p>We are in development phase now and hope to see you at our launching party!</p>

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
