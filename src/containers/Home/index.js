import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setActivePage from '../../actions/navigation';


class Home extends Component {
  static propTypes = {
    setActivePage: PropTypes.func,
  };

  componentWillMount() {
    this.props.setActivePage('Home | Dashing', 'home');
  }

  render() {
    return (
      <div className="home">
        <section className="intro-text">
          <img src="./static/img/hero-background.jpg"/>

          <div className="wrapper">

            <h1>
              Living abroad can be hard <br />
              Getting a haircut <span>shouldn’t be</span>
            </h1>
            <p>
              Discover great beauty professionals in Copenhagen Area.
            </p>
            <div>Get Notified.</div>
          </div>

        </section>
        <section className="about">
          <div className="wrapper">
            <p>
             After living in over 5 new countries, finding a new hairdresser became a regular issue for us.<br/>
             The more we talked about this problem with others the more we realised that there are many other people also struggling to find their <span>perfect</span> hairdresser in a new country. A hairdresser that is happy to speak with you in your preferred language and one that understands and is comfortable cutting curly, thick, thin or other (!) hair. <br/> A hairdresser who gets <span>you.</span>
            </p>
          </div>
        </section>
        <section className="why">
            <div className="column yellow">
              <h1>Why dashing?</h1>
            </div>
            <div className="column">
              <ul>
                <li>
                  <h3>Best solution for foreigners</h3>
                  <p>Discover trusted and rated stylists in an unknown city</p>
                </li>
                <li>
                  <h3>Affordable for students</h3>
                  <p> Choose stylists according to any budget</p>
                </li>
                <li>
                  <h3>Exposure for beauty freelancers</h3>
                  <p>Give student stylists a chance to build their portfolio and improve their skills</p>
                </li>
              </ul>
            </div>
        </section>
        <section className="notify">
          <div className="wrapper">
            <h2>We are still in our development phase</h2>
            <p>We are just 2 girls trying to make this done!<br/>Leave us your email and we'll let you know once we are ready!<br/>Don't worry, we hate spam too! (We would never do bad things to your mail u_u)</p>
            <div>Get notified</div>

          </div>
        </section>
      </div>
    );
  }
}

export default connect(null, {
  setActivePage,
})(Home)
