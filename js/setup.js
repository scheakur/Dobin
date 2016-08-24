import React from 'react';
import { Provider } from 'react-redux';

import configure from './store/configure';
import App from './App';

const Root = () => (
  <Provider store={configure()}>
    <App />
  </Provider>
);

const setup = () => Root;

export default setup;
