import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Scene } from '../components';

export default class TaskTimer extends Component {

  render() {
    return (
      <Scene title="Timer">
        <View style={styles.container}>
          <Text style={styles.text}>TaskTimer</Text>
        </View>
      </Scene>
    );
  }

}


TaskTimer.propTypes = {
  navigator: PropTypes.object,
};


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
