import { handleActions } from 'redux-actions';

const initialState = {
  adding: false,
  tasks: [],
};


export default handleActions({

  'add task: start'(state, action) {
    return Object.assign({}, state, {
      adding: true,
    });
  },

  'add task: end'(state, action) {
    return Object.assign({}, state, {
      adding: false,
      tasks: state.tasks.concat(action.payload),
    });
  },

}, initialState);

