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


export default class Settings extends Component {

  renderContent() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
      </View>
    );
  }

  render() {
    return (
      <Scene title="Settings">
        {this.renderContent()}
      </Scene>
    );
  }

}


Settings.propTypes = {
  navigator: PropTypes.object,
};
