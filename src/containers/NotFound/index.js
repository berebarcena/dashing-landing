import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import setActivePage from '../../actions/navigation';

class About extends Component {
  static propTypes = {
    setActivePage: PropTypes.func,
  };

  componentWillMount() {
    this.props.setActivePage('Page Not Found | Bere B', 'not-found');
  }

  render() {
    return (
      <div className="not-found">
        <h2>404</h2>
        <p>
          Page Not Found
        </p>
      </div>
    );
  }
}

export default connect(null, {
  setActivePage,
})(About)
