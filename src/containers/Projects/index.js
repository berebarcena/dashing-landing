import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import setActivePage from '../../actions/navigation';

class Projects extends Component {
  static propTypes = {
    setActivePage: PropTypes.func,
  };

  componentWillMount() {
    this.props.setActivePage('Projects | Bere B', 'projects');
  }

  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <Link to="/projects/my-project">
              <img src='./static/img/logo.svg'/>
              <p>My Project</p>
            </Link>
          </li>
          <li>
            <Link to="/projects/your-project">
              <img src='./static/img/logo.svg'/>
              <p>Your Project</p>
            </Link>
          </li>
          <li>
            <Link to="/projects/your-project">
              <img src='./static/img/logo.svg'/>
              <p>3 Project</p>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(null, {
  setActivePage,
})(Projects)
