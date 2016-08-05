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
  history: [
    // FIXME remove these
    // These are for debug
    {
      date: new Date(2016, 8, 5),
      tasks: [
        { done_at: new Date(2016, 8, 5, 1, 2, 3), title: 'Old Taks 001  001 001 001 001 001 001' },
        { done_at: new Date(2016, 8, 5, 2, 2, 3), title: 'Old Taks 002  002 002 002 002 002 002 002 002 002 002 002' },
        { done_at: new Date(2016, 8, 5, 3, 2, 3), title: 'Old Taks 003  003 003 003 003 003 003 003 003 003 003 003 003 003 003 003' },
      ],
    },
    {
      date: new Date(2016, 8, 6),
      tasks: [
        { done_at: new Date(2016, 8, 6, 4, 2, 3), title: 'Old Taks 004' },
        { done_at: new Date(2016, 8, 6, 5, 2, 3), title: 'Old Taks 005' },
        { done_at: new Date(2016, 8, 6, 6, 2, 3), title: 'Old Taks 006' },
        { done_at: new Date(2016, 8, 6, 7, 2, 3), title: 'Old Taks 007' },
        { done_at: new Date(2016, 8, 6, 8, 2, 3), title: 'Old Taks 008' },
      ],
    },
    {
      date: new Date(2016, 8, 7),
      tasks: [
        { done_at: new Date(2016, 8, 7, 9, 2, 3), title: 'Old Taks 009' },
        { done_at: new Date(2016, 8, 7, 10, 2, 3), title: 'Old Taks 010' },
        { done_at: new Date(2016, 8, 7, 11, 2, 3), title: 'Old Taks 011' },
        { done_at: new Date(2016, 8, 7, 12, 2, 3), title: 'Old Taks 012' },
        { done_at: new Date(2016, 8, 7, 13, 2, 3), title: 'Old Taks 013' },
      ],
    },
    {
      date: new Date(2016, 8, 8),
      tasks: [
        { done_at: new Date(2016, 8, 8, 14, 2, 3), title: 'Old Taks 014' },
        { done_at: new Date(2016, 8, 8, 15, 2, 3), title: 'Old Taks 015' },
      ],
    },
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

