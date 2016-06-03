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

export default class TaskList extends Component {

  render() {
    return (
      <Scene title="Task List">
        <View style={styles.container}>
          <Text style={styles.text}>TaskList</Text>
        </View>
      </Scene>
    );
  }

}


TaskList.propTypes = {
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
