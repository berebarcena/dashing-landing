import projects from '../data/projects.js';

export default function getProjectData(projectId) {
  const projectData = projects[projectId];

  return {
    type: 'GET_PROJECT_DATA',
    name: projectData.name,
    description: projectData.description,
    pictures: projectData.pictures,
  }
}
