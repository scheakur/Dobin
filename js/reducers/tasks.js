import { handleActions } from 'redux-actions';

const initialState = {
  adding: false,
  tasks: [
    // FIXME remove these
    // These are for debug
    {
      id: '1',
      done: false,
      title: 'Taks 001  001 001 001 001 001 001',
    },
    {
      id: '2',
      done: false,
      title: 'Taks 002  002 002 002 002 002 002 002 002 002 002 002',
    },
    {
      id: '3',
      done: false,
      title: 'Taks 003  003 003 003 003 003 003 003 003 003 003 003 003 003 003 003',
    },
    {
      id: '4',
      done: false,
      title: 'Taks 004',
    },
    {
      id: '5',
      done: false,
      title: 'Taks 005',
    },
    {
      id: '6',
      done: false,
      title: 'Taks 006',
    },
    {
      id: '7',
      done: false,
      title: 'Taks 007',
    },
    {
      id: '8',
      done: false,
      title: 'Taks 008',
    },
    {
      id: '9',
      done: false,
      title: 'Taks 009',
    },
    {
      id: '10',
      done: false,
      title: 'Taks 010',
    },
    {
      id: '11',
      done: false,
      title: 'Taks 011',
    },
    {
      id: '12',
      done: false,
      title: 'Taks 012',
    },
    {
      id: '13',
      done: false,
      title: 'Taks 013',
    },
    {
      id: '14',
      done: false,
      title: 'Taks 014',
    },
    {
      id: '15',
      done: false,
      title: 'Taks 015',
    },
  ],
  history: {
    // FIXME remove these
    // These are for debug
    [new Date(2016, 8, 5)]: [
      {
        done_at: new Date(2016, 8, 5, 1, 2, 3),
        title: 'Old Taks 001  001 001 001 001 001 001',
      },
      {
        done_at: new Date(2016, 8, 5, 2, 2, 3),
        title: 'Old Taks 002  002 002 002 002 002 002 002 002 002 002 002',
      },
      {
        done_at: new Date(2016, 8, 5, 3, 2, 3),
        title: 'Old Taks 003  003 003 003 003 003 003 003 003 003 003 003 003 003 003 003',
      },
    ],
    [new Date(2016, 8, 6)]: [
      {
        done_at: new Date(2016, 8, 6, 4, 2, 3),
        title: 'Old Taks 004',
      },
      {
        done_at: new Date(2016, 8, 6, 5, 2, 3),
        title: 'Old Taks 005',
      },
      {
        done_at: new Date(2016, 8, 6, 6, 2, 3),
        title: 'Old Taks 006',
      },
      {
        done_at: new Date(2016, 8, 6, 7, 2, 3),
        title: 'Old Taks 007',
      },
      {
        done_at: new Date(2016, 8, 6, 8, 2, 3),
        title: 'Old Taks 008',
      },
    ],
    [new Date(2016, 8, 7)]: [
      {
        done_at: new Date(2016, 8, 7, 9, 2, 3),
        title: 'Old Taks 009',
      },
      {
        done_at: new Date(2016, 8, 7, 10, 2, 3),
        title: 'Old Taks 010',
      },
      {
        done_at: new Date(2016, 8, 7, 11, 2, 3),
        title: 'Old Taks 011',
      },
      {
        done_at: new Date(2016, 8, 7, 12, 2, 3),
        title: 'Old Taks 012',
      },
      {
        done_at: new Date(2016, 8, 7, 13, 2, 3),
        title: 'Old Taks 013',
      },
    ],
    [new Date(2016, 8, 8)]: [
      {
        done_at: new Date(2016, 8, 8, 14, 2, 3),
        title: 'Old Taks 014',
      },
      {
        done_at: new Date(2016, 8, 8, 15, 2, 3),
        title: 'Old Taks 015',
      },
    ],
  },
};


export default handleActions({

  'add task: start': function (state) {
    return Object.assign({}, state, {
      adding: true,
    });
  },

  'add task: end': function (state, action) {
    return Object.assign({}, state, {
      adding: false,
      tasks: state.tasks.concat(action.payload),
    });
  },

  'toggle task: start': function (state, action) {
    return Object.assign({}, state, {
      tasks: state.tasks.map(task => {
        if (task.id === action.payload.id) {
          return Object.assign({}, task, {
            done: !task.done,
          });
        }

        return task;
      }),
    });
  },

}, initialState);

