import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setActivePage from '../../actions/navigation';

class About extends Component {
  static propTypes = {
    setActivePage: PropTypes.func,
  };

  componentWillMount() {
    this.props.setActivePage('About | Bere B', 'about');
  }

  render() {
    return (
      <div className="about">
        <h2>About</h2>
        <p>
          Bere studied industrial design and after being afraid of people falling from the furniture she built,
          she decided to give it a chance to the digital things.
        </p>
        <h3>What</h3>
        <p>UX/UI, HTML, CSS, JS, and some illustrations sometimes (it depends on her mood).</p>
        <h3>Where</h3>
        <p>She was born in <a href="#" target="_blank">Veracruz,</a> Mexico but she now lives in Copenhagen, Denmark.</p>
        <h3>Extra</h3>
        <p>She has a twin sister, she can play the piano and violin, she has a crush with Beethoven (the composer not the dog) and she
        owns a needy but lovely corgi.</p>

      </div>
    );
  }
}

export default connect(null, {
  setActivePage,
})(About)
