import { createAction } from 'redux-actions';

const addTaskStart = createAction('add task: start');
const addTaskEnd = createAction('add task: end');

const toggleTaskStart = createAction('toggle task: start');
const toggleTaskEnd = createAction('toggle task: end');

export const addTask = task => dispatch => {
  dispatch(addTaskStart(task));
  dispatch(addTaskEnd(task));
};


export const toggleTask = task => dispatch => {
  dispatch(toggleTaskStart(task));
  dispatch(toggleTaskEnd(task));
}
