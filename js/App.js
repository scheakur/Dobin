import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from './actions/app';

import Nav from './Nav';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const App = () => (
  <View style={styles.container}>
    <Nav />
  </View>
);


export default connect(
  ({ app }) => ({ app }),
  (dispatch) => ({
    appActions: bindActionCreators(appActions, dispatch),
  })
)(App);

