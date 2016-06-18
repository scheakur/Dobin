import { handleActions } from 'redux-actions';

const initialState = {
  adding: false,
  tasks: [
    //FIXME remove these
    // These are for debug
    { title: 'Taks 001  001 001 001 001 001 001' },
    { title: 'Taks 002  002 002 002 002 002 002 002 002 002 002 002' },
    { title: 'Taks 003  003 003 003 003 003 003 003 003 003 003 003 003 003 003 003' },
  ],
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

