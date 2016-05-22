import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from './actions/app';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>App</Text>
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
  text: {
    fontSize: 20,
    color: '#f00',
  },
});
