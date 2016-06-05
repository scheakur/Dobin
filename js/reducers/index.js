import { combineReducers } from 'redux';

import app from './app';
import tasks from './tasks';

export default combineReducers({
  app,
  tasks,
});
