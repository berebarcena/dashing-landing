import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import setActivePage from '../../actions/navigation';
import getProjectData from '../../actions/projects';

class Project extends Component {
  static propTypes = {
    setActivePage: PropTypes.func,
    getProjectData: PropTypes.func,
    match: PropTypes.object,
    project: PropTypes.object
  };

  componentWillMount() {
    const projectId = this.props.match.params.projectId;
    this.props.getProjectData(projectId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.project.name !== nextProps.project.name) {
      this.props.setActivePage(`${nextProps.project.name} | Projects | Bere B`, 'project');
    }
  }

  render() {
    const project = this.props.project;
    return (
      <div className="project">
        <Link to="/projects"> &lt; Back </Link>
        <h2>{project.name}</h2>
        <p>
          {project.description}
        </p>
        {
          project.pictures.map((picture, i) => (<div key={`picture-${i}`}>picture file: {picture}</div>))
        }
      </div>
    );
  }
}

// Belongs to redux
function mapStateToProps(state) {
  return {
    project: state.projects,
  }
}

// Belongs to redux
export default connect(mapStateToProps, {
  setActivePage,
  getProjectData,
})(Project)
