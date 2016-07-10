import { handleActions } from 'redux-actions';

const initialState = {
  adding: false,
  tasks: [
    // FIXME remove these
    // These are for debug
    { title: 'Taks 001  001 001 001 001 001 001' },
    { title: 'Taks 002  002 002 002 002 002 002 002 002 002 002 002' },
    { title: 'Taks 003  003 003 003 003 003 003 003 003 003 003 003 003 003 003 003' },
    { title: 'Taks 004' },
    { title: 'Taks 005' },
    { title: 'Taks 006' },
    { title: 'Taks 007' },
    { title: 'Taks 008' },
    { title: 'Taks 009' },
    { title: 'Taks 010' },
    { title: 'Taks 011' },
    { title: 'Taks 012' },
    { title: 'Taks 013' },
    { title: 'Taks 014' },
    { title: 'Taks 015' },
  ],
};


export default handleActions({

  'add task: start'(state) {
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

