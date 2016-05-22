import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configure from './store/configure';
import App from './App';

class Root extends Component {

  render() {
    return (
      <Provider store={configure()}>
        <App/>
      </Provider>
    );
  }

}

const setup = () => {
  return Root;
};

export default setup;
