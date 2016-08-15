import { handleActions } from 'redux-actions';

const initialState = {
  ready: false,
};


export default handleActions({

  'setup: end': function (state, action) {
    console.log('%caction', 'color: red; font-size: large;', action.type);

    return Object.assign({}, state, {
      ready: true,
    });
  },

}, initialState);
