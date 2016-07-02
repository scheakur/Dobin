import { createAction } from 'redux-actions';

const addTaskStart = createAction('add task: start');
const addTaskEnd = createAction('add task: end');

export const addTask = task => dispatch => {
  dispatch(addTaskStart(task));
  dispatch(addTaskEnd(task));
};
