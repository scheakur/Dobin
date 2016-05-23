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

  constructor(...args) {
    super(...args);

    this.state = {
      started: Date.now(),
      now: Date.now(),
    };
  }


  componentDidMount() {
    this.id = setInterval(() => {
      this.setState({
        now: Date.now(),
      });
    }, 1000);
  }


  componentWillUnmount() {
    if (this.id) {
      clearInterval(this.id);
    }
  }


  padLeft(num) {
    return ('0' + num).slice(-2);
  }


  render() {
    const elapsed = (this.state.now - this.state.started) / 1000;

    const seconds = this.padLeft(Math.floor(elapsed % 60));
    const minutes = this.padLeft(Math.floor(elapsed / 60) % 60);
    const hours = this.padLeft(Math.floor(elapsed / 60 / 60) % 60);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{hours}:{minutes}:{seconds}</Text>
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
    fontFamily: 'Courier New',
    fontSize: 20,
    color: '#f00',
  },
});
