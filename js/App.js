import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from './actions/app';

import Timer from './components/Timer';

class App extends Component {

  constructor(...args) {
    super(...args);
  }


  render() {
    return (
      <View style={styles.container}>
        <Timer refs="timer" minutes={3}/>
      </View>
    );
  }

}


export default connect(
  ({ app }) => ({ app }),
  (dispatch) => ({
    appActions: bindActionCreators(appActions, dispatch),
  })
)(App);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
