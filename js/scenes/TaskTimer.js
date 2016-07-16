import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { Scene, Timer } from '../components';


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


export default class TaskTimer extends Component {

  renderTimer() {
    return (
      <Timer minutes={25} />
    );
  }

  render() {
    return (
      <Scene title="Timer">
        <View style={styles.container}>
          {this.renderTimer()}
        </View>
      </Scene>
    );
  }

}


TaskTimer.propTypes = {
  navigator: PropTypes.object,
};
