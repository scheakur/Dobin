import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SceneWithMenu } from '../components';


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
      <SceneWithMenu title="Settings" navigator={this.props.navigator}>
        {this.renderContent()}
      </SceneWithMenu>
    );
  }

}


Settings.propTypes = {
  navigator: PropTypes.object,
};
