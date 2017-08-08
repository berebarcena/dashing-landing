import { combineReducers } from 'redux';

// Import your reducers here
import navigation from './navigation';
import projects from './projects';

const reducer = combineReducers({
  // Add your reducers to the list
  navigation,
  projects,
});

export default reducer;
