import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setActivePage from '../../actions/navigation';

class Home extends Component {
  static propTypes = {
    setActivePage: PropTypes.func,
  };

  componentWillMount() {
    this.props.setActivePage('Dashing', 'home');
  }

  render() {
    return (
      <div className="home">
        <div className="intro-text">
          <h1>Living abroad can be hard</h1>
          <h1>Getting a haircut shouldn’t be</h1>
          <p>
            Discover great beauty professionals in Copenhagen Area.
          </p>
        </div>
        <div className="section">
          <h3>Living abroad can be hard, getting a haircut shouldn’t be.</h3>
          <p>
           We are foreigners as well, and we get the that it is a pain in the ass to settle down, get a CPR, understand danish, yarayara.
          </p>

        </div>
        <div className="section two-column">
          <div className="column">
            <h1>Why dashing?</h1>
            <p>
              Discover great beauty professionals in Copenhagen Area.
            </p>
          </div>
          <div className="column">
            <p>
              Here we describe about us and our awesome stuff
            </p>
            <p>
              Here we describe about us and our awesome stuff
            </p>
            <p>
              Here we describe about us and our awesome stuff
            </p>
            <p>
              Here we describe about us and our awesome stuff
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(null, {
  setActivePage,
})(Home)
