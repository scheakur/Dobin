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

export default class Settings extends Component {

  render() {
    return (
      <Scene title="Settings">
        <View style={styles.container}>
          <Text style={styles.text}>Settings</Text>
        </View>
      </Scene>
    );
  }

}


Settings.propTypes = {
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
