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

export default class TaskForm extends Component {

  makeCloseButton() {
    return {
      type: 'icon',
      iconName: 'close',
      onPress: () => {
        this.props.navigator.pop();
      },
    };
  }

  render() {
    return (
      <Scene title={this.props.title} leftItem={this.makeCloseButton()}>
        <View style={styles.container}>
          <Text style={styles.text}>TaskForm</Text>
        </View>
      </Scene>
    );
  }

}


TaskForm.propTypes = {
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
