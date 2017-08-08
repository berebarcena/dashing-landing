const initialState = {
  name: '',
  description: '',
  pictures: [],
};

export default function projects(state = initialState, action) {
  switch (action.type) {
    case 'GET_PROJECT_DATA':
      return Object.assign({}, state, {
        name: action.name,
        description: action.description,
        pictures: action.pictures,
      });
    default:
      return state
  }
}
